/*
  使用枚举修改当前玩家：

  1 创建字符串枚举（Player），提供 X 和 O 两个成员。
  2 将成员 X 的值设置为：'x'（类名）；将成员 O 的值设置为：'o'（类名）。
  3 将变量（currentPlayer）的类型设置为 Player 枚举类型，默认值为 Player.X。
  4 将所有用到 x 和 o 的地方全部使用枚举成员代替。
*/
enum Player {
  X = 'x',
  O = 'o'
}

// 单元格列表
let cells = document.querySelectorAll('.cell')
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