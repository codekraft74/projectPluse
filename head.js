 // Projects Data
 const projects = [
    { id: "ai", name: "AI Trends", url: "more.html" },
    { id: "logic", name: "LogicNest", url: "https://logicnest.netlify.app/" },
    { id: "joke", name: "Joke Generator", url: "joke.html" },
  
];

// Show suggestions when typing
function showSuggestions() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let suggestionBox = document.getElementById("suggestions");
    suggestionBox.innerHTML = "";

    if (input === "") {
        suggestionBox.style.display = "none";
        return;
    }

    let matches = projects.filter(project => 
        project.name.toLowerCase().includes(input) || 
        project.id.includes(input) ||
        project.url.includes(input)
    );

    if (matches.length > 0) {
        suggestionBox.style.display = "block";
        matches.forEach(match => {
            let listItem = document.createElement("li");
            listItem.textContent = match.name;
            listItem.onclick = function() {
                document.getElementById("searchInput").value = match.name;
                suggestionBox.style.display = "none";
                window.location.href = match.url;
            };
            suggestionBox.appendChild(listItem);
        });
    } else {
        suggestionBox.style.display = "none";
    }
}

// Search function
function searchProject() {
    let query = document.getElementById("searchInput").value.toLowerCase();
    let result = projects.find(project => 
        project.id === query || 
        project.name.toLowerCase().includes(query) || 
        project.url.includes(query)
    );

    if (result) {
        window.location.href = result.url;
    } else {
        alert("No matching project found!");
    }
}
</script>
