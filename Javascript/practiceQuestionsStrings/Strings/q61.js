// Question 61:-
// Write a JavaScript function to find the length of the longest subsequence present between two sequences.
// It is important to understand that a subsequence is a sequence that appears in a similar relative order, but is not necessarily contiguous.
// Test Data :
// ("abcda", "abcdef") -> 4
// ("ABCD", "ACBAD") -> 3
// ("pqr", "pqr") -> 3
// ("pqr", "abc") -> 0

function longestSubSequence(str,str1) {
    temp = 0;
    count = 0;
    for(i=0;i<str.length;i++){
        for(j=temp;j<str1.length;j++){
            if(str[i] === str1[j]){
                temp = j;
                count = count+1;
                break;
            }
        }
    }
    return count;
}

console.log(longestSubSequence("123", "123"));
console.log(longestSubSequence("ABCD", "ACBAD"));
console.log(longestSubSequence("pqr", "pqr"));
console.log(longestSubSequence("pqr", "abc"));