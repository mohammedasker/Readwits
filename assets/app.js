// Event listeners for the search button
document.querySelector('#submit-button').addEventListener('click', searchBook);

// When user inputs the search bar and clicked search button, start searching
function searchBook() {
	const query = document.querySelector('#search-input').value;
	// Initiate the fetch API
	fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&callback=searchBook`)
      .then((response) => response.text())
      .then((data) => {
      	// Filter the search results by author, title, and subtitle
      	let output = '<h2>Search results</h2>';
      	Object.keys(data).forEach(function(book) {
      		output += `
      		<ul>
	      		<li>Title: ${book.title}</li>
	      		<li>Author: ${book.authors}</li>
	      		<li>Subtitle: ${book.subtitle}</li>
      		</ul>
      		`;
      	});
      	// Display the search result
		document.querySelector('#output').innerHTML = output;
	    console.log(data);
      })
      // Throw an error message when something went wrong during the search
      .catch((error) => console.log(error));
	}