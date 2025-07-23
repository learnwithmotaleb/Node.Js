const path = require('path');

const filePath = '/home/user/Lesson3/demo1.txt';

console.log('📌 join:', path.join('home', 'user', 'demo.txt'));
console.log('📌 resolve:', path.resolve('Lesson2', 'demo1.txt'));
console.log('📌 basename:', path.basename(filePath));         // demo1.txt
console.log('📌 dirname:', path.dirname(filePath));           // /home/user/Lesson2
console.log('📌 extname:', path.extname(filePath));           // .txt
console.log('📌 parse:', path.parse(filePath));

console.log(__dirname);
console.log(__filename);
