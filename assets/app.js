// Event listeners for the search button
document.querySelector('#submit-button').addEventListener('click', searchBook);

// When user inputs the search bar and clicked search button, start searching
function searchBook() {
	let query = document.querySelector('#search-input').value;
	// Initiate the fetch API
	fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
            console.log(data);
      	// Filter the search results by author, title, and subtitle
      	let output = "<h2>Search results</h2>";
      	data.items.forEach(book => {
      		output += `
          <div class="results-box">
      		<ul>
            <img src= ${book.volumeInfo.imageLinks.smallThumbnail}>
	      		<li><b>Title:</b> ${book.volumeInfo.title}</li>
	      		<li><b>Author:</b> ${book.volumeInfo.authors}</li>
            <a href=${book.volumeInfo.canonicalVolumeLink}><button class="book-info">See this book</button></a>
      		</ul>
          </div>
      		`;
      	});
      	// Display the search result
    		document.querySelector("#output").innerHTML = output;
      	console.log(data);
      })
      // Throw an error message when something went wrong during the search
      .catch((error) => console.log(error));
	}