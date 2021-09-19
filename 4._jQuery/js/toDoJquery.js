let toDoTasks = [];

console.log("loading??")

$(document).ready(function () {
    $('#helpDialog').dialog({
        autoOpen: false
    });

    $('#helpBtn').click(function () {
        $('#helpDialog').dialog('open');
    });

    $('#addDialog').dialog({
        autoOpen: false
    });

    $('#addBtn').click(function () {
        $('#addDialog').dialog('open');
    });
});