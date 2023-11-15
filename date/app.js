const top1 = document.querySelector('.top')
const bottom1 = document.querySelector('.bottom')

const monthd = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

setInterval(()=>{
    const date = new Date
    const year = date.getFullYear()
    const month = monthd[date.getMonth()]
    const day = date.getDay() < 10 ? '0' + date.getDay() : date.getDay()
    const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    const secund = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()

    top1.textContent = `${day} ${month} ${year} `
    bottom1.textContent = `${hour}: ${minute}: ${secund} `
},1000)