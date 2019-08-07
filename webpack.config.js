const Path =require('path');
module.exports = {
    mode: 'development',
    entry: './src/js/app.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.min.js'
    },
    resolve: {
      alias: {
        "TweenLite": Path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
        "TweenMax": Path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
        "TimelineLite": Path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
        "TimelineMax": Path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
        "ScrollMagic": Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
        "animation.gsap": Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
        "debug.addIndicators": Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
    }
  },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.ttf$/,
                use: [
                  'url-loader'
                ]
              },
            {
                test: /\.(svg|gif|png|eot|woff|ttf)$/,
                use: [
                  'url-loader'
                ]
              },
       ]
    }
    
 
     
    
  }

  