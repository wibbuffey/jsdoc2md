child = require("child_process");
path = require("path");

child.fork(path.resolve(__dirname, "script.js"), [], { execPath: "node" });
