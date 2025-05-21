const fs = require("fs");
const { execSync } = require("child_process");

// Get duration and user count from process arguments
const duration = process.argv[2] || "1"; // Default 10s
const user = process.argv[3] || "1"; // Default 1 VU

console.log(`Running tests with duration=${duration}s and VUs=${user}`);

const files = fs.readdirSync("./src").filter(file => file.endsWith(".js"));

files.forEach(file => {
    const safeFile = `"./src/${file}"`; // Wrap filename in quotes
    console.log(`Running ${file}...`);
    execSync(`k6 run ${safeFile} --duration ${duration}s --vus ${user}`, { stdio: "inherit" });
});
