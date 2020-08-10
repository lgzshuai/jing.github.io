/*
  获取元素 ， 操作元素
*/
var cells = document.querySelectorAll('.cell');
var currentPlayer = 'x';
var gameBord = document.querySelector('#bord');
cells.forEach(function (item) {
    var cell = item;
    // console.log(item)
    cell.addEventListener('click', clickCell, { once: true });
});
// 棋盘中单元格的click事件处理程序
function clickCell(event) {
    console.log('click', event.target);
    var target = event.target;
    target.classList.add(currentPlayer);
    // 判断取反‘x' 与 ’o‘
    currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
    // 处理下一步提示
    gameBord.classList.remove('x', 'o');
    gameBord.classList.add(currentPlayer);
}
