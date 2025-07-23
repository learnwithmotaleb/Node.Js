const fs = require('fs');
//console.log(fs);

// fs.writeFile('Lesson2/demo1.txt', 'Hello File System demo 1', function (err) {
//      if (err) {
//           console.log("Error writing to file: ", err);

//      } else {
//           console.log("File Written Successfully");
//      }
// })

// fs.appendFile('Lesson2/demo1.txt', 'Amr Sonar Bangla Ami Tomay vlobasi, Chrodin tomar Akash tomar Batash', (err) =>{
//      if (err) {
//           console.log("Error writing to file: ", err);

//      } else {
//           console.log("File Written Successfully");
//      }
// })

// fs.readFile('Lesson2/demo1.txt', 'utf-8', (err, data) =>{
//      if (err) {
//           console.log("Error writing to file: ", err);

//      } else {
//           console.log(data);
//      }
// })

// fs.rename('Lesson2/demo1.txt', 'Lesson2/sonia.txt', (err) =>{
//      if (err) {
//           console.log("Error writing to file: ", err);

//      } else {
//           console.log("Successfully renamed the file");
//      }
// })

// fs.unlink('Lesson2/sonia.txt', (err) =>{
//      if (err) {
//           console.log("Error writing to file: ", err);

//      } else {
//           console.log("Successfully delete the file");
//      }
// })

fs.exists('Lesson2/demo1.txt', function (reslut) {
     if (reslut) {
          console.log("Found File");

     } else {
          console.log("Not fonud file");
     }
})