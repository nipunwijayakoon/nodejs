//asychronous

console.log("Before");
getUser(1, (user) => {
  console.log("User", user);
  //get the repositories
  getRepositories(user.gitHubUsername, (repos) => {
    console.log("repos", repos);
    //Call basck hell
  });
});
//console.log(user);
console.log("After");

//call back
//promises
//Async/await

// //sychronous

// console.log("Before");
// const user = getUser(1);
// const repos = getRepositories(user.gitHubUsername);
// console.log("After");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("reading use from a database");
    callback({ id: id, gitHubUsername: "nipun" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("calling API...");
    callback(["repo1", "repo2", "repo3"]);
  });
}
