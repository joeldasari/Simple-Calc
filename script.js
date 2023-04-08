var num1 = document.getElementById("first-el").innerText = prompt("Enter 1st element:")
var num2 = document.getElementById("second-el").innerText = prompt("Enter 2nd element: ")
var result = document.getElementById("result")


function add()
{
    
    result.innerText = parseInt(num1) + parseInt(num2)

}

function sub()
{
    
    result.innerText = num1 - num2

}

function mul()
{
    
    result.innerText = num1 * num2

}


function div()
{
    
    result.innerText = num1 / num2

}
function reset()
{
    window.location.reload()
}

