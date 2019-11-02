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
      		<ul>
	      		<li>Title: ${book.volumeInfo.title}</li>
	      		<li>Author: ${book.volumeInfo.authors}</li>
      		</ul>
      		`;
      	});
      	// Display the search result
    		document.querySelector("#output").innerHTML = output;
      	console.log(data);
      })
      // Throw an error message when something went wrong during the search
      .catch((error) => console.log(error));
	}

      // Ajax method (Has the same undefined problem as above)
      // When user inputs the search bar and clicked search button, start searching
      /*
      function searchBook() {
      const query = document.querySelector('#search-input').value;
      // Initiate the XMLHttpRequest call
      var xhr = new XMLHttpRequest();
      xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${query}&callback=searchBook`, true);
      // Check if status equals 200, then get the API data
      xhr.onload = function() {
        if (this.status == 200) {
          var book = JSON.stringify(this.responseText);
          // Loop the data result and display it as the list
          var output = '';
          for(var i in book){
            output +=`
          <ul>
            <li>Title: ${book[i].title}</li>
            <li>Author: ${book[i].authors}</li>
          </ul>
          `
          }
          // Show the search result
          document.getElementById('output').innerHTML = output;
          console.log(this.responseText);
        }
      }
      xhr.send();
    }
    */