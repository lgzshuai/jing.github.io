// 玩家枚举
var Player;
(function (Player) {
    Player["X"] = "x";
    Player["O"] = "o";
})(Player || (Player = {}));
// 判赢数组
var winsArr = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6] // 斜
];
// 单元格列表
var cells = document.querySelectorAll('.cell');
// 游戏面板
var gameBord = document.querySelector('#bord');
// 当前玩家
var currentPlayer = Player.X;
// 给单元格绑定点击事件
cells.forEach(function (item) {
    var cell = item;
    cell.addEventListener('click', clickCell, { once: true });
});
// 单元格click 事件处理程序
function clickCell(event) {
    var target = event.target;
    target.classList.add(currentPlayer);
    // 调用判赢函数判断是否获胜
    var isWin = checkWin(currentPlayer);
    if (isWin) {
        console.log('当前玩家获胜了', currentPlayer);
    }
    // 根据当前玩家，得到另外一个玩家
    currentPlayer = currentPlayer === Player.X ? Player.O : Player.X;
    // 处理下一步提示
    gameBord.classList.remove(Player.X, Player.O);
    gameBord.classList.add(currentPlayer);
}
// 封装判赢函数
function checkWin(player) {
    /*
      实现判赢函数：
  
      1 使用 some 方法遍历数组，并使用 some 方法的返回值作为判赢函数的返回结果。
      2 在 some 方法的回调函数中，获取到每种获胜情况对应的 3 个单元格元素。
      3 判断这 3 个单元格元素是否同时包含当前玩家的类名。
      4 如果包含（玩家获胜），就在回调函数中返回 true 停止循环；
        否则，返回 false，继续下一次循环。
    */
    var isWin = winsArr.some(function (item) {
        // 获取到每种获胜情况对应的 3 个单元格元素
        // 2.1 先拿到每种获胜情况的三个索引
        var cellIndex1 = item[0];
        var cellIndex2 = item[1];
        var cellIndex3 = item[2];
        // 2.2 通过这三个索引从cells中获取到对应的单元格元素
        var cell1 = cells[cellIndex1];
        var cell2 = cells[cellIndex2];
        var cell3 = cells[cellIndex3];
        // console.log(cell1, cell2, cell3)
        // 3 判断这 3 个单元格元素是否同时包含当前玩家的类名
        // 重点：
        //  1 元素是否包含类名 classList.contains()
        //  2 同时包含（第一个包含 并且 第二个包含 并且 第三个也包含）
        //    逻辑运算符 && 逻辑与
        if (cell1.classList.contains(player) &&
            cell2.classList.contains(player) &&
            cell3.classList.contains(player)) {
            return true;
        }
        return false;
    });
    return isWin;
}
