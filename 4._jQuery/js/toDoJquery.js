let idNumber = 1;
let draggedId;

$(document).ready(function () {
    addDialogs();
    closeDialogs();
    addTask();
});

function addTask() {
    $("#addBtn").click(function () {
        let addText = $("#addText");
        console.log("id number", idNumber)

        $("#tasks > table").append(`
            <tr>              
                <td id=toDoTask${idNumber} class="toDoTasks">
                    <img class="trashImg" src="../img/trashbin.png">
                    <p>${addText.val()}</p>
                </td>
                <td id=ongoingTask${idNumber} class="ongoingTasks"></td>
                <td id=doneTask${idNumber} class="doneTasks"></td>
            </tr>
        `);

        $("#toDoTask" + idNumber).css("background-color", "#ffa07a");
        idNumber++;

        //Closing and clearing input text in dialog
        $('#addDialog').dialog('close');

        addText.val("");

        //When elements have been added, elements can now be dragged and dropped
        dragElement(".toDoTasks", ".ongoingTasks, .doneTasks");
        dragElement(".doneTasks", ".ongoingTasks, .toDoTasks");
        dragElement(".ongoingTasks", ".doneTasks .toDoTasks");

        dropElement(".toDoTask", "#ffa07a");
        dropElement(".ongoingTasks", "#eee8aa");
        dropElement(".doneTasks", "#90ee90");


        /*Calling delete method now when elements have been added*/
        deleteTask(".toDoTasks");
    });
}

function dragElement(draggedTaskType, snapTasksTypes) {
    $(draggedTaskType).draggable({
        cursor: "move",
        drag: function () {
            draggedId = $(this).attr("id");
            console.log("dragelement:", draggedTaskType)
        },
        snap: snapTasksTypes
    });
}

function dropElement(droppedTaskType, taskTypeColor) {
    $(droppedTaskType).droppable({
        drop: function () {
            console.log("dropelement type:", droppedTaskType)

            let taskTypeId = $(this).attr("id");

            //Removing tasks from previous list
            let draggedText = $("#" + draggedId + "> p").text();
            console.log("dragged text", draggedText)
            $("#" + draggedId).empty();
            $("#" + draggedId).draggable("disable");
            $("#" + draggedId).css("background-color", "");

            $("#" + taskTypeId).append(`
                    <img class="trashImg" src="../img/trashbin.png">
                    <p>${draggedText}</p>
            `);

            //Setting background color of specific task
            $("#" + taskTypeId).css("background-color", taskTypeColor);

            //Calling delete tasks so the specific type task can be deleted
            deleteTask(droppedTaskType);
        }
    });
}

function deleteTask(typeTask) {
    $(".trashImg").click(function () {
        console.log("deleting")
        $(this).parents(typeTask).remove();
    });
}

function addDialogs() {
    //Help dialog
    $('#helpDialog').dialog({
        autoOpen: false
    });

    $('#helpBtn').click(function () {
        $('#helpDialog').dialog('open');
    });

    $('#addDialog').dialog({
        autoOpen: false
    });

    //Add dialog
    $('#addTaskBtn').click(function () {
        $('#addDialog').dialog('open');
    });
}

function closeDialogs() {
    $("#cancelBtn").click(function () {
        $("#addDialog").dialog("close");
    });

    $("#closeBtn").click(function () {
        $("#helpDialog").dialog("close");
    });
}