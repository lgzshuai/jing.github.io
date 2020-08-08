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
      优化：
  
      1 去掉判赢函数的中间变量（isWin、cell1、cell2、cell3）。
      2 封装函数（hasClass）：判断 DOM 元素是否包含某个类名。
    */
    return winsArr.some(function (item) {
        // 获取到每种获胜情况对应的 3 个单元格元素
        // 2.1 先拿到每种获胜情况的三个索引
        var cellIndex1 = item[0];
        var cellIndex2 = item[1];
        var cellIndex3 = item[2];
        // 3 判断这 3 个单元格元素是否同时包含当前玩家的类名
        if (
        // cells[cellIndex1].classList.contains(player) &&
        // cells[cellIndex2].classList.contains(player) &&
        // cells[cellIndex3].classList.contains(player)
        hasClass(cells[cellIndex1], player) &&
            hasClass(cells[cellIndex2], player) &&
            hasClass(cells[cellIndex3], player)) {
            return true;
        }
        return false;
    });
    // return winsArr.some()
}
// 封装 hasClass 函数:判断 DOM 元素是否包含某个类名
function hasClass(el, name) {
    return el.classList.contains(name);
}
