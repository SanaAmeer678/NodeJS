console.log('Intro to NodeJS');

var url = require('url');
var fs = require('fs'); // fs stands for file server
var newDate = require('./modules/date');

console.log(newDate)
console.log(newDate.returnNewDate())
console.log(newDate.printMyName('name'))
// create, read, write, delete

let address = `http://aryzap.com:8080/cricket?event=wc2023&searchValue=pakistan`


let formattedUrl = url.format(address);

// console.log(formattedUrl)

let parseUrl = url.parse(address);

// console.log(parseUrl)
// console.log(parseUrl.host);
// console.log(parseUrl.pathname);
// console.log(parseUrl.port);
// console.log(parseUrl.search);
// console.log(parseUrl.query);

const qData = parseUrl.query;

// console.log(qData.event);
// console.log(qData.date);
// console.log(qData.searchValue);


// fs.open(
//   'document.txt',
//   'w',
//   (err, file) => {
//     if (err) throw err; 
//     console.log(err, file)
//   });

// fs.open(
//   'ab.txt',
//   'w',
//   (err, file) => {
//     if (err) throw err; 
//     console.log(err, file)
//   });

//   fs.open(
//     './files/ab.txt',
//     'w',
//     (err, file) => {
//       if (err) throw err; 
//       console.log(err, file)
//     });

// fs.unlink('./files/ab.txt', (err) => console.log(err));

// fs.unlink('ab.txt', (err) => console.log(err));

fs.writeFile('document.txt', 'My first nodejs class', (err) => console.log(err));

fs.appendFile('document.txt', ' Appending Data', (err) => console.log(err));

let content = '';
fs.readFile('document.txt', 'utf-8', (err, data) => {
  console.log(err, data);
})


