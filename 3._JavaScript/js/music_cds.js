musicRecords = [];
window.onload = function () {
    let addBtn = document.getElementById("addBtn");
    addMusicRecord();
}

function addMusicRecord() {
    addBtn.onclick = function () {
        let authorInput = document.getElementById("authorInput").value;
        let titleInput = document.getElementById("titleInput").value;
        let yearInput = parseInt(document.getElementById("yearInput").value);

        let authorElement = "";
        let titleElement = "";
        let yearElement = "";

        musicRecords.push({
            author: authorInput,
            title: titleInput,
            year: yearInput
        })
        let addedAuthorDiv = document.getElementById("addedAuthorDiv");
        let addedTitleDiv = document.getElementById("addedTitleDiv");
        let addedYearDiv = document.getElementById("addedYearDiv");

        musicRecords.forEach(function (record) {
            authorElement += "<li>" + record.author + "</li>";
            titleElement += "<li>" + record.title + "</li>";
            yearElement += "<li>" + record.year + "</li>";
        })


        addedAuthorDiv.innerHTML += "<ul class=\"recElms\">" + authorElement + "</ul>";
        addedTitleDiv.innerHTML += "<ul class=\"recElms\">" + titleElement + "</ul>";
        addedYearDiv.innerHTML += "<ul class=\"recElms\">" + yearElement + "</ul>";


    }
}