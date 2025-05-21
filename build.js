const esbuild = require("esbuild");
const fs = require("fs");

const entryFiles = fs.readdirSync("./library")
    .filter(file => file.endsWith(".js"))
    .map(file => `./library/${file}`);

console.log("Building:", entryFiles);

esbuild.build({
  entryPoints: entryFiles,
  bundle: true,
  minify: false,
  sourcemap: true,
  outdir: "build",
  format: "esm",
  platform: "node", // 👈 This tells esbuild to keep Node.js modules as-is
})
.then(() => console.log("Build successful! 🚀"))
.catch(() => process.exit(1));
