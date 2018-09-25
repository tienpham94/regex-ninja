'use strict';

var str = `<b>Bold</b><i>italics</i>`;
var regex = /<(\w+)>(.*)<\/\1>/g;

console.log(str.replace(regex, '$2\n')) || displayInPreview(str.replace(regex, '$2\n'));

/**
 * @param  String str
 * @param  RegExp regex
 * @param  HTMLElement target
 */
const output = (str, regex, target) => {
  target.innerHTML =
    str.replace(regex, str =>
      `<span>${str}</span>`
    );
}
output(str, regex, document.querySelector('pre'));



// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}