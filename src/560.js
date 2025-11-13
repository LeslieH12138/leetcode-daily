/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const map = {0:1};
    let pre = 0;
    let ans = 0;

    for (let i = 0; i < nums.length; i++) {
        pre += nums[i];

        if (map[pre - k]) {
            ans += map[pre - k];
        }

        if (map[pre]) {
            map[pre] += 1;
        } else {
            map[pre] = 1;
        }
    }
    return ans;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum === k) {
                ans += 1;
            }
        }
    }
    return ans;
};