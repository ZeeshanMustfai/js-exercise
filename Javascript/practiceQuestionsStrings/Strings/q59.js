// Question 59:-
// Write a JavaScript program to find the most frequent word in a given string.
// Test Data :
// ("The quick brown fox jumps over the lazy dog") -> "The"
// ("Python is a high-level, general-purpose programming language.") -> "Python"
// (" It was the same man, she was sure of it. It's always the same, Chauncey.") -> "was"
// (12321) -> "It must be a string."

function mostFrequentWord(str) {
    if(typeof str === 'string'){
        str = str.split(' ');
        temp = 0;
        frequent = 0;
        mfw = 0;
        for(i = 0; i<str.length; i++){
            for(j = i; j<str.length; j++){
                if(str[i]== str[j]){
                    temp = temp + 1;
                }
            }
            if(temp > frequent){
                frequent = temp;
                mfw = str[i];
            }
            temp = 0;
        }
        return mfw;
    }
    else{
        message = "It must be a string.";
        return message;
    }
}

console.log(mostFrequentWord("The quick brown fox jumps over the lazy dog"));
console.log(mostFrequentWord("Python is a high-level, general-purpose programming language."));
console.log(mostFrequentWord(" It was the same man, she was sure of it. It's always the same, Chauncey."));
console.log(mostFrequentWord(" cat cat cat dog dog dog"));

console.log(mostFrequentWord(12321));