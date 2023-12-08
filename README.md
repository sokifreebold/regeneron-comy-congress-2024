# ASH Microsite SPA

The microsite is a Single Page Application developed with Vue 3 (TypeScript) in Vite.

## Environments

-   [Internal Staging Site](https://ash-microsite.dev.tech.colabglo.com/#/)
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
-   `app/public/pdfjs-4.0.269-dist` - contains the PDF viewer to load pdfs
-   `app/src/content/data.ts` - data for all the trial cards
-   `app/src/@types` - contains all the types for the data
-   `app/src/components/TrialCards.vue` - Main Component to handle all the trial cards

## Production Build Files

Please run the following command for the production files.

```sh
cd app
npm install
npm run build
```

After the command runs successfully, the files will be available in `app/dist` folder which can be zipped and sent to RafterOne for deployment.

**IMPORTANT**

Before running the production `npm run build` command please make sure that the Analytics code is added in `src/main.ts`

```ts
app.use(
	VueGtag,
	{
		config: { id: 'G-DB0JMEGR0Q' },
	},
	router,
);
```

## Project Setup

The following commands needs to be run at `app` directory

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Useful Link

-   [GitHub Repo](https://github.com/BOLDSCIENCE/regeneron-ash-microsite-2023)
-   [Figma Designs](https://www.figma.com/file/SyopCp9r0RUzVFtn7LH31L/MA-Portal-Final-Designs-1.0?type=design&node-id=3011-239437&mode=design&t=qdDmMYT6pkol7yQY-0)
-   [CI/CD DevOps Pipeline](https://us-east-1.console.aws.amazon.com/codesuite/codepipeline/pipelines/ash-microsite-boldscience-dev/view?region=us-east-1)
-   [S3 Bucket hosting internal Site](https://s3.console.aws.amazon.com/s3/buckets/ash-microsite-boldscience-dev-app?region=us-east-1&tab=objects)
-   [CloudFront](https://us-east-1.console.aws.amazon.com/cloudfront/v4/home?region=us-east-1#/distributions/E1WM2MBMN4KMUD)
-   [Google Analytics: Account - Regeneron - ASH Microsite 2023](https://analytics.google.com/analytics/web/?authuser=4#/p417068151/reports/intelligenthome?params=_u..nav%3Dmaui%26_u.date00%3D20231207%26_u.date01%3D20231208&collectionId=business-objectives)

---

For more info or code walkthrough please contact sahil.david@boldsci.com

END OF DOCUMENT
