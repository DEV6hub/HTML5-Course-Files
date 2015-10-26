var dropzone, drag;
window.addEventListener("load", dragDrop, false);
function dragDrop() {
    dropzone = document.getElementById("dropzone");
    drag = document.getElementById("drag");
    drag.addEventListener("dragstart", handleDragStart, false);
    drag.addEventListener("drag", handleDrag, false);
    drag.addEventListener("dragend", handleDragEnd, false);
    dropzone.addEventListener("dragenter", handleDragEnter, false);
    dropzone.addEventListener("dragover", handleDragOver, false);
    dropzone.addEventListener("dragleave", handleDragLeave, false);
    dropzone.addEventListener("drop", handleDrop, false);
}

function handleDragStart(e) {
    this.style.backgroundColor = "green";
    document.getElementById("output").innerHTML += "<li>Dragging Started</li>";
    e.dataTransfer.setData('Text', this.id);
}

var dragReported = false;
function handleDrag(e) {
    if (!dragReported) document.getElementById("output").innerHTML += "<li>Dragging</li>";
    dragReported = true;
}

function handleDragEnter(e) {
    document.getElementById("output").innerHTML += "<li>Drag Enter</li>";
    cancel(e);
}

var dragOverReported = false;
function handleDragLeave(e) {
    document.getElementById("output").innerHTML += "<li>Drag Leave</li>";
    dragOverReported = false;
}

function handleDragOver(e) {
    if (!dragOverReported) document.getElementById("output").innerHTML += "<li>Dragging Over</li>";
    dragOverReported = true;
    cancel(e);
}

function handleDrop(e) {
    var droppedElem = e.dataTransfer.getData('Text');
    document.getElementById("output").innerHTML += "<li><strong>" + droppedElem + "</strong> dropped on <strong>" + this.id + "</strong></li>";
    var now = new Date();
    this.getElementsByTagName("time")[0].innerHTML = now.format("H:MM:ss");
    cancel(e);
}

function handleDragEnd(e) {
    document.getElementById("output").innerHTML += "<li>Dragging Ended</li>";
    this.style.backgroundColor = "red";
}

function cancel(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    return false;
}
