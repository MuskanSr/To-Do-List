var arr = new Array();

function addfun() {
    arr.push(document.getElementById("input").value)
    document.getElementById("input").value = " "
    display()    
}

function display() {
    var str = '<ul >'
    for (i=0; i<arr.length; i++){
        str += "<li class= 'none' onclick='f2(this)' >" + arr[i]  + "</li>"
    }
    str += '</ul>'
    document.getElementById("disp").innerHTML = str
}

function f2(id){
    if (id.className === "line"){
        id.setAttribute("class","none")
    }
    else{
        id.setAttribute("class","line")
    }
}

function removeelements(){
    var elt = document.getElementsByClassName('line')
    for (i=0; i<elt.length; i++){
        elt[i].style.display= 'none';
    }
}