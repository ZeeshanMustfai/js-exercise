// Question 31:-
// Write a JavaScript function to escape special characters (&, <, >, ', ") for use in HTML.
// Test Data :
// console.log(escape_html('PHP & MySQL'));
// "PHP &amp; MySQL"
// console.log(escape_html('3 > 2'));
// "3 &gt; 2"

function escape_html(str){
    const encodedStr = str.replace(/[\u00A0-\u9999<>\&]/g, i => '&#'+i.charCodeAt(0)+';');
    return encodedStr;
}

console.log(escape_html('PHP & MySQL'));
console.log(escape_html('3 > 2'));