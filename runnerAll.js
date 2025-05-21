// const fs = require("fs");
// const { execSync } = require("child_process");

// function Runner(duration,user) {
//     const files = fs.readdirSync("./src/").filter(file => file.endsWith(".js"));

//     files.forEach(file => {
//         console.log(`Running ${file}...`);
//         // execSync(`k6 run ./src/"${file} --duration ${duration}s --VUs ${user} "`, { stdio: "inherit" }); // Wrap file name in quotes
//         execSync(`k6 run ./src/${file} --duration ${duration}s --vus ${user}`, { stdio: "inherit" });
//     });
// }

// Runner(10,1);

const fs = require("fs");
const { execSync } = require("child_process");

// Get duration and user count from process arguments
const duration = process.argv[2] || "1"; // Default to 10s if not provided
const user = process.argv[3] || "1"; // Default to 1 VU if not provided

console.log(`Running tests with duration=${duration}s and VUs=${user}`);

const files = fs.readdirSync("./src").filter(file => file.endsWith(".js"));

files.forEach(file => {
    console.log(`Running ${file}...`);
    execSync(`k6 run ./src/${file} --duration ${duration}s --vus ${user}`, { stdio: "inherit" });
});
