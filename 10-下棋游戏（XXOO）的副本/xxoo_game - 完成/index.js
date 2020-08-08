// 玩家枚举
var Player;
(function (Player) {
    Player["X"] = "x";
    Player["O"] = "o";
})(Player || (Player = {}));
// 判赢数组
var winsArr = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6] // 斜
];
// 单元格列表
var cells = document.querySelectorAll('.cell');
// 游戏面板
var gameBord = document.querySelector('#bord');
// 获胜信息面板
var message = document.querySelector('#message');
// 获胜者
var winner = document.querySelector('#winner');
// 重新开始按钮
var restart = document.querySelector('#restart');
// 当前玩家
var currentPlayer;
// 记录已下棋的次数
var steps;
// 调用该函数来初始化游戏数据，开始游戏
startGame();
// 重新开始游戏
restart.addEventListener('click', startGame);
// 开始游戏
function startGame() {
    // 隐藏获胜信息
    message.style.display = 'none';
    // 重置下棋次数
    steps = 0;
    // 重置默认玩家为 x
    currentPlayer = Player.X;
    // 重置下棋提示为 x
    gameBord.classList.remove(Player.X, Player.O);
    gameBord.classList.add(Player.X);
    cells.forEach(function (item) {
        var cell = item;
        // 清空棋盘
        cell.classList.remove(Player.X, Player.O);
        // 移除单元格点击事件、重新给单元格绑定点击事件
        cell.removeEventListener('click', clickCell);
        cell.addEventListener('click', clickCell, { once: true });
    });
}
// 单元格click 事件处理程序
function clickCell(event) {
    var target = event.target;
    target.classList.add(currentPlayer);
    // 记录下棋次数
    steps++;
    // 调用判赢函数判断是否获胜
    var isWin = checkWin(currentPlayer);
    if (isWin) {
        message.style.display = 'block';
        winner.innerText = currentPlayer + ' 赢了！';
        return;
    }
    // 判断平局
    if (steps === 9) {
        message.style.display = 'block';
        winner.innerText = '平局';
        return;
    }
    // 根据当前玩家，得到另外一个玩家
    currentPlayer = currentPlayer === Player.X ? Player.O : Player.X;
    // 处理下一步提示
    gameBord.classList.remove(Player.X, Player.O);
    gameBord.classList.add(currentPlayer);
}
// 判赢函数
function checkWin(player) {
    return winsArr.some(function (item) {
        // 获取到每种获胜情况对应的 3 个单元格元素
        var cellIndex1 = item[0];
        var cellIndex2 = item[1];
        var cellIndex3 = item[2];
        // 3 判断这 3 个单元格元素是否同时包含当前玩家的类名
        if (hasClass(cells[cellIndex1], player) &&
            hasClass(cells[cellIndex2], player) &&
            hasClass(cells[cellIndex3], player)) {
            return true;
        }
        return false;
    });
}
// 判断 DOM 元素是否包含某个类名
function hasClass(el, name) {
    return el.classList.contains(name);
}
