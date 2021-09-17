let musicRecords = [];

window.onload = function () {
    addMusicRecord();
}

function addMusicRecord() {
    let addBtn = document.getElementById("addBtn");

    addBtn.onclick = function () {
        let authorInput = document.getElementById("authorInput").value;
        let titleInput = document.getElementById("titleInput").value;
        let yearInput = parseInt(document.getElementById("yearInput").value);

        if (authorInput.length === 0 || titleInput.length === 0 || yearInput.length === 0) {
            alert("Please type some input to all above input fields.")
        } else {
            //Adding records to the array
            musicRecords.push({
                author: authorInput,
                title: titleInput,
                year: yearInput
            });

            let listView = document.getElementById("listView");

            //Adding elements to the list view
            listView.innerHTML =
                "<tr>" +
                "<th>Author</th>" +
                "<th>Title</th>" +
                "<th>Year</th>" +
                "<th></th>" +
                "</tr>";

            //Setting the border of the list view
            listView.style.border = "1px solid black";
            listView.style.width = "100 %";

            for (let i = 0; i < musicRecords.length; i++) {
                listView.innerHTML += `
                    <tr>
                        <td>${musicRecords[i].author}</td>
                        <td>${musicRecords[i].title} </td>
                        <td>${musicRecords[i].year}  </td>
                        <td><img class="trashImg" src="../img/trashbin.png" onclick="this.parentElement.parentElement.remove();"></td>
                    </tr>
                    `;
            }
        }
    }
}