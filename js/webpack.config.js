const path = require ('path');

module.exports = {
    entry: './web2-frontend-jianmingsu/js/script.js' ,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script.js',
    },
    mode: 'production'
};