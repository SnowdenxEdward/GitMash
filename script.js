const firstInput = document.getElementById('firstInput')
const firstButton = document.getElementById('firstButton')
const devImg = document.getElementById('devImg')
const followers = document.getElementById('followers')
const devName = document.getElementById('devName')
const public_repos = document.getElementById('public_repos')

firstButton.addEventListener('click',()=>{
    const firstvalue = firstInput.value
    fetch(`https://api.github.com/users/${firstvalue}`)
    .then(response =>response.json())
    .then(data=>{
        devName.innerHTML= `Name : ${data.name}`
        devName.style.color = '#007bff';
        followers.innerHTML = `Followers : ${data.followers}`;
        followers.style.color = '#007bff';
        public_repos.innerHTML= `Public_repo : ${data.public_repos}`  
        public_repos.style.color = '#007bff'
        devImg.src = data.avatar_url
    })
})
