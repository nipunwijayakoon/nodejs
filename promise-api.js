console.log("Before");
// getUser(1, getRepositories);
// //console.log(user);
console.log("After");

// getUser(1)
//   .then((user) => getRepositories(user.gitHubUsername))
//   .then((repos) => getCommits(repos[0]))
//   .then((commits) => console.log("commits", commits))
//   .catch((err) => console.log("Error"));

//Async and awit aprroach
async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (err) {
    console.log("Error", err.message);
  }
}

displayCommits();

function getUser(id) {
  return new Promise((resolve, reject) => {
    //kick off some async work
    setTimeout(() => {
      console.log("reading use from a database");
      resolve({ id: id, gitHubUsername: "nipun" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    //kick off some async work
    setTimeout(() => {
      console.log("calling API...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    //kick off some async work
    setTimeout(() => {
      console.log("calling  GithubAPI...");
      resolve(["commit"]);
    }, 2000);
  });
}
