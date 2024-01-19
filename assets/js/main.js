let nodeList = document.getElementsByTagName("li");
console.log(nodeList);
for (i = 0; i < nodeList.length; i++) {
    let span = document.createElement("span");
    let cross = document.createTextNode("X");
    span.className = "close";
    span.appendChild(cross);
    nodeList[i].appendChild(span);
}

let close = document.getElementsByClassName('close');
console.log(close.length);
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

function newElement() {
    let li = document.createElement('li');
    let inputValue = document.getElementById('newTask').value;
    console.log(inputValue);
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert('Vous devez entrer une tâche')
    }
    else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById('newTask').value = "";
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }

}