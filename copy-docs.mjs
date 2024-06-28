  import path from "path";
  import fs from "fs-extra";

  const __dirname = process.cwd(); 

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

 
    try {
      fs.accessSync(websitePublic, fs.constants.F_OK); 
    } catch (err) {
      console.log("err",err);
      if (err.code === 'ENOENT') {  
        fs.mkdirSync(websitePublic, { recursive: true });  
      } 
    }

  fs.emptyDirSync(websitePublic);
  fs.copySync(docusaurusBuild, websitePublic);
 
  console.log("Docs copied from Docusaurus to React js");