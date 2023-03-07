const loadPlayers = (search = '') => {
    const url = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPlayers(data.player))
        .catch(error => console.error(error))
}

const displayPlayers = players => {
    const playersContainer = document.querySelector('[data-players-container]');
    playersContainer.innerHTML = '';
    players.forEach(player => {
        console.log(player);
        playersContainer.innerHTML += `
            
            <a class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="${player?.strCutout}" alt="">
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${player?.strPlayer}</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" title="${player.strDescriptionEN}">${player?.strDescriptionEN?.slice(0, 120)}</p>
                </div>
            </a>
        `
    });
}


const searchPlayer = () => {
    const searchPlayerField = document.querySelector('[data-search-field]');
    const fieldValue = searchPlayerField.value;
    loadPlayers(fieldValue)
    searchPlayerField.value = "";
    console.log(searchPlayerField);
}
loadPlayers()