// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]


const DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // 右下左上

var spiralOrder = function(matrix) {
    let m = matrix.length, n = matrix[0].length;
    const size = m * n;
    const ans = [];
    let i = 0, j = -1; // 从 (0, -1) 开始
    for (let di = 0; ans.length < size; di = (di + 1) % 4) {
        for (let k = 0; k < n; k++) { // 走 n 步（注意 n 会减少）
            i += DIRS[di][0];
            j += DIRS[di][1]; // 先走一步
            ans.push(matrix[i][j]); // 再加入答案
        }
        [n, m] = [m - 1, n]; // 减少后面的循环次数
    }
    return ans;
};