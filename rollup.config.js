const terser = require('@rollup/plugin-terser');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const { typesPlugin } = require('./scripts/generate-cts');

const plugins = [
  nodeResolve({ jsnext: true, skip: ['effector'], extensions: ['.js', '.mjs'] }),
  commonjs({ extensions: ['.js', '.mjs'] }),
  terser(),
  typesPlugin(),
];

const input = 'dist/index.cjs';

// eslint-disable-next-line import/no-anonymous-default-export, import/no-default-export
export default [
  {
    input: 'dist/index.js',
    external: ['effector'],
    plugins,
    output: {
      file: './dist/patronum.js',
      format: 'es',
      sourcemap: true,
      externalLiveBindings: false,
    },
  },
  {
    input,
    external: ['effector'],
    plugins,
    output: {
      file: './dist/patronum.cjs',
      format: 'cjs',
      freeze: false,
      exports: 'named',
      sourcemap: true,
      externalLiveBindings: false,
    },
  },
  {
    input,
    external: ['effector'],
    plugins,
    output: {
      name: 'patronum',
      file: './dist/patronum.umd.js',
      format: 'umd',
      exports: 'named',
      sourcemap: true,
      freeze: false,
      globals: {
        effector: 'effector',
      },
    },
  },
];
