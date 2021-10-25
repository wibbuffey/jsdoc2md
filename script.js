const core = require("@actions/core");
const jsdoc2md = require("jsdoc-to-markdown");

try {
  const source = core.getInput("source");

  core.setOutput("result", jsdoc2md.render({ files: source }));
} catch (error) {
  core.setFailed(error.message);
}
