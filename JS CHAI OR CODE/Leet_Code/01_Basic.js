// Given an integer array nums and an integer k, return true if nums has a good subarray or false otherwise.

// A good subarray is a subarray where:

// its length is at least two, and
// the sum of the elements of the subarray is a multiple of k.
// Note that:

// A subarray is a contiguous part of the array.
// An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.
 

// Example 1:

// Input: nums = [23,2,4,6,7], k = 6
// Output: true
// Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.
// Example 2:

// Input: nums = [23,2,6,4,7], k = 6
// Output: true
// Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
// 42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.
// Example 3:

// Input: nums = [23,2,6,4,7], k = 13
// Output: false
 

var checkSubarraySum = function(nums, k) {
    if(nums.length==1)
        {
            return false;
        }
    let count;
    let sum=0
    for(let i = 0; i<nums.length ; i++)
    {   
        sum=0;
        count=1;
        for(let j = i; j<nums.length ; j++)
        {
            
            sum=sum+nums[j];
            if(count==1){
                count=count+1;
                continue;
            }
            
            console.log(sum);
            // console.log(count);
            if(sum%k==0 && sum>0){
                return true;
            }
        }
        
        
    }
    return false;
};
let arr = [23,2,4,6,7]
let re=checkSubarraySum(arr,6);
console.log(re);