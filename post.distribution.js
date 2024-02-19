/**
 * Script to copy nuxt generate dist files to landing page location
 */
const fs = require('fs-extra');
const path = require('path');
const archiver = require('archiver');

console.log('[Distribution]: Starting the distribution process');

// Define the paths for the input and output directories
const inputPath = path.join(__dirname, 'app/dist');
const outputPath = path.join(__dirname, 'www');

try {
	// Check if the input directory exists
	if (fs.existsSync(inputPath)) {
		console.log('[Distribution]: Source directory found.');

		// Ensure that the output directory exists, create it if it doesn't
		if (!fs.existsSync(outputPath)) {
			console.log('[Distribution]: Output directory not found. Creating...');
			fs.mkdirSync(outputPath);
		}

		// Perform the copy operation
		console.log('[Distribution]: Copying files...');
		fs.copySync(inputPath, outputPath);

		console.log('[Distribution]: Files copied successfully');
	} else {
		console.log('[Distribution]: Source directory does not exist. Aborting process.');
	}
} catch (error) {
	console.log(error);
}

console.log('[Distribution]: Process completed.');

// Zip
const outputPackage = path.join(__dirname, 'www/package');
const outputZip = path.join(outputPackage, 'aad-congress-microsite-package.zip');

// Ensure output directory exists
if (!fs.existsSync(outputPackage)) {
	fs.mkdirSync(outputPackage);
}

// Create a file to stream archive data to
const output = fs.createWriteStream(outputZip);
const archive = archiver('zip', {
	zlib: { level: 9 }, // Sets the compression level
});

output.on('close', function () {
	console.log(`Archive created. Total bytes: ${archive.pointer()}`);
});

archive.on('error', function (err) {
	throw err;
});

// Pipe archive data to the file
archive.pipe(output);

// Function to recursively walk through a directory
function walkDir(dir) {
	let results = [];
	const list = fs.readdirSync(dir);

	list.forEach(function (file) {
		file = path.resolve(dir, file);
		const stat = fs.statSync(file);
		if (stat && stat.isDirectory()) {
			// Recurse into a subdirectory
			results = results.concat(walkDir(file));
		} else {
			// Is a file
			results.push(file);
		}
	});
	return results;
}

// Append files from source directory
const files = walkDir(inputPath);

files.forEach((file) => {
	const filePath = file;
	const relativePathInZip = path.relative(inputPath, file); // To preserve folder structure in the zip
	archive.file(filePath, { name: relativePathInZip });
});

// Finalize the archive
archive.finalize();
