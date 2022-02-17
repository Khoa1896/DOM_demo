//ID
var headingNode = document.getElementById('heading');
// console.log({
//     elment: headingNode
// })
// Class //
var heading1Nodes = document.getElementsByClassName('heading1');
// console.log(heading1Nodes);
// Tag name //
var heading2Nodes = document.getElementsByTagName('h1');
// console.log(heading2Nodes);
// CSS selector //
var heading3Nodes = document.querySelector('h1');
document.querySelectorAll('h1');
// console.log(heading3Nodes);
//HTML colection //
console.log(document.forms.form1);

var lisItenNodes = document.querySelectorAll('.box-1');
// console.log(lisItenNodes);

// Cong viec 1 : Sử dụng với boxNode
var boxNode = document.querySelector('.box-1');

// Công việc 2 : Sử dụng tới các li elêmnents của box-1
console.log(boxNode.querySelectorAll('li'));
//document.write
document.write('Hello');

//DOM attributes
var headingElement = document.querySelector('h3');
headingElement.title='Heading'; //Seter
headingElement.setAttribute('class','heading');
console.log(headingElement);
console.log(headingElement.getAttribute('class')); // getAtribute

// Text Node
console.log((headingElement.innerText));//
//headingElement.textContent='<i>new</i>i>'; (trong dấu ngoặc đơn: hiểu như 1 text)

console.log(headingElement.textContent);

//InerHTML
var boxElement = document.querySelector('.box');
boxElement.innerHTML= '<h1>Text 2</h1>';
console.log((boxElement.outerHTML));