const path = require("path");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const whitelister = require("purgecss-whitelister");
const glob = require("glob-all");

config = {
    protocol: "http",
    host: "localhost",
    port: 8080,
    // watchDir: "templates",
    // Whitelist selectors to stop purgecss from removing them from your CSS
    // You can pass in whole stylesheets to whitelist everything from thirdparty libs
    // Accepts string paths, array of strings, globby strings, or array of globby strings:
    // ['./node_modules/lib1/*.css', './node_modules/lib2/*.scss']
    purgecssWhitelist: [],
    // Whitelist based on a regular expression.
    // Ex: [/red$/] (selectors ending in 'red' will remain)
    // https://www.purgecss.com/whitelisting
    purgecssWhitelistPatterns: [
    ],
};

class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-z0-9-:\/]+/g) || [];
    }
}

module.exports = {
    pages: {
      index: {
        // entry for the page
        entry: 'src/main.js',
        // the source template
        template: 'public/index.html',
        // output as dist/index.html
        filename: 'index.html',
        // when using title option,
        // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'Jacob Paul Carpenter',
      },
    },
    configureWebpack: {
        plugins: [
            new PurgecssPlugin({
                paths: glob.sync([
                    path.join(__dirname, "./public/*.html"),
                    path.join(__dirname, "./src/**/*.vue"),
                    path.join(__dirname, "./src/**/*.js"),
                ]),
                whitelist: whitelister(config.purgecssWhitelist),
                whitelistPatterns: config.purgecssWhitelistPatterns,
                extractors: [
                {
                    extractor: TailwindExtractor,
                    // Specify the file extensions to include when scanning for class names.
                    extensions: ["html", "js", "twig", "vue"],
                },
                ],
            }),
        ],
    },
  
    publicPath: "/",
    outputDir: "dist",
    assetsDir: "",
    runtimeCompiler: true,
    productionSourceMap: true,
    parallel: true,
    css: {
      extract: true,
    }
  }
  