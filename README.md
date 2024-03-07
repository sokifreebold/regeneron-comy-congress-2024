# AACR Congress Microsite & Kiosk

The microsite is a Single Page Application developed with Vue 3 (TypeScript) in Vite.

## Environments

-   [Internal Staging Site](https://aacr-congress.dev.tech.colabglo.com/#/)
-   [Production Live Site](https://regeneronmacontentcongress.com/s/)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Project Components

The project follows the standard Vue 3 project style guide. Following are the libraries used

-   `vue-router` - Navigation through the app
-   `pinia` - State management
-   `vue-i18n` - Internationalization
-   `vue-gtag` - Google Analytics
-   `SCSS - app/src/scss` - For Styles

**Useful Info**

-   `app/public/pdfs` - contains all the PDFs for trials cards match with data
-   `app/public/pdfjs-4.0.269-dist-custom` - contains the PDF viewer to load pdfs
-   `app/src/data/data/*` - data for all the trial cards (kiosk & microsite)
-   `app/src/@types` - contains all the types for the data
-   `app/src/components/TrialCards.vue` - Main Component to handle all the trial cards

## Project Setup

The following commands needs to be run at `app` directory

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
// Microsite
npm run dev

// Kiosk - Interactive Panel
npm run dev:kiosk
```

## Production Build Files

```sh
// Microsite
npm run build

// Kiosk - Interactive Panel
npm run build:kiosk
```

After the command runs successfully, the files will be available in `app/dist` folder which can be zipped and sent to RafterOne for deployment.

## Google Analytics

-   [Microsite Google Analytics Account](https://analytics.google.com/analytics/web/?authuser=4#/p428656037/reports/intelligenthome)
-   [Kiosk Interactive Panels Analytics Account](https://analytics.google.com/analytics/web/?authuser=4#/p429504844/reports/intelligenthome)
-   [DSE Deck Analytics Account](https://analytics.google.com/analytics/web/?authuser=4#/p429748703/reports/intelligenthome)

The analytics code for microsite & kiosk panels are available in `app/src/app.config.ts`

## Useful Link

-   [GitHub Repo](https://github.com/BOLDSCIENCE/regeneron-aacr-congress-2024)
-   [Figma Designs](https://www.figma.com/file/8urDuT4PAc1mmDF7ZlNm0Y/REGN-AACR-Microsite-2024?type=design&node-id=2862-29504&mode=design&t=hVF5cS9CL3D6asNq-0)
-   [CI/CD DevOps Pipeline](https://us-east-1.console.aws.amazon.com/codesuite/codepipeline/pipelines/aacr-congress-boldscience-dev/view?region=us-east-1)
-   [S3 Bucket hosting internal Site](https://s3.console.aws.amazon.com/s3/buckets/aacr-congress-boldscience-dev-app?region=us-east-1&bucketType=general&tab=objects)

---

## Packaging Microsite

Build the microsite by running following commands

```sh
cd app
npm run build
```

The final files will be available in `app/dist`. Please package them up and supply the files to the vendor.

## Packaging Interactive Panels - Kiosk

Build the kiosk version by running following commands

```sh
cd app
npm run build:kiosk
```

Copy the produced files from `/app/dist` to `/electron/dist`. Then please run the following command to generate .exe file for panels kiosk

```sh
cd electron
npm run distribute-windows
```

The .exe file will be generated in `/electron/distribution`

## Packaging DSE

Copy the files from `/dse` to `/electron-dse/dist`. Then please run the following command to generate .exe file for panels kiosk

```sh
cd electron-dse
npm run distribute-windows
```

The .exe file will be generated in `/electron-dse/distribution`

---

For more info or code walkthrough please contact sahil.david@boldsci.com

END OF DOCUMENT.
