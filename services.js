const searchBox = document.getElementById("search box");

searchBox.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        const service = searchBox.value.toLowerCase().trim();

        window.location.href = `servicerequest.html?service=${service}`;

    }

});