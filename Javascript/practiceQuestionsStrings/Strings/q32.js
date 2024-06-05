// Question 32:-
// Write a JavaScript function to remove non-printable ASCII characters.
// Test Data :
// console.log(remove_non_ascii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));
// "PHP-MySQL"

function remove_non_ascii(str) {
    const regex = /[^\x20-\x7E]/g;
    return str.replace(regex, '');
}

console.log(remove_non_ascii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));