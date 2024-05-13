const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// Async Function for use to get
async function getUser(username){
    try {
        const {data} = await axios(APIURL + username)
        createUserCard(data)
        getRepos(username)
    } catch (error) {
        if(error.response.status == 404){
            createErrorCard('No Profile Found with this username')
        }
    }
}
async function getRepos(username){
    try {
        const {data} = await axios(APIURL + username + '/repos?sort=created')
        addReposToCard(data)
    } catch (error) {
        createErrorCard('Problem fetching repos')
    }
}
function createUserCard(user){
    const userID = user.name || user.login
    const userBio = user.bio ? `<p>${user.bio}</p>` : ''
    const cardHTML = `
    <div class = "card">
    <div class = "user-info">
    <h2>${userID}></h2>
    ${userBio}
    <ul>
    <li>${user.followers} <strong> Followers </strong> </li>
    <li>${user.following} <strong> Following </strong> </li>
    <li>${user.public_repos} <strong> Repos </strong> </li>
    </ul>
    <div id = "repos"> </div>
    </div>
    </div>
    `
    main.innerHTML = cardHTML
}
function addReposToCard(repos){
     const reposE1 = document.getElementById('repos')
     repos
        .slice(0,5)
        .forEach(repos => {
            const repoE1 = document.getElementById('a')
            repoE1 = classList.add('repo')
            repoE1.href = repo.html_url
            repoE1.target = '_blank'
            repoE1.innerText = repo.name
            reposE1.appendChild(repoE1)
        })
}
form.addEventListener('submit', (e)=> {
    e.preventDefault()
    const user = search.value
    if (user){
        getUser(user)
        search.value = ''
    }
})
