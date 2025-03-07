import games from "https://cdn.jsdelivr.net/gh/therealpyppy/schoolgamesite@latest/games.js"

const searchInput = document.getElementById('search');
const suggestionsBox = document.getElementById('suggestions');

const body = document.querySelector('body');
const gameCount = document.createElement('p');
gameCount.textContent = "Game Count: "+Object.keys(games).length
body.appendChild(gameCount)

searchInput.addEventListener('input', () => {
	const query = searchInput.value.toLowerCase();
	const matches = Object.keys(games).filter(gameName => gameName.toLowerCase().includes(query));
	suggestionsBox.innerHTML = "";
	if (matches.length > 0) {
		suggestionsBox.style.display = 'block';
		matches.forEach(match => {
			const div = document.createElement('div');
			div.textContent = match;
			div.addEventListener('click', () => {
				window.location.href = "games/"+games[match];
			});
			suggestionsBox.appendChild(div);
		});
	} else {
		suggestionsBox.style.display = 'none';
	}
});
