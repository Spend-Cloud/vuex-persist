export default {
  esm: {
    output: 'dist/esm/index.js',
    format: 'esm',
    target: 'es2015',
    genDts: true,
  },
  cjs: {
    output: 'dist/cjs/index.js',
    format: 'cjs',
    target: 'es2015',
  },
}
