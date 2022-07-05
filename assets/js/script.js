var searchResultsBtn = document.getElementById("search-results-btn");

function getUserIntput(e) {
    e.preventDefault();
    var userInput = document.getElementById("loc-input").value;
    var optionSelected = document.getElementById("dropdown").value;

    fetchRecords(userInput, optionSelected);
}

searchResultsBtn.addEventListener("click", getUserIntput);


// Call API
function fetchRecords(userInput, optionSelected) {
    if (optionSelected) {
        var url = `https://www.loc.gov/${optionSelected}/?q=${userInput}&fo=json`;
    } else {
        var url = `https://www.loc.gov/search/?q=${userInput}&fo=json`;
    }

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        for (var i = 0; i < 10; i++) {
            var title = document.createElement("h2");
            title.textContent = "Title: " + data.results[i].title;
            var date = document.createElement("p");
            date.textContent = "Date: " + data.results[i].date;
            var subjects = document.createElement("p");
            subjects.textContent = "Subjects: " + data.results[i].subject;
            var readMore = document.createElement("button");
            var link = document.createElement("a");
            link.setAttribute("href", data.results[i].url);
            link.textContent = "Read More";
            readMore.appendChild(link);

            document.getElementById("results-area").appendChild(title);
            document.getElementById("results-area").appendChild(date);
            document.getElementById("results-area").appendChild(subjects);
            document.getElementById("results-area").appendChild(readMore);
        }
    });
}
