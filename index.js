module.exports = {
  extends: 'stylelint-config-standard',
  processors: [ 'stylelint-processor-html' ],
  rules: {
    'no-empty-source': null, // Allows for .vue files to omit <style> tags without errors
  },
};
