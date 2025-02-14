const blogs = [
    { title: "Artificial Intelligence", id: "Artificial-Intelligence" },
    { title: "Blockchain Technology", id: "Blockchain-Technology" },
  ];

  let currentSelection = -1;

  function showSuggestions() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const suggestionsList = document.getElementById('suggestionsList');
    suggestionsList.innerHTML = '';
  
    if (input.length === 0) return;

    const filteredSuggestions = blogs.filter(blog =>
      blog.title.toLowerCase().includes(input)
    );

    if (filteredSuggestions.length === 0) {
      const noResultsMessage = document.createElement('li');
      noResultsMessage.textContent = 'No results found';
      suggestionsList.appendChild(noResultsMessage);
      return;
    }

    filteredSuggestions.forEach((blog, index) => {
      const li = document.createElement('li');
      li.textContent = blog.title;
      li.onclick = () => {
        redirectToBlog(blog.id);
        document.getElementById('searchInput').value = blog.title;
      };
      suggestionsList.appendChild(li);
    });
  }

  function handleKeyPress(event) {
    const suggestionsList = document.getElementById('suggestionsList');
    const suggestions = suggestionsList.getElementsByTagName('li');

    if (event.key === 'ArrowDown') {
      currentSelection = (currentSelection + 1) % suggestions.length;
      updateSuggestionHighlight();
    } else if (event.key === 'ArrowUp') {
      currentSelection = (currentSelection - 1 + suggestions.length) % suggestions.length;
      updateSuggestionHighlight();
    } else if (event.key === 'Enter') {
      if (currentSelection > -1) {
        suggestions[currentSelection].click();
      }
    }
  }

  function updateSuggestionHighlight() {
    const suggestionsList = document.getElementById('suggestionsList');
    const suggestions = suggestionsList.getElementsByTagName('li');
    for (let i = 0; i < suggestions.length; i++) {
      if (i === currentSelection) {
        suggestions[i].style.backgroundColor = '#444';
      } else {
        suggestions[i].style.backgroundColor = '';
      }
    }
  }

  function redirectToBlog(blogId) {
    const blogSection = document.getElementById(blogId);
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('searchInput').value = '';
      document.getElementById('suggestionsList').innerHTML = '';
    }
  }