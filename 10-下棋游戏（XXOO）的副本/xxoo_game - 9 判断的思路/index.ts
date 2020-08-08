/*
  判赢的思路：
*/
enum Player {
  X = 'x',
  O = 'o'
}

// 单元格列表
let cells = document.querySelectorAll('.cell')
console.log(cells)
// 游戏面板
let gameBord = document.querySelector('#bord')

// 当前玩家
// let currentPlayer: Player = Player.X
let currentPlayer = Player.X

// 给单元格绑定点击事件
cells.forEach(function (item) {
  let cell = item as HTMLDivElement
  cell.addEventListener('click', clickCell, { once: true })
})

// 单元格click 事件处理程序
function clickCell(event: MouseEvent) {
  let target = event.target as HTMLDivElement
  target.classList.add(currentPlayer)

  // 根据当前玩家，得到另外一个玩家
  currentPlayer = currentPlayer === Player.X ? Player.O : Player.X

  // 处理下一步提示
  gameBord.classList.remove(Player.X, Player.O)
  gameBord.classList.add(currentPlayer)
}