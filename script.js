const core = require("@actions/core");
const jsdoc2md = require("jsdoc-to-markdown");
const fs = require("fs");

try {
  const source = core.getInput("source");
  const output = core.getInput("output");
  const result = jsdoc2md.render({ files: source });

  core.setOutput("result", result);
  fs.writeFileSync(output, result);
} catch (error) {
  core.setFailed(error.message);
}
