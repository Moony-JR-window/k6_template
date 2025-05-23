   const fs = require("fs");
   const { execSync } = require("child_process");

   // Get duration and user count from process arguments
   const duration = process.argv[3] ;
   const user = process.argv[2] || "1";
   const resReport = process.argv[4] || "TC01";

   console.log(`Running tests with duration=${duration}s and VUs=${user}`);

//    const files = fs.readdirSync("./src/").filter(file => file.endsWith(".js")); // Running all file 
    const files = ["WingPos.js"];  // Running Single File 

   const reportDir = "./ReportHTML";
   if (!fs.existsSync(reportDir)) {
     fs.mkdirSync(reportDir, { recursive: true }); //  Create folder if missing
   }
   
   files.forEach(file => {
       const safeFile = `"./src/${file}"`;

       console.log(`Running ${file}...`);

       try {
        //Create HTML report + runing all script 
        if(!duration){
           return execSync(`cross-env k6 run --iterations ${user} ${safeFile} `, { stdio: "inherit" });
        }
          return execSync(`cross-env K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=${reportDir}/html-report-${resReport}.html k6 run --vus ${user} --duration ${duration} ${safeFile}`, { stdio: "inherit" });
       } catch (error) {
           console.error(`Error running ${file}:`, error.message);
       }
   });

   