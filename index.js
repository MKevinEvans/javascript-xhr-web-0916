// function getRepositories() {
//   const req = new XMLHttpRequest()
//   req.open("GET", 'https://api.github.com/users/octocat/repos')
//   req.send()
// }

function showRepositories(event, data) {
  var repos = JSON.parse(this.responseText)
  console.log(repos)
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + ' - <a href="#" data-repo="' + r.name + '" data-food="ice cream" onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>`
  document.getElementById("repositories").innerHTML = repoList
}
 
function getRepositories() {
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories);
  req.open("GET", 'https://api.github.com/users/octocat/repos')
  req.send()
}

function getCommits(el) {
	debugger
  const name = el.dataset.repo
  const req = new XMLHttpRequest()
  req.addEventListener("load", showCommits);
  req.open("GET", 'https://api.github.com/repos/octocat/'+name+'/commits')
  req.send()
}

function showCommits() {
  const commits = JSON.parse(this.responseText)
  debugger
  const commitsList = `<ul>${commits.map(commit => '<li><strong>' + commit.committer.login + '</strong> - ' + commit.commit.message + '</li>').join('')}</ul>`
  document.getElementById("commits").innerHTML = commitsList
}