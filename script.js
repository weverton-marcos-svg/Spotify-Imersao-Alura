const searchInput = document.getElementById('search-input')
const resultsArtist = document.getElementById('result-artist')
const resultPlaylist = document.getElementById('result-playlists')
 
function requestApi(searchTerm){
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result){
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImg = document.getElementById('artist-img');

    console.log(result)
    result.forEach(element => {
        
        artistName.innerHTML = element.name;
        artistImg.src = element.urlImg;
    });

    if(result.length == []){
        artistName.innerHTML = ''
        artistImg.src = ''

    }
    
    resultsArtist.classList.remove('hidden');
}

document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === ''){
        /* Original */
        // resultPlaylist.classList.add('hidden');
        // resultsArtist.classList.remove('hidden');   

        /* Volta pra tela inical quando apaga a pesquisa */
        resultsArtist.classList.add('hidden');
        resultPlaylist.classList.remove('hidden');
        return;
    }

    requestApi(searchTerm)
})