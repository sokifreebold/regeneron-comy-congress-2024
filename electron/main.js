// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain, screen, globalShortcut } = require('electron');
const fs = require('fs');
const path = require('node:path');

const express = require('express');
const expressApp = express();

const devTools = false;

// ========================================================================== //
// CSV file creation and appending

let csvFilePath;

function createNewCSVFile() {
	const documentsPath = app.getPath('documents');
	const adcTrackingPath = path.join(documentsPath, 'AACR-Interactive-Panel');

	const now = new Date();
	const dateTimeString = now.toISOString().replace(/:/g, '-').replace(/\..+/, '');

	if (!fs.existsSync(adcTrackingPath)) {
		fs.mkdirSync(adcTrackingPath, { recursive: true });
	}

	csvFilePath = path.join(adcTrackingPath, `AACR-Interactive-Panel-backup_${dateTimeString}.csv`);

	// Create the file with the headers if required
	const headers = 'event,page_id,page_path,timestamp\n';
	fs.writeFileSync(csvFilePath, headers, 'utf8');
}

function convertToCSV(data) {
	return data
		.map((item) => {
			// Extract values, ensuring undefined fields are handled
			const event = item.event || '';
			const pageId = item.pageId || '';
			const page_path = item.pagePath || '';

			// Current timestamp
			const now = new Date().toISOString();

			// Concatenate the values with commas
			return [event, pageId, page_path, now].join(',');
		})
		.join('\n');
}

function appendToCSV(data) {
	// Check if data is an object and convert it to a CSV string
	const dataToWrite =
		typeof data === 'object' && !Buffer.isBuffer(data) ? convertToCSV([data]) : data;
	console.log('Writing to CSV', csvFilePath);

	fs.appendFile(csvFilePath, dataToWrite + '\n', (err) => {
		// Ensure newline at the end
		if (err) {
			console.error('Failed to append data to CSV:', err);
			throw err;
		}
		console.log('Data was appended to CSV file');
	});
}

ipcMain.on('append-to-csv', (event, data) => {
	appendToCSV(data);
});

// ========================================================================== //
// Express server

// Serve static files from a directory (this would be your build folder, for instance)
//expressApp.use(express.static('./dist'));
expressApp.use(express.static(path.join(__dirname, 'dist')));

const server = expressApp.listen(3011, () => {
	console.log('Local server running on http://localhost:3011');
});

function appendToCSVInDocuments(data) {
	fs.appendFile(csvFilePath, data, (err) => {
		if (err) throw err; // Handle the error as you see fit
		console.log('Data was appended to CSV file');
	});
}

function createWindow() {
	const { x, y } = screen.getCursorScreenPoint();

	// Determine which screen the cursor is on
	const activeDisplay = screen.getDisplayNearestPoint({ x, y });

	// Create the browser window.
	const mainWindow = new BrowserWindow({
		x: activeDisplay.bounds.x,
		y: activeDisplay.bounds.y,
		width: 1920,
		height: 1080,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
		},
	});

	globalShortcut.register('Escape', () => {
		if (mainWindow.isFullScreen()) {
			mainWindow.setFullScreen(false);
		}
	});

	globalShortcut.register('F11', () => {
		if (!mainWindow.isFullScreen()) {
			mainWindow.setFullScreen(true);
		} else {
			mainWindow.setFullScreen(false);
		}
	});

	// Set the window to full screen
	mainWindow.setFullScreen(true);

	// Hide the menu bar
	mainWindow.setMenuBarVisibility(false);

	// and load the index.html of the app.
	mainWindow.loadURL('http://localhost:3011');

	// Open the DevTools.
	if (devTools) mainWindow.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
	createWindow();

	app.on('activate', function () {
		// On macOS it's common to re-create a window in the app when the
		// dock icon is clicked and there are no other windows open.
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});

	createNewCSVFile();
});

ipcMain.on('quit-app', () => {
	app.quit();
});

ipcMain.on('reload-app', () => {
	mainWindow.reload();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

app.on('will-quit', () => {
	globalShortcut.unregisterAll();
	server.close();
});
