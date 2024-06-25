  import path from "path";
  import fs from "fs-extra";

  const __dirname = process.cwd(); // Get current working directory

  const docusaurusBuild = path.join(
    __dirname,
    "apps",
    "docs",
    "build"
  );

  const websitePublic = path.join(
    __dirname,
    "apps",
    "website",
    "public",
    "docs"
  );


  // Check if the docs folder exists, and create it if not
    try {
      fs.accessSync(websitePublic, fs.constants.F_OK); // Check if the folder exists
    } catch (err) {
      console.log("err",err);
      if (err.code === 'ENOENT') { // If the folder doesn't exist
        fs.mkdirSync(websitePublic, { recursive: true }); // Create the folder structure recursively
      } 
    }

  fs.emptyDirSync(websitePublic);
  fs.copySync(docusaurusBuild, websitePublic);
 
  console.log("Docs copied from Docusaurus to React js");