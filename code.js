function snapCrackle(maxValue){
    let result = ''
   
    for( i = 1; i <= maxValue; i++)
    {
        if ((i % 2 !== 0) && (i % 5 === 0))
        {
            result += 'SnapCrackle'
        } else if (i % 2 !== 0)
        {
            result += 'Snap'
        } else if (i % 5 === 0)
        {
            result += 'Crackle'
        } else
        {
            result += `${i}`
        }

        if(i < maxValue){result += ', '}
    }
    return result
}

function render(text,maxValue){

document.write(`
<h1>Snap Crackle!</h1>
<h3>Max Value: ${maxValue}</h3>
<p>${text}</p>
`)

}

let highestNumber = prompt('What is the highest number?')
let result = snapCrackle(highestNumber)

console.log(render(result,highestNumber))