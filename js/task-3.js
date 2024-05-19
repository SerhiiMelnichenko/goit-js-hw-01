function getElementWidth(content, padding, border) {
   // переведення  рядка в число
    content = Number(content)
    padding = Number(padding)
    border = Number(border)
    // обчислення
    const result =` content + ${padding * 2} + ${border * 2}`
    // округлення
    return Number(result.toFixed(1))
}



console.log(getElementWidth("50px", "8px", "4px")) // 74
console.log(getElementWidth("60px", "12px", "8.5px")) // 101
console.log(getElementWidth("200px", "0px", "0px")) // 200
