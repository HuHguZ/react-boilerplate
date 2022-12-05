const cssnano = require('cssnano');
const plugins = { };

if (process.env.NODE_ENV === 'production') {
    plugins.cssnano = cssnano({
        preset: 'default',
    });
}

module.exports = {
    plugins,
};
