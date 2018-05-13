const path =require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('css/[name]-css.css');

const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports={
    entry:'./src/js/index.js',//入口JS
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'./dist'),
        publicPath: '/'
    },

    devServer:{
        contentBase: path.join(__dirname, "src"),
        compress: true,

    },

    module:{
        rules:[
            {
                test:/\.css$/,
                use: extractCSS.extract({                     
                      use: "css-loader",
                      fallback: "style-loader"
                })

            },
          
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        cacheDirectory:true//缓存
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
        {          
            template: './src/index.html',// 模板文件          
            filename: 'index.html'
        },
        new CopyWebpackPlugin([
            {from:'./src/img',to:'./img'}
        ]),
        ),
        extractCSS,
        new CleanWebpackPlugin(['dist','build'],{
            verbose:false
        })
    ]

}