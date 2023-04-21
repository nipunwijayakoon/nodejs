console.log("Before");
getUser(1, getRepositories);
//console.log(user);
console.log("After");

//call back

function getRepositories(user) {
  getRepositories(user.gitHubUsername, getCommits);
}

function getCommits(repos) {
  getCommits(repo, displayCommits);
}

function displayCommits(commits) {
  console.log(commits);
}

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
