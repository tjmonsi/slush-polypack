const gulp = require('gulp')
const options = require('gulp-options')
const webpack = require('webpack-stream')
const path = require('path')
const getDest = require('../utils/get-dest')
const getConfig = require('../utils/get-config')
const createServiceWorker = require('../utils/create-service-worker')

const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const Visualizer = require('webpack-visualizer-plugin')
const WorkboxBuildWebpackPlugin = require('workbox-webpack-plugin')
const ModernizrWebpackPlugin = require('modernizr-webpack-plugin')
const GenerateAssetPlugin = require('../utils/generate-asset-plugin')
const createHTMLOptions = require('../utils/create-html-options')
const createManifest = require('../utils/create-manifest')

gulp.task('run-webpack', (done) => {
  var env = 'dev'
  if (options.has('env')) {
    env = options.get('env') || 'dev'
  }
  if (options.has('prod')) {
    env = 'prod'
  }
  const { config } = getConfig(env)
  const dest = getDest(env)
  const watch = options.has('watch')

  const serviceWorker = env === 'prod'
    ? new GenerateAssetPlugin({
      filename: 'service-worker.js',
      fn: (compilation, cb) => {
        cb(null, createServiceWorker(env))
      }
    })
    : new GenerateAssetPlugin({
      filename: 'service-worker.js',
      fn: (compilation, cb) => {
        cb(null, createServiceWorker(env))
      }
    })

  const environment = env === 'prod' ? 'production' : 'development'

  const plugins = [
    new ModernizrWebpackPlugin({
      'feature-detects': [
        'indexeddb'
      ],
      htmlWebpackPlugin: true,
      minify: env === 'prod'
    }),
    new Visualizer({
      filename: './_statistic.html'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: '_bundle-sizes.html',
      // Module sizes to show in report by default.
      // Should be one of `stat`, `parsed` or `gzip`.
      // See "Definitions" section for more information.
      defaultSizes: 'gzip',
      // Automatically open report in default browser
      openAnalyzer: false,
      generateStatsFile: true,
      // Name of Webpack Stats JSON file that will be generated if `generateStatsFile` is `true`.
      // Relative to bundles output directory.
      statsFilename: '_statistic.json'
    }),
    serviceWorker,
    new HTMLWebpackPlugin(createHTMLOptions(env)),
    new webpack.optimize.CommonsChunkPlugin({
      children: true
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'bower_components/webcomponentsjs/*.js'),
        to: 'bower_components/webcomponentsjs/[name].[ext]'
      },
      {
        from: path.resolve(__dirname, 'bower_components/webcomponentsjs/*.map'),
        to: 'bower_components/webcomponentsjs/[name].[ext]'
      },
      {
        from: path.resolve(__dirname, 'bower_components/web-component-tester/*.js'),
        to: 'bower_components/web-component-tester/[name].[ext]'
      },
      {
        from: path.resolve(__dirname, 'src/images'),
        to: 'images'
      },
      {
        from: path.resolve(__dirname, 'src/service-worker'),
        to: 'service-worker-src'
      },
      {
        from: path.resolve(__dirname, 'core/service-worker'),
        to: 'service-worker-core'
      },
      {
        from: path.resolve(__dirname, `node_modules/workbox-routing/build/importScripts/workbox-routing.${env === 'prod' ? env : 'dev'}.*.js`),
        to: 'workbox-routing.js'
      },
      {
        from: path.resolve(__dirname, `src/config/${env}.json`),
        to: '../../src/.temp/temp.json'
      }
    ]),
    new GenerateAssetPlugin({
      filename: 'manifest.json',
      fn: (compilation, cb) => {
        cb(null, createManifest(env))
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(environment)
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
      module: true,
      columns: true,
      // noSources: true,
      linToLine: true
    })
  ]

  if (env === 'prod') {
    const prod = [
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true
        },
        comments: false,
        sourceMap: true
      }),

      new WorkboxBuildWebpackPlugin({
        cacheId: config.app.shortTitle,
        swDest: `${dest}/sw.js`,
        globPatterns: ['**/*.{js,css,html}', 'images/**.{png,jpg,ico,gif}', 'images/**/*.{png,jpg,ico,gif}', '**/*.json'].concat(config.serviceWorker.globPatterns),
        globDirectory: dest,
        navigateFallback: '/index.html',
        navigateFallbackWhitelist: [
          [/^(?!(\/__)|(\/service-worker\.js)|(\/sw\.js)|(\/routing-sw\.js)|(\/_bundle-sizes\.html)|(\/_statistic\.html)|(\/_statistic\.json))/]
        ].concat(config.serviceWorker.navigateFallbackWhitelist),
        globIgnores: [
          '404.html',
          'service-worker.js',
          'sw.js',
          'service-worker-core/routing.js',
          'service-worker-src/routing.js',
          'workbox-sw.prod.v2.0.0.js',
          'workbox-sw.prod.v2.0.0.js.map',
          'workbox-routing.js'
        ].concat(config.serviceWorker.globIgnores),
        skipWaiting: true,
        handleFetch: env === 'prod',
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/maps.googleapis.com\/.*/,
            handler: 'networkFirst'
          },
          {
            urlPattern: /^https:\/\/fonts.googleapis.com\/.*/,
            handler: 'cacheFirst'
          },
          {
            urlPattern: /^https:\/\/fonts.gstatic.com\/.*/,
            handler: 'cacheFirst'
          },
          {
            urlPattern: /^https:\/\/cdn.ravenjs.com\/.*/,
            handler: 'cacheFirst'
          },
          {
            urlPattern: /^https:\/\/www.gstatic.com\/firebasejs\/.*/,
            handler: 'cacheFirst'
          },
          {
            urlPattern: /^https:\/\/www.google-analytics.com\/analytics.js/,
            handler: 'networkFirst'
          },
          {
            urlPattern: /^https:\/\/polyfill.io\/.*/,
            handler: 'networkFirst'
          }
        ].concat(config.serviceWorker.runtimeCaching)
      })
    ]

    for (var i in prod) {
      plugins.push(prod[i])
    }
  }

  return gulp.src('./core/shell/index.js')
    .pipe(webpack({
      watch,
      output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, dest)
      },
      resolve: {
        modules: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'bower_components')
        ]
      },
      plugins,
      module: {
        rules: [
          {
            // If you see a file that ends in .html, send it to these loaders.
            test: /\.html$/,
            // This is an example of chained loaders in Webpack.
            // Chained loaders run last to first. So it will run
            // polymer-webpack-loader, and hand the output to
            // babel-loader. This let's us transpile JS in our `<script>` elements.
            use: [
              {
                loader: 'babel-loader'
              },
              {
                loader: 'polymer-webpack-loader',
                options: {
                  processStyleLinks: true
                }
              }
            ]
          },
          {
            // If you see a file that ends in .js, just send it to the babel-loader.
            test: /\.js$/,
            use: 'babel-loader'
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  useRelativePath: true,
                  name: '[name].[ext]'
                }
              },
              {
                loader: 'image-webpack-loader'
              }
            ]
          },
          {
            test: /\.scss$/,
            use: [
              {
                loader: 'css-loader'
              },
              {
                loader: 'sass-loader'
              }
            ]
          },
          {
            test: /\.css$/,
            use: [
              {
                loader: 'css-loader'
              }
            ]
          }
        ]
      }
    }))
    .pipe(gulp.dest(dest))
})
