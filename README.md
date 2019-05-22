# Pleroma
There is information on how to get started locally, how to managed dependencies, and how to config Netlify in the [documentation](https://github.com/roma-apps/pleroma-site/tree/master/wiki).

For a more comprehensive help regarding how to use Hugo, you can check out their extensive [documentation](https://gohugo.io/wiki/) or ask for help in their friendly [community](https://discourse.gohugo.io).

```
|--assets           // Files that will pass through the asset pipeline
|  |--css           // Sass files are compiled, minified and autoprefixed
|  |--img           // Image, favicon, iOS webclip, and OpenGraph icon files
|--content          // Pages and collections
|--layouts          // This is where all templates go
|  |--_default      // This is where base templates and blocks live
|  |--partials      // This is where includes live
|  |--shortcodes    // This is where shortcodes live
|  |--index.html    // The index page
|--static           // Files in here end up in the public folder
|  |--fonts           // Font files
```