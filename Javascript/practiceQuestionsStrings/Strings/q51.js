// Question 51:-
// Write a JavaScript function to implement the Boyer-Moore String Search Algorithm.
// From Wikipedia,
// In computer science, the Boyer-Moore string-search algorithm is an efficient string-searching algorithm that is the standard benchmark for practical string-search literature. It was developed by Robert S. Boyer and J Strother Moore in 1977. The original paper contained static tables for computing the pattern shifts without an explanation of how to produce them. The algorithm for producing the tables was published in a follow-on paper; this paper contained errors which were later corrected by Wojciech Rytter in 1980. The algorithm preprocesses the string being searched for (the pattern), but not the string being searched in (the text). It is thus well-suited for applications in which the pattern is much shorter than the text or where it persists across multiple searches. The Boyer-Moore algorithm uses information gathered during the preprocess step to skip sections of the text, resulting in a lower constant factor than many other string search algorithms. In general, the algorithm runs faster as the pattern length increases. The key features of the algorithm are to match on the tail of the pattern rather than the head, and to skip along the text in jumps of multiple characters rather than searching every single character in the text.
// The Boyer-Moore string search algorithm allows linear time in search by skipping indices when searching inside a string for a pattern.
// Test Data :
// ('THIS  IS A TEST TEXT', 'TEST') -> 10
// ('THIS IS A TEST TEXT', 'TEST') -> 14

function boyerMoore(str,str1) {
    if(typeof str === 'string' && typeof str1 === 'string'){
        size = str1.length-1;
        let start,end,temp = 0;
        for(i=0;i<str.length;i++){
            if(str[i] === str1[0]){
                temp = 0;
                if(str[i+size] === str1[size]){
                    for(j=0;j<=size;j++){
                        if(str[i+j] != str1[j]){
                            temp = -99;
                        }
                    }
                    if(temp != -99){
                        start = i;
                        end = i+size;
                    }
                }
            }
        }
        return arr = [start,end];
    }
    else{
        message = 'This is not a string.'
        return message;
    }
}

console.log(boyerMoore('THIS IS A TEST TEXT', 'TEST'));
console.log(boyerMoore('THIS IS A TEST TEXT', 'TEXT'));