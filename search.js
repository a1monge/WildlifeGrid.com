// Function to search on animal database
function searchWeb() {
    var searchTerm = $('#searchInput').val().trim();
    if (searchTerm !== "") {
        // Check if the searched term exists in the animalNames array
        if (animalNames.includes(searchTerm)) {
            var WebURL = "https://www.google.com/search?q=" + searchTerm;
            window.open(WebURL, "_blank");
        } else {
            alert("The term you searched for does not exist in the database.");
        }
    } else {
        alert("Please enter a search term.");
    }
}

var animalNames = []; // Define the animalNames array globally

document.addEventListener("DOMContentLoaded", function () {
    // Fetch animal names from the server
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1/Project/WildlifeGrid.com/search.php");
    xhr.onload = function () {
        if (xhr.status === 200) {
            animalNames = JSON.parse(xhr.responseText);
            // Initialize autocomplete on the search input
            $('#searchInput').autocomplete({
                source: animalNames
            });
        } else {
            console.error('Error fetching animal names:', xhr.statusText);
        }
    };
    xhr.onerror = function () {
        console.error('Error fetching animal names:', xhr.statusText);
    };
    xhr.send();

    // Handle search on Enter key press
    $('#searchInput').keypress(function (event) {
        if (event.which === 13) {
            searchWeb();
        }
    });
});
