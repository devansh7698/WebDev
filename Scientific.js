function display(text){
    var output = document.getElementById("display")
    output.value +=text

}

function del(){
    var output = document.getElementById("display")
    output.value = output.value.slice(0,-1)
}

function CE() {
    var output = document.getElementById("display")
    output.value = ''
}
function calculate() {
    var output = document.getElementById("display")
    var val = output.value
    if(val.includes("sin")){
        val=val.replace("sin", "Math.sin")
    }
    if(val.includes("cos")){
        val=val.replace("cos", "Math.cos")
    }
    if(val.includes("tan")){
        val=val.replace("tan", "Math.tan")
    }
    if(val.includes("log")){
        val=val.replace("log", "Math.log10")
    }
    if(val.includes("ln")){
        val=val.replace("ln", "Math.log")
    }
    if(val.includes("^")){
        val=val.replace("^", "**")
    }
    if(val.includes("π")){
        val=val.replace("π", "Math.PI")
    }
    if(val.includes("e")){
        val=val.replace("e", "Math.E")
    }
    if(val.includes("e^")){
        val=val.replace("e^", "Math.exp")
    }
    if(val.includes("^2")){
        val=val.replace("^2", "**2")
    }
    if(val.includes("√")){
        val=val.replace("√", "Math.sqrt")
    }
    try{
        output.value = eval(val).toFixed(8);
        if(output.value == "Infinity")
            output.value = "Value Error";
    }
    catch(err){
        output.value = "Error";
    }

}

function execute(event)
{
    if(event.key === "Enter")
        calculate();
}