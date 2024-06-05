// Question 63:-
// Write a JavaScript function to find the length of the longest palindromic subsequence in a given string.
// Subsequences are sequences that can be created by deleting some or all of the elements from another sequence without changing their order.
// Test Data :
// ("aaaba") -> 4
// ("maadaem") -> 5
// ("zkkskk") -> 3
// ("ab") -> 1
// ("") -> ""

function findSubsequences(str) {
    const queue = [''];
    for (const char of str) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            queue.push(queue[i] + char);
        }
    }
    return queue;
}
  
function isPalindrome(str){
    str = str.split('');
    arr1 = str;
    arr2 = [...arr1];
    arr1 = arr1.reverse();
    arr1 = arr1.join('');
    arr2 = arr2.join('');
    if(arr1 == arr2){        
        return true;
    }
    else{
        return false;
    }
}

function longestPalindromeSubsequence(str){
    if(typeof str === 'string'){
        if(str.length === 0){
            return str;
        }
        else{
            arr = findSubsequences(str);
            size = 0;
            temp = 0;
            palStr = '';
            for(i=0;i<arr.length;i++){
                if(isPalindrome(arr[i])){
                    te = arr[i].split('');
                    size = te.length;
                    if(temp<=size){
                        temp = size;
                        palstr = arr[i];
                    }
                }
                size=0;
            }
            return temp;
        }
    }
    else{
        message = "It must be a string.";
        return message;
    }
}

console.log(longestPalindromeSubsequence('zxzccvcc'));
console.log(longestPalindromeSubsequence('maadaem'));
console.log(longestPalindromeSubsequence('zkksk'));
console.log(longestPalindromeSubsequence('ab'));
console.log(longestPalindromeSubsequence(''));
console.log(longestPalindromeSubsequence());