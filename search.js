document.addEventListener("DOMContentLoaded", function() {
    const searchTriggers = document.querySelectorAll(".search-trigger");

    searchTriggers.forEach(trigger => {
        trigger.addEventListener("click", function() {
            const category = this.dataset.category;
            const searchInput = document.querySelector(`.search-input[data-category="${category}"]`);

            // Hide all search inputs
            document.querySelectorAll(".search-input").forEach(input => {
                input.classList.add("hidden");
            });

            // Show the search input for the clicked category
            searchInput.classList.remove("hidden");
        });
    });
});
