<<<<<<< HEAD
module.exports = {
    // 定时任务demo
    timingProcessing(){
        let num = 0
        var timer = setInterval(() => {
            num++
            console.log("第"+ num + "次打印")
            if(num >= 10){
                console.log("结束定时打印")
                clearInterval(timer)
            }
        },2000)
    }
=======
module.exports = {
    // 定时任务demo
    timingProcessing(){
        let num = 0
        var timer = setInterval(() => {
            num++
            console.log("第"+ num + "次打印")
            if(num >= 10){
                console.log("结束定时打印")
                clearInterval(timer)
            }
        },2000)
    }
>>>>>>> 08407b781d69c6e80cc19a1350d37860714011cc
}