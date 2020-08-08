/*
  封装判赢函数：

  1 声明函数（checkWin），指定参数（player），类型注解为：Player 枚举。
  2 指定返回值：现在函数中写死返回 true 或 false。
  3 在给单元格添加类名后（下棋后），调用函数 checkWin，拿到函数返回值。
  4 判断函数返回值是否为 true，如果是，说明当前玩家获胜了。
*/
var Player;
(function (Player) {
    Player["X"] = "x";
    Player["O"] = "o";
})(Player || (Player = {}));
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
    console.log('参数', player);
    return true;
}
