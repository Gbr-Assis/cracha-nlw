//para mudar as informações basta alterar esse objeto
const linksSocialMedia = {
  github: 'Gbr-Assis',
  linkedin: 'in/gabriel-assisb/',
  facebook: 'gabriel.assisbarbosa',
  instagram: 'g.assiiis',
  twitter: 'gabirotou'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGithubProfileInfos()

// variaveis: let ou const (precisa colocar antes)
// objeto: junção de uma classe de informações
//ARROW FUNCTIONS forma de contrair as funcoes -  argumento => {} (argumento, argumento2) => {}
//function nomedafuncao(argumentos){}
