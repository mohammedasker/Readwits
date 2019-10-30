// Event listeners for and search button
document.querySelector('#submit-button').addEventListener('click', searchBook);

// Initiate the fetch
function searchBook() {
	let query = document.querySelector('#search-input').value;
	fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&callback=searchBook`)
      .then((response) => response.text())
      .then((data) => {
       console.log(data)
      })
      .catch((error) => console.log(error))
	}

// Filter the search results by author, title, and subtitle


	/* 
	Function for filtering relevant contents...
	(GET the relevant contents codes)

	fetch("https://www.googleapis.com/books/v1/volumes?q=");
		.then((response) => response.json())
		.then(data => {
			console.log(data)
		})
		.catch(error => console.error(error))

	Function for showing results...
	(Display the results into an item lists code)
	*/

	//Reference only
	//"https://www.googleapis.com/books/v1/volumes?q=harry+potter&callback=handleResponse"