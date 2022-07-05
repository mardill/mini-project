var searchResultsBtn = document.getElementById("search-results-btn");

function getUserIntput(e) {
    e.preventDefault();
    var userInput = document.getElementById("loc-input").value;
    var optionSelected = document.getElementById("dropdown").value;
}

searchResultsBtn.addEventListener("click", getUserIntput);


