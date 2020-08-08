/*
  切换玩家：

  1 创建一个存储当前玩家的变量（currentPlayer），默认值为：x。
  2 将添加给单元格时 写死的类名 x ，替换为变量（currentPlayer）的值。
  3 切换到另一个玩家：在添加类名（下棋完成一步）后，根据当前玩家，得到另外一个玩家。
*/
var cells = document.querySelectorAll('.cell');
var currentPlayer = 'x';
cells.forEach(function (item) {
    var cell = item;
    cell.addEventListener('click', clickCell, { once: true });
});
// 棋盘中单元格的click事件处理程序
function clickCell(event) {
    var target = event.target;
    target.classList.add(currentPlayer);
    // 关键点：
    // 根据当前玩家，得到另外一个玩家
    currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
}
