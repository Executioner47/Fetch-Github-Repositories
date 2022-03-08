// Main Variables

let theInput = document.querySelector(".get-repos input")
let theButton = document.querySelector(".button")
let reposData = document.querySelector(".show-data")


theButton.onclick = function(){
    getRepos();
}

//Get Repos Function
function getRepos(){
    if(theInput.value == ""){ //if no name is entered

        reposData.innerHTML = "<span>Please Enter Username</span>"

    }else{

        fetch(`https://api.github.com/users/${theInput.value}/repos`)

        .then((response) =>  response.json())

        .then((repos) => { // repos is that data of the user

            //Empty the container
            reposData.innerHTML = ""

            //looping on the data
            repos.forEach((e) =>{
                //create the main div
                let mainDiv = document.createElement("div")

                //mainDiv class
                mainDiv.className = "repo-box"

                // create repo name text
                let repoName = document.createTextNode(e.name)

                // append text to the div
                mainDiv.appendChild(repoName)

                //create Repo url
                let theUrl = document.createElement("a")

                //create Repo url text
                let theUrlText = document.createTextNode("Visit")

                //append repoText to repoUrl
                theUrl.appendChild(theUrlText)

                //add the href 
                theUrl.href = `https://github.com/${theInput.value}/${e.name}`

                //set attribute blank
                theUrl.setAttribute('target','_blank')

                //append theUrl to the main div
                mainDiv.append(theUrl)

                //create starsCount span
                let starsCount = document.createElement("span")

                //create stars count text
                let starsCountText = document.createTextNode(`Stars ${e.stargazers_count}`)

                //append starText
                starsCount.appendChild(starsCountText)

                //append starsCount to the main div
                mainDiv.appendChild(starsCount)

                // append the main div to container 
                reposData.appendChild(mainDiv)
            })
        });
    }
}

//Executioner47