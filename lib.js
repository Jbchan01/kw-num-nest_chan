function avg(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return "Insufficient parameter!"; // 매개변수가 빈 케이스. NaN 발생.
    }
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}
function prime(num) {
    for (let i =2; i< num; i++){
        if(num %i ===0) return false;
    }
    return true;
}

function factorial(num) {
    let fac = 1;
    for(let i = num;i>=2;i--){
        fac *= i;
    }
    return fac;
}
module.exports = {
    avg,
    prime,
    factorial
}