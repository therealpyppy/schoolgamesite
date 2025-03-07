import games from "https://cdn.jsdelivr.net/gh/therealpyppy/schoolgamesite@latest/games.js"
let sortedKeys = Object.keys(games).sort()
let game = {}
for (let i = 0; i<sortedKeys.length; i++){
	game[sortedKeys[i]] = games[sortedKeys[i]]
}

const body = document.getElementById("gameList")

for(let i = 0; i<Object.keys(games).length; i++){
	let p = document.createElement("p")
	let gameHtml = game[sortedKeys[i]]
	let gameName = sortedKeys[i]
	p.innerHTML = `<a href="games/${gameHtml}">${gameName}</a>`
	p.classList.add("gameList")
	body.appendChild(p)
}
