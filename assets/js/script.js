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
    .then(data => console.log(data));
}