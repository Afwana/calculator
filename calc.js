
// display content inside calculator screen
function display(content){
    result.value += content
}

// to clear calculator screen
function calclear(){
    result.value = ""
}

// to evaluate expressions in calculator
function calc(){
    try{
        result.value = eval(result.value)
    }
    catch{
        result.value = "ERROR"
    }
}

// remove last entered number
function remlast(){
    result.value = result.value.slice(0,-1)
}