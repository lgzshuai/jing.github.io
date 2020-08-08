/*
  单元格点击：

  1 获取到所有的单元格列表。
  2 遍历单元格列表，给每一个单元格添加点击事件。
  3 给当前被点击的单元格添加类名 x。
*/
let cells = document.querySelectorAll('.cell')
// console.log(cells)
cells.forEach(function (item) {
  let cell = item as HTMLDivElement
  // console.log(item)
  cell.addEventListener('click', clickCell, { once: true })
})

// 棋盘中单元格的click事件处理程序
function clickCell(event: MouseEvent) {
  console.log('click', event.target)
  let target = event.target as HTMLDivElement
  target.classList.add('x')
}