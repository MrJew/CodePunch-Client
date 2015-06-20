var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/python");
var editor = ace.edit(document.getElementById('test'));
editor.getSession().setUseWorker(false);