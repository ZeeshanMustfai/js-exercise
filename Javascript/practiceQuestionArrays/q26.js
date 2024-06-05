// Question 26:-
// Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.
// Input: numbers= [10,20,10,40,50,60,70], target=50
// Output: 2, 3

function pairOfElements(arr,target) {
    for(i=0;i<arr.length;i++){
        for(j=i;j<arr.length;j++){
            sum=arr[i]+arr[j];
            if(sum == target){
                arr1= [i,j];
                return arr1.toString();
            }
        }
    }
}

console.log("Output = ",pairOfElements([10,20,30,40,50,60,70],130));