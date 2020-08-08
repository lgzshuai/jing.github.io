/*
  切换玩家：

  处理下一步提示：移除游戏面板中的 x 和 o 类名，添加下一个玩家对应的类名。
*/
var cells = document.querySelectorAll('.cell');
var gameBord = document.querySelector('#bord');
var currentPlayer = 'x';
// console.log(gameBord)
cells.forEach(function (item) {
    var cell = item;
    cell.addEventListener('click', clickCell, { once: true });
});
// 棋盘中单元格的click事件处理程序
function clickCell(event) {
    var target = event.target;
    target.classList.add(currentPlayer);
    // 根据当前玩家，得到另外一个玩家
    currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
    // 处理下一步提示
    gameBord.classList.remove('x', 'o');
    gameBord.classList.add(currentPlayer);
}
