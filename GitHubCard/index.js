/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/


const userLookup = function (username) {
  let returnValue = null;
  axios
    .get (`https://api.github.com/users/${username}`)
    .then(response => {
      console.log(response);
      // Process the data
      returnValue = response.data;
    })
    .catch(error => {
      console.error("The data was not returned");
    });
  return returnValue;
}

const getFollowerSummaries = function (urlString) {
  let returnValue = null;
  axios
    // .get (`https://api.github.com/users/${username}`)
    .get (urlString)
    .then(response => {
      console.log(response);
      // Process the data
      returnValue = response.data;
    })
    .catch(error => {
      console.error("The data was not returned");
    });
  return returnValue;
}

////////// This is just for temporary lookup to save on API calls //////////
  const me = {
    "login": "danimal-johnson",
    "id": 20260285,
    "node_id": "MDQ6VXNlcjIwMjYwMjg1",
    "avatar_url": "https://avatars0.githubusercontent.com/u/20260285?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/danimal-johnson",
    "html_url": "https://github.com/danimal-johnson",
    "followers_url": "https://api.github.com/users/danimal-johnson/followers",
    "following_url": "https://api.github.com/users/danimal-johnson/following{/other_user}",
    "gists_url": "https://api.github.com/users/danimal-johnson/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/danimal-johnson/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/danimal-johnson/subscriptions",
    "organizations_url": "https://api.github.com/users/danimal-johnson/orgs",
    "repos_url": "https://api.github.com/users/danimal-johnson/repos",
    "events_url": "https://api.github.com/users/danimal-johnson/events{/privacy}",
    "received_events_url": "https://api.github.com/users/danimal-johnson/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Dan Johnson",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "public_repos": 22,
    "public_gists": 0,
    "followers": 1,
    "following": 1,
    "created_at": "2016-07-02T21:09:34Z",
    "updated_at": "2019-09-25T07:08:14Z"
  }


////////// Temporary local lookup for API call ///////////////
let myFollowers = [
  {
    "login": "joenelsong",
    "id": 7134689,
    "node_id": "MDQ6VXNlcjcxMzQ2ODk=",
    "avatar_url": "https://avatars3.githubusercontent.com/u/7134689?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/joenelsong",
    "html_url": "https://github.com/joenelsong",
    "followers_url": "https://api.github.com/users/joenelsong/followers",
    "following_url": "https://api.github.com/users/joenelsong/following{/other_user}",
    "gists_url": "https://api.github.com/users/joenelsong/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/joenelsong/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/joenelsong/subscriptions",
    "organizations_url": "https://api.github.com/users/joenelsong/orgs",
    "repos_url": "https://api.github.com/users/joenelsong/repos",
    "events_url": "https://api.github.com/users/joenelsong/events{/privacy}",
    "received_events_url": "https://api.github.com/users/joenelsong/received_events",
    "type": "User",
    "site_admin": false
  }
]

let myName = "danimal-johnson";
let myData = me; // userLookup (myName);
// let myFollowers = getFollowerSummaries(myData.followers_url);  // Merge this with the next line
let myFollowerNames = myFollowers.map( follower => follower.login );

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/



/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

const cardLocation = document.querySelector(".cards");

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


//////////// Put the actual API call into this array. ////////////////
const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return
          the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

const createCard = function (person) {

  console.log ("Making a card");
  // Create the card fields
  const newCard       = document.createElement("div");  // L1
  const newImage      = document.createElement("img");    // L2
  const newCardInfo   = document.createElement("div");    // L2
  const newName       = document.createElement("h3");       // L3
  const newUserName   = document.createElement("p");        // L3
  const newLocation   = document.createElement("p");        // L3
  const newProfile    = document.createElement("p");        // L3
  const newGHAddr     = document.createElement("a");          // L4
  const newFlwrCount  = document.createElement("p");        // L3
  const newFlwngCount = document.createElement("p");        // L3
  const newBio        = document.createElement("p");        // L3

  // Add class names to the fields
  newCard.classList.add("card");
  newCardInfo.classList.add("card-info");
  newName.classList.add("name");
  newUserName.classList.add("username");
      
  // Add structure to the object (Follow the levels above)
  newCard.appendChild(newImage);
  newCard.appendChild(newCardInfo);

  newCardInfo.appendChild(newName);
  newCardInfo.appendChild(newUserName);
  newCardInfo.appendChild(newLocation);
  newCardInfo.appendChild(newProfile);
  newCardInfo.appendChild(newFlwrCount);
  newCardInfo.appendChild(newFlwngCount);
  newCardInfo.appendChild(newBio);

  newProfile.appendChild(newGHAddr);

  // Populate all the values
  newImage.src              = person.avatar_url;
  newName.textContent       = person.name;
  newUserName.textContent   = person.login;
  newLocation.textContent   = `Location: ${person.location}`;
  // newProfile.textContent    = "Profile: ";
  let userUrl               = `https://github.com/${person.login}/`;
  newGHAddr.textContent     = userUrl;
  newGHAddr.href            = userUrl;
  newFlwrCount.textContent  = `Followers: ${person.followers}`;
  newFlwngCount.textContent = `Following: ${person.following}`;
  newBio.textContent        = `Bio: ${person.bio}`;

  console.log("Got a guy named " + person.name);

  return newCard;
}
/*

  <img src={image url of user} />
  <div class="card-info">
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
  </div>

*/

// Add Me
let myCard = createCard (me);
cardLocation.appendChild(myCard);

// Add my real followers
let fCard = createCard (myFollowers[0]);
cardLocation.appendChild(fCard);

// Add some fake followers to pad the mix


// List of LS Instructors Github username's: 
let lambdaInstructors =  
  ["tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"]

lambdaInstructors.forEach( dude => console.log(`I know ${dude}`));

