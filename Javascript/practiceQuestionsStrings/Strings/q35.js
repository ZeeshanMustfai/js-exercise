// Question 35:-
// Write a JavaScript function to remove HTML/XML tags from a string.
// Test Data :
// console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'));
// "PHP Exercises"

function strip_html_tags(str){
    const regex = /<[^ >]*>/g;
    str = str.replace(regex, "" );
    return str;
}

console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'));