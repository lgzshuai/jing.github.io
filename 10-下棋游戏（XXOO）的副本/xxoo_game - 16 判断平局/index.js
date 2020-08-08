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
// 记录已下棋的次数
var steps = 0;
// 给单元格绑定点击事件
cells.forEach(function (item) {
    var cell = item;
    cell.addEventListener('click', clickCell, { once: true });
});
// 单元格click 事件处理程序
function clickCell(event) {
    var target = event.target;
    target.classList.add(currentPlayer);
    steps++;
    // 调用判赢函数判断是否获胜
    var isWin = checkWin(currentPlayer);
    if (isWin) {
        console.log('当前玩家获胜了', currentPlayer);
        // 因为游戏已经结束，所以，此处直接 return
        // 来刻意阻止后续代码执行
        return;
    }
    // console.log('获胜之后')
    // 判断平局
    if (steps === 9) {
        // 因为游戏已经结束，所以，此处直接 return
        // 来刻意阻止后续代码执行
        return;
    }
    /*
      判断平局：
  
      1 创建变量（steps），默认值为 0。
      2 在玩家下棋后，让 steps 加 1。
      3 在判赢的代码后面，判断 steps 是否等于 9。
      4 如果等于 9 说明是平局，游戏结束，
        就直接 return，不再执行后续代码。
    */
    // 根据当前玩家，得到另外一个玩家
    currentPlayer = currentPlayer === Player.X ? Player.O : Player.X;
    // 处理下一步提示
    gameBord.classList.remove(Player.X, Player.O);
    gameBord.classList.add(currentPlayer);
}
// 封装判赢函数
function checkWin(player) {
    return winsArr.some(function (item) {
        // 获取到每种获胜情况对应的 3 个单元格元素
        var cellIndex1 = item[0];
        var cellIndex2 = item[1];
        var cellIndex3 = item[2];
        // 3 判断这 3 个单元格元素是否同时包含当前玩家的类名
        if (hasClass(cells[cellIndex1], player) &&
            hasClass(cells[cellIndex2], player) &&
            hasClass(cells[cellIndex3], player)) {
            return true;
        }
        return false;
    });
}
// 封装 hasClass 函数:判断 DOM 元素是否包含某个类名
function hasClass(el, name) {
    return el.classList.contains(name);
}
