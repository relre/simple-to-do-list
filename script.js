let tododivDOM = document.querySelector("#tododiv")
let todoinputDOM = document.querySelector("#todoinput")
let toastalertDOM = document.querySelector('#alerttoast')
let noteNumber = 0;

function toast(){
    let toastalertDOM = document.querySelector('#alerttoast')
    
    toastalertDOM.classList.add("show")
    
    setTimeout(function aaaa(){

        toastalertDOM.classList.remove("show")

     }, 3000);
}

function todoAdd(){
    
    let x = todoinputDOM.value
    
    if (x < 2)
    {
        toast()
    }
    else
    {
        tododivDOM.innerHTML = 
        `<label id="${noteNumber}" class="list-group-item">
        <input class="form-check-input me-1" type="checkbox" value="" onclick="if(this.checked){check(${noteNumber})} else {notcheck(${noteNumber})}">
        ${x}<button id="buttonid" type="button" class="btn-close float-end" aria-label="Close" onclick="todoDelete(${noteNumber})"></button>
        </label>` + tododivDOM.innerHTML
        noteNumber++
        todoinputDOM.value = ""
    }   
}



function todoDelete(e){
    
    let todolabelDOM = document.getElementById(e)
    todolabelDOM.remove();
    
}

function check(e){
    
    document.getElementById(e).style.backgroundColor = "#f7e969"
    document.getElementById(e).style.textDecoration = "line-through"

}
function notcheck(e){
    
    document.getElementById(e).style.backgroundColor = "#fff";
    document.getElementById(e).style.textDecoration = "none"
}