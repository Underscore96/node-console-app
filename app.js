const fs = require('fs');

const inputUrl = process.argv[2];
const outputUrl = process.argv[3];

let data = readFile("./input/students.csv")



if (data){
    const result = transFormData(data)
    writeData(outputUrl, result);

}


function readFile(url){
    try {
       const data = fs.readFileSync(url, "utf8");
       return data;
        } catch (err) {
          console.error(err);
          return null;
        }
    

}



function writeData(url, data){
    
    try {
        fs.writeFileSync(url, data);
      } catch (err) {
        console.error(err);
      }
    

}




function transFormData(data){
   const rows = data.split(/\r?\n/);

   return JSON.stringify(rows);

}
