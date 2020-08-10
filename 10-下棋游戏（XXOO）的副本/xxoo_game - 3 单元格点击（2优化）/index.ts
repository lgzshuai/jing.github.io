/*
  获取元素 ， 操作元素  
*/
let cells = document.querySelectorAll('.cell')
let currentPlayer = 'x'
let gameBord = document.querySelector('#bord')

cells.forEach(function (item) {
  let cell = item as HTMLDivElement
  // console.log(item)
  cell.addEventListener('click', clickCell, { once: true })
})

// 棋盘中单元格的click事件处理程序
function clickCell(event: MouseEvent) {
  console.log('click', event.target)
  let target = event.target as HTMLDivElement

  target.classList.add(currentPlayer)

// 判断取反‘x' 与 ’o‘
  currentPlayer = currentPlayer === 'x' ? 'o' : 'x'
// 处理下一步提示
  gameBord.classList.remove('x', 'o')
  gameBord.classList.add(currentPlayer)

}