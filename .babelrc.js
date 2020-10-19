const { NODE_ENV, BABEL_ENV } = process.env

const cjs = BABEL_ENV === 'cjs' || NODE_ENV === 'test'
const prod = NODE_ENV === 'production'

module.exports = {
  presets: [
    [
      '@babel/env',
      {
        loose: true,
        modules: false,
        forceAllTransforms: true,
      },
    ],
    '@babel/react',
  ],
  plugins: [
    cjs && '@babel/transform-modules-commonjs',
    '@babel/plugin-proposal-class-properties',
  ].filter(Boolean),
}
