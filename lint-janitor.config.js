const generated = ['node_modules/**'];
const partialGenerated = ['cspell.json'];

const markdownFiles = ['*.md', 'courses/**/*.md'];
const jsonFiles = ['*.json'];
const prettyFiles = [].concat(markdownFiles).concat(jsonFiles);
const spellingFiles = [].concat(markdownFiles).concat(jsonFiles);

const markdownFilesExclude = generated;
const jsonFilesExclude = generated;
const prettyFilesExclude = generated.concat(partialGenerated);
const spellingFilesExclude = generated.concat(partialGenerated);

module.exports = {
  markdownFiles,
  markdownFilesExclude,
  jsonFiles,
  jsonFilesExclude,
  prettyFiles,
  prettyFilesExclude,
  spellingFiles,
  spellingFilesExclude
};
