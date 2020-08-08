// 玩家枚举
enum Player {
  X = 'x',
  O = 'o'
}

// 判赢数组
let winsArr = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],  // 横
  [0, 3, 6], [1, 4, 7], [2, 5, 8],  // 竖
  [0, 4, 8], [2, 4, 6]	            // 斜
]
// 单元格列表
let cells = document.querySelectorAll('.cell')
// 游戏面板
let gameBord = document.querySelector('#bord')
// 获胜信息面板
let message = document.querySelector('#message') as HTMLDivElement
// 获胜者
let winner = document.querySelector('#winner') as HTMLParagraphElement
// 当前玩家
let currentPlayer = Player.X
// 记录已下棋的次数
let steps = 0

// 给单元格绑定点击事件
cells.forEach(function (item) {
  let cell = item as HTMLDivElement
  cell.addEventListener('click', clickCell, { once: true })
})

// 单元格click 事件处理程序
function clickCell(event: MouseEvent) {
  let target = event.target as HTMLDivElement
  target.classList.add(currentPlayer)

  steps++

  /*
    展示获胜信息：

    1 获取到与获胜信息相关的两个 DOM 元素：1 #message 2 #winner。
    2 显示获胜信息面板（通过 style 属性实现）。
    3 展示获胜信息：
      如果获胜，展示“x 赢了！”或“o 赢了！”；
      如果是平局，展示“平局”。
  */

  // 调用判赢函数判断是否获胜
  let isWin = checkWin(currentPlayer)
  if (isWin) {
    message.style.display = 'block'
    winner.innerText = currentPlayer + ' 赢了！'
    // 因为游戏已经结束，所以，此处直接 return
    // 来刻意阻止后续代码执行
    return
  }

  // 判断平局
  if (steps === 9) {
    message.style.display = 'block'
    winner.innerText = '平局'
    // 因为游戏已经结束，所以，此处直接 return
    // 来刻意阻止后续代码执行
    return
  }

  // 根据当前玩家，得到另外一个玩家
  currentPlayer = currentPlayer === Player.X ? Player.O : Player.X
  // 处理下一步提示
  gameBord.classList.remove(Player.X, Player.O)
  gameBord.classList.add(currentPlayer)
}

// 封装判赢函数
function checkWin(player: Player) {
  return winsArr.some(function (item) {
    // 获取到每种获胜情况对应的 3 个单元格元素
    let cellIndex1 = item[0]
    let cellIndex2 = item[1]
    let cellIndex3 = item[2]

    // 3 判断这 3 个单元格元素是否同时包含当前玩家的类名
    if (
      hasClass(cells[cellIndex1], player) &&
      hasClass(cells[cellIndex2], player) &&
      hasClass(cells[cellIndex3], player)
    ) {
      return true
    }
    return false
  })
}

// 封装 hasClass 函数:判断 DOM 元素是否包含某个类名
function hasClass(el: Element, name: string) {
  return el.classList.contains(name)
}