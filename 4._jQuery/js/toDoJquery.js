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
        idNumber++;

        //Closing and clearing input text in dialog
        $('#addDialog').dialog('close');
        $(".toDoTasks").css("background-color", "#ffa07a");

        addText.val("");

        //When elements have been added, elements can now be dragged and dropped
        dragAndDropElements();

        /*Calling delete method now when elements have been added*/
        deleteTask();
    });
}

function dragAndDropElements() {
    $(".toDoTasks").draggable({
        cursor: "move",
        drag: function () {
            draggedId = $(this).attr("id");
        },
        snap: ".ongoingTasks, .doneTasks"
    });

    $(".doneTasks").draggable({
        cursor: "move",
        drag: function () {
            draggedId = $(this).attr("id");
        },
        snap: ".ongoingTasks, .toDoTasks"
    });

    $(".ongoingTasks").droppable({
        drop: function () {
            console.log("element dropped:", draggedId.substring(0, 8))
            console.log("ongoing id", $(this).attr("id"))
            let ongoingId = $(this).attr("id");
            if (draggedId.substring(0, 8) == "toDoTask" || draggedId.substring(0, 7) == "toDoTask") {
                //Removing tasks from previous list
                let draggedText = $("#" + draggedId + "> p").text();
                console.log("dragged text", draggedText)
                $("#" + draggedId).empty();
                $("#" + draggedId).draggable("disable");
                $("#" + draggedId).css("background-color", "");

                $("#" + ongoingId).append(`
                            <img class="trashImg" src="../img/trashbin.png">
                            <p>${draggedText}</p>
                `);
                $("#" + ongoingId).css("background-color", "#eee8aa");

                console.log("dropped elem")
            }
        }
    });
}

function deleteTask() {
    $(".trashImg").click(function () {
        console.log("deleting")
        $(this).parents(".toDoTasks").remove();
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
    })

    $("#closeBtn").click(function () {
        $("#helpDialog").dialog("close");
    })
}