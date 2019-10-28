// Constant variables for input search
const QUERY = document.querySelector('search-input');

// Event listeners for search bar and search button
document.querySelector('#submit-button').addEventListener('click', handleResponse);

// Initiate the fetch
function handleResponse() {
	fetch(`https://www.googleapis.com/books/v1/volumes?q=${QUERY}&callback=handleResponse`)
      .then((response) => response.text())
      .then((data) => {
        //document.querySelector('output').innerHTML = data;
        console.log(data)
      })
      .catch((error) => console.log(error))
	}

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