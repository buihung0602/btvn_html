let hours = 12
let minutes = 30
let seconds = 15


let kyhieu = hours >= 12 ? "PM" : "AM"
hours = hours % 12
hours = hours === 0 ? 12 : hours

if(hours<10) {
    hours = `0${hours}`
}

if(minutes<10) {
    minutes = `0${minutes}`
}

if(seconds<10) {
    seconds = `0${seconds}`
}

console.log(`${hours}:${minutes}:${seconds} ${kyhieu}`)