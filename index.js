
// const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/"];

// 你的第一版：能够工作，但为了两组密码同时维护了两个 DOM 引用、两个数组和两个字符串。
// 其中数组只是临时存放字符，稍后还要再遍历一次才能转换成字符串，形成了多余的中间层。
// let passWord1El = document.getElementById("password-1")
// let passWord2El = document.getElementById("password-2")
// let passWordNum1 = []
// let passWordNum2 = []
// let passWord1 = ""
// let passWord2 = ""

// function generatePWN() {
//     // 这些变量都在函数外声明，所以每次点击前必须手动清空四份旧状态。
//     // 如果漏掉其中任何一个，上一轮生成的数据就可能进入下一轮结果。
//     passWordNum1 = []
//     passWordNum2 = []
//     passWord1 = ""
//     passWord2 = ""

//     for (let i = 1; i < 16; i ++) {
//         // 两组密码的随机数生成和 push 逻辑几乎完全相同，产生了重复代码。
//         let randomNum1 = Math.floor(Math.random() * characters.length)
//         passWordNum1.push(characters[randomNum1])
//         let randomNum2 = Math.floor(Math.random() * characters.length)
//         passWordNum2.push(characters[randomNum2])
//     }
//     generatePW()
// }

// function generatePW() {
//     // 第一个循环已经生成了字符，这里又进行第二次循环，只为了把数组重新拼成字符串。
//     for (let i = 0; i < 15; i ++) {
//         passWord1 += passWordNum1[i]
//         passWord2 += passWordNum2[i]
//     }
//     passWord1El.textContent = passWord1
//     passWord2El.textContent = passWord2
// }


const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passWord1El = document.getElementById("password-1")
let passWord2El = document.getElementById("password-2")
// 你的第二版：删掉了两个密码字符串，但两个全局数组仍是需要手动清空的中间状态。
let passWordNum1 = []
let passWordNum2 = []

function generatePWN() {
    // 因为下面使用 textContent +=，每次生成前仍然必须同时清空数组和页面内容。
    passWordNum1 = []
    passWordNum2 = []
    passWord1El.textContent = ""
    passWord2El.textContent = ""

    for (let i = 1; i < 16; i ++) {
        // 两组密码仍在同一个循环里分别生成，随机字符逻辑重复了两次。
        let randomNum1 = Math.floor(Math.random() * characters.length)
        passWordNum1.push(characters[randomNum1])
        let randomNum2 = Math.floor(Math.random() * characters.length)
        passWordNum2.push(characters[randomNum2])
    }
    generatePW()
}

function generatePW() {
    // 这个函数实际上是在“显示”已经生成的密码，名称 generatePW 与当前职责不完全一致。
    // 每轮都用 += 修改 DOM；15 个字符影响很小，但它把数据拼接和页面显示混在了一起。
    for (let i = 0; i < 15; i ++) {
        passWord1El.textContent += passWordNum1[i]
        passWord2El.textContent += passWordNum2[i]
    }
}


// 另一种写法：生成函数只负责生成一组密码，并返回完整字符串
// function generatePW() {
//     let passWord = ""

//     for (let i = 0; i < 15; i ++) {
//         let randomNum = Math.floor(Math.random() * characters.length)
//         passWord += characters[randomNum]
//     }

//     return passWord
// }

// 按钮点击时调用两次 generatePW()，得到两组互相独立的密码
// function generatePWN() {
//     passWord1El.textContent = generatePW()
//     passWord2El.textContent = generatePW()
// }

//test