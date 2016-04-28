module.exports = {
  onwarn: function(str) {
    if (!/^Treating/.test(str)) {
      console.error(str);
    }
  },
  plugins: [
    require('rollup-plugin-babel')({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
      presets: ['es-uxtemple']
    })
  ]
}
