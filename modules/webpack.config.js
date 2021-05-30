const path = require("path");

module.exports = {
    entry: "./main.js", // entry file
    // output file
    output: {
        path: path.resolve(__dirname, "dist"), // o/p in dist/build folder
        filename: "main.bundle.js", // o/p file_name
    },
    mode: "development", // development/production
};