   const fs = require("fs");
   const { execSync } = require("child_process");

   // Get duration and user count from process arguments
   const duration = process.argv[3] || "1s";
   const user = process.argv[2] || "1";
    const resReport = process.argv[4] || "TC01";

   console.log(`Running tests with duration=${duration}s and VUs=${user}`);

   const files = fs.readdirSync("./src/").filter(file => file.endsWith(".js"));

   files.forEach(file => {
       const safeFile = `"./src/${file}"`;

       console.log(`Running ${file}...`);

       try {
           execSync(`cross-env K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=./restReport/html-report${resReport}.html k6 run --vus ${user} --duration ${duration} ${safeFile}`, { stdio: "inherit" });
       } catch (error) {
           console.error(`Error running ${file}:`, error.message);
       }
   });
