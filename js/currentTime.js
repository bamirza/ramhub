document.write ('<p>Current Time: <span id="date-time">', new Date().toLocaleTimeString(), '<\/span>.<\/p>')
if (document.getElementById) onload = function () {
setInterval ("document.getElementById ('date-time').firstChild.data = new Date().toLocaleTimeString()", 50)}