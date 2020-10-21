module.exports = (api) => {
  api.cache.never();
 return {
   sourceMaps: true,
    presets: [[require.resolve('@babel/preset-env'),   {
      "targets": {
        "node": '6.10',
        "esmodules": false
      }
    }]]
  };
};
