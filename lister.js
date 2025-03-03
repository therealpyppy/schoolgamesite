import games from "https://cdn.jsdelivr.net/gh/therealpyppy/schoolgamesite/games.js"
let game = Object.keys(games)

const body = document.getElementById("gameList")

for(let i = 0; i<Object.keys(games).length; i++){
	let p = document.createElement("p")
	p.innerHTML = `<a href="games/${games[game[i]]}">${game[i]}</a>`
	p.classList.add("gameList")
	body.appendChild(p)
}
