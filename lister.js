import games from "https://cdn.jsdelivr.net/gh/therealpyppy/schoolgamesite@latest/games.js"
let sortedKeys = Object.keys(games).sort()
game = {}
for (let i = 0; i<sortedKeys.length; i++){
	game[sortedKeys[i]] = games[sortedKeys[i]]
}

const body = document.getElementById("gameList")

for(let i = 0; i<Object.keys(games).length; i++){
	let p = document.createElement("p")
	p.innerHTML = `<a href="games/${games[game[i]]}">${game[i]}</a>`
	p.classList.add("gameList")
	body.appendChild(p)
}
