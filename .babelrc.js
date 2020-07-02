const env = process.env.NODE_ENV;

const presets = [
    '@babel/preset-env',
    '@babel/preset-react'
];

const plugins = [
    [
        '@babel/plugin-transform-runtime', {
          'corejs': 3
        }
    ],
    '@babel/plugin-proposal-class-properties'
];

env === 'dev' && plugins.push('react-hot-loader/babel');

module.exports = {
    presets,
    plugins,
}