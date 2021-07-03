const { NODE_ENV, BABEL_ENV } = process.env

const cjs = BABEL_ENV === 'cjs' || NODE_ENV === 'test'

module.exports = {
  presets: [
    [
      '@babel/env',
      {
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
