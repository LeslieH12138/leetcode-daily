// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
//
//
//
// 示例 1：
//
// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].


/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((p,q) => p[0] - q[0]);
    const ans = [];

    for (const p of intervals) {
        const m = ans.length
        if (m && p[0] <= ans[m-1][1]) {
            ans[m-1][1] = Math.max(ans[m-1][1], p[1])
        } else {
            ans.push(p);
        }
    }
    return ans;
};