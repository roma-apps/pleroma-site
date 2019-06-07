# Pleroma
[![Netlify Status](https://api.netlify.com/api/v1/badges/6af91924-c9d0-4fad-b7c9-136da4d8535f/deploy-status)](https://app.netlify.com/sites/pleroma/deploys)

For a more comprehensive help regarding how to use Hugo, you can check out their extensive [documentation](https://gohugo.io/wiki/) or ask for help in their friendly [community](https://discourse.gohugo.io).

```
|--assets           // Files that will pass through the asset pipeline
|  |--css           // Sass files are compiled, minified and autoprefixed
|  |--fonts         // Font files
|  |--img           // Image, favicon, iOS webclip, and OpenGraph icon files
|  |--js            // JS files
|--content          // Pages and collections
|--layouts          // This is where all templates go
|  |--_default      // This is where base templates and blocks live
|  |--partials      // This is where includes live
|  |--shortcodes    // This is where shortcodes live
|  |--index.html    // The index page
```

## Setup
There are several tools used to build the site. Here you'll find what these tools do and how you can use them.

### npm
[npm](https://docs.npmjs.com/getting-started/what-is-npm) is used to managed dependencies. To install npm on your OS, follow the [instructions on the npm website](https://www.npmjs.com/get-npm).

From the root directory of the repo, run the following command to install all the projects dependencies:
```sh
npm install
```

### Gulp
[Gulp](https://gulpjs.com/docs/en/getting-started/quick-start) v4 is used for various tasks. It compiles the critical Sass and outputs a minified HTML partial that is added to the `baseOf.html` template head for inlined critical CSS. It watches for changes in JavaScript and runs Webpacks. And lastly, it optimizes images.

Once npm is installed, install the Gulp CLI utility:
```sh
npm install --global gulp-cli
```

The various gulp tasks utilized can run individually by using the `gulp` command, followed by the task name. For example:
```sh
gulp critical
```

Running the `watch` task will watch all the specified files. When Gulp detects any changes on the code, it will rerun the associated task.
```sh
gulp watch
```
_**Note:** You want to keep this running while working locally._

There are certain Hugo related bugs that cause unwanted `<p>` tags to be rendered on build. This is an old known issue that the Hugo team is aware of and has tried to fix it on multiple occasions with no success.

In the meantime, I've made a Gulp task that will parse the rendered HTML in the `/public` directory and, using Regex, will remove these empty tags that may cause layout issues.
```sh
gulp fixHugo
```

### PostCSS
[PostCSS](https://github.com/postcss/postcss) handles part of the Sass to CSS compile. It adds vendor prefixes, converts modern CSS features into better-supported ones, and also minifies the CSS. It is essential to Hugo and Gulp.

Although there are a number of dependencies associated with PostCSS that are handled by `npm`, the core command line utility can be installed on your machine with this command:
```sh
npm install --global postcss-cli
```

### Hugo
Version `0.53` of [Hugo](https://gohugo.io/getting-started/installing/) is being used on the Netlify server. Although Hugo strives to maintain backward compatibility on all versions, it is recommended to consult the [Hugo news section](https://gohugo.io/news/) for any changes that might break the build before upgrading.

A package manager is recommended for installing Hugo.

[Brew](https://brew.sh/) on macOS or Linux:
```sh
brew install hugo
```

[Chocolatey](https://chocolatey.org/) on Windows:
```sh
choco install hugo
```

To build the `/public` directory with the rendered static files, run:
```sh
hugo
```

To run the local server with automatic refresh on changes to the code, run:
```sh
hugo serve
```
_**Note:** This is what you want to keep running while working locally._

### Getting Started
npm scripts handle all of the necessary commands for building the site on the server and also running stuff locally.

`npm start`
This will first run `gulp critical` and the concurrently run `hugo serve` and `gulp watch`. And saved changes will automatically reflect on the local server site.

`npm build`
This will build the production version of the site. It runs `gulp critical`, `hugo -e production` with the production flag, and `gulp fixHugo`.


`npm development`
If there is a new for a development branch and related subdomain for testing, this command can be used to render a development version. This command is similar to the `build` one, with the exception of the `e -development` flag passed in the `hugo` build command.