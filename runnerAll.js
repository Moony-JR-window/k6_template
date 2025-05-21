const fs = require("fs");
const { execSync } = require("child_process");

function Runner() {
    const files = fs.readdirSync("./").filter(file => file.endsWith(".js") && file !== "runnerAll.js" && file !== "build.js" );

    files.forEach(file => {
        console.log(`Running ${file}...`);
        execSync(`k6 run "${file}"`, { stdio: "inherit" }); // Wrap file name in quotes
    });
}

Runner();
