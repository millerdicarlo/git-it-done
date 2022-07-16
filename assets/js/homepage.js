var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");

//Fetch function
var getUserRepos = function(user) {
    // format github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";
  
    // make request to url
    fetch(apiUrl).then(function(response) {
      response.json().then(function(data) {
        displayRepos(data, user);
      });
    });
  };

  // form submission function
  var formSubmitHandler = function(event) {
    event.preventDefault();
    
    // get value from input element
    var username = nameInputEl.value.trim();
    if (username) {
        getUserRepos(username);
        nameInputEl.value = "";
    } else {
        alert("Please enter a GitHub username");
    }
    console.log(event);
  };

// Function to display usernames and repos
  var displayRepos = function(repos, searchTerm) {
    console.log(repos);
    console.log(searchTerm);
  };
  
  userFormEl.addEventListener("submit", formSubmitHandler);