// Question 55:-
// Write a JavaScript function to check whether a string is a Pangram or not.
// A pangram or holoalphabetic sentence is a sentence using every letter of a given alphabet at least once. Pangrams have been used to display typefaces, test equipment, and develop skills in handwriting, calligraphy, and keyboarding
// Test Data :
// ("The quick brown fox jumps over the lazy dog") -> true
// ("Waltz, bad nymph, for quick jigs vex.") -> true
// ("The five boxing wizards jump quickly.") -> true
// ("The boxing wizards jump quickly.") -> false
// (12356) -> "It must be a string."

function isPangram(str) {
    if(typeof str === 'string'){
        if(str.length === 0){
            message = "The string is empty.";
            return message;
        }
        else{
            pangramSet = new Set();
            str = str.toLowerCase();
            str = str.split('');
            for(i=0;i<str.length;i++){
                if(str[i].charCodeAt()>=97 && str[i].charCodeAt()<=122){
                    pangramSet.add(str[i]);
                }
            }
            if(pangramSet.size === 26){
                return true;
            }
            else{
                return false;
            }
        }
    }
    else{
        message = "It must be a string.";
        return message;
    }
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(isPangram("Waltz, bad nymph, for quick jigs vex."));
console.log(isPangram("The five boxing wizards jump quickly."));
console.log(isPangram("The boxing wizards jump quickly."));
console.log(isPangram(""))
console.log(isPangram(123456));