//  Question 28:-
// Write a JavaScript function to find the longest common starting substring in a set of strings.
// Sample array : console.log(longest_common_starting_substring(['go', 'google']));
// Expected result : "go"

function longest_common_starting_substring(arr){
    let check= 0;
    temp=0;
    for(i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[j].includes(arr[i]) ) {
                    check= arr[i].length;
                    if(temp<=check){
                        temp=check;
                        substring=arr[i];
                    }
            }
        }
    }
    return substring;
}

console.log(longest_common_starting_substring(['g','go','goo', 'google']));