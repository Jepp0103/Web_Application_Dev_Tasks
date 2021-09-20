$(document).ready(function () {
    addDialogs();
    closeDialogs();
    addTask();
});

function addTask() {
    $("#addBtn").click(function () {
        let addText = $("#addText");
        let idNumber = 0;
        let taskId = "task" + idNumber;

        console.log("taskId", taskId)
        $("#tasks > table").append(`
            <tr>              
                <td id=${taskId} class="toDoTasks">
                <img class="trashImg" src="../img/trashbin.png">
                <p>${addText.val()}</p>
                </td>
                <td id=${taskId} class="ongoingTasks"></td>
                <td id=${taskId} class="doneTasks"></td>
            </tr>
        `);

        idNumber++;

        //Closing and clearing input text in dialog
        $('#addDialog').dialog('close');
        $(".toDoTasks").css("background-color", "#ffa07a");
        addText.val("");

        $(".ongoingTasks").css("width", "100%");


        $(".toDoTasks").draggable({
            cursor: "move",
            snap: ".ongoingTasks, .doneTasks",
            stop: function () {

            }
        });

        $(".ongoingTasks").droppable({
            drop: function (event, ui) {
                console.log("droppoing???")
                if ($(this).attr("id") == ui.attr("id")) {
                    console.log("dropped elem")
                }
            }
        });

        /*Calling delete method now when elements have been added*/
        deleteTask();
    });
}

function deleteTask() {
    $(".trashImg").click(function () {
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