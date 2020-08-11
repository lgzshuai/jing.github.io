/*
  获取元素 ， 操作元素  
*/
// 枚举的方法来创建玩家
enum Player{
  x = 'x'
  o = 'o'
}

//判赢数组
let winsArr = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],  // 横
  [0, 3, 6], [1, 4, 7], [2, 5, 8],  // 竖
  [0, 4, 8], [2, 4, 6]	            // 斜
]
// 单元格
let cells = document.querySelectorAll('.cell')
// 当前玩家 let currentPlayer: Player = Player.x
let currentPlayer : Player
// 游戏面板
let gameBord = document.querySelector('#bord')
// 获取获胜信息面板   as 绑定类型
let message = document.querySelector('#message') as HTMLDivElement
// 获胜者
let winner = document.querySelector('#winner') as HTMLParagraphElement
// 重新开始按钮
let restart = document.querySelector('#restart') as HTMLButtonElement
// 记录下棋次数最大为9
let steps : number

// 重新开始游戏
restart.addEventListener('click', startGame)
// 调用重新开始游戏
startGame()
// 初始化开始游戏
function startGame(){
  // console.log('click');
  // 隐藏获胜信息
  message.style.display = 'none'
  
  // 重置下棋次数
  steps = 0
  // 重置玩家
  currentPlayer = Player.x 
  // 重置下棋提示玩家为 x
  gameBord.classList.remove(Player.x, Player.o)
  gameBord.classList.add(Player.x)

  // 清空棋盘
  cells.forEach(function (itme) {
    let cell = itme as HTMLDivElement
    // 清空棋盘
    cell.classList.remove(Player.x, Player.o)
    // 先移除单元格点击事件，重新绑定点击事件
    cell.removeEventListener('click', clickCell)
    cell.addEventListener('click', clickCell, {once: true})
  })
}

// 给单元绑定点击事件  用重新开始游戏来代替此步骤
// cells.forEach(function (item) {
//   let cell = item as HTMLDivElement
//   // console.log(item)
//   cell.addEventListener('click', clickCell, { once: true })
// })

// 棋盘中单元格的click事件处理程序
function clickCell(event: MouseEvent) {
  //console.log('click', event.target)
  let target = event.target as HTMLDivElement

  target.classList.add(currentPlayer)
  
  steps++

  // 调用判赢函数
  let iswin = checkwin(currentPlayer)
  if (iswin) {
    message.style.display = 'block'
    winner.innerText = currentPlayer + ' 赢了！'

    return
  }
  
  //判断平局
  if (steps === 9) {
    message.style.display = 'block'
    winner.innerText = '平局'

    return
  }
  
  // 判断取反‘x'玩家 与 ’o‘玩家
  currentPlayer = currentPlayer === Player.x ? Player.o : Player.x
  // 处理下一步提示
  gameBord.classList.remove(Player.x, Player.o)
  gameBord.classList.add(currentPlayer)
}

// 封装判赢函数
function checkwin(player: player) {

  return winsArr.some(function (itme) {
   // console.log(itme)
   let cellIndex1 = itme[0]
   let cellIndex2 = itme[1]
   let cellIndex3 = itme[2]
   
   // 判断 3 个单元格元素是否同时包含当前玩家的类名
   if (// cells[cellIndex1].classList.contains(player) && 
       // cells[cellIndex2].classList.contains(player) &&
       // cells[cellIndex3].classList.contains(player)
       hasClass(cells[cellIndex1], player) &&
       hasClass(cells[cellIndex2], player) &&
       hasClass(cells[cellIndex3], player) 
   ) {
     return true
   }
  })

}

// 封装hasClass函数 判断DOM元素是否包含某个类名    类似于jQuery检测元素方法
function hasClass(el:Element, name: string) {
  return el.classList.contains(name)
}