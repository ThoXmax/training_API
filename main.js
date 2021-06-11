let getContainer = document.getElementById("showLyricsPosition");


function showLyrics() {
    let artistName = document.getElementById("artistName").value;
    let song = document.getElementById("song").value;
    let url = "https://api.lyrics.ovh/v1/" + artistName + "/" + song;


    console.log("'" + url + "'");

    axios.get(url)
    .then(function(response) {
        getContainer.innerHTML = response.data.lyrics;
        console.log(response.data);
    })
    .catch(function(error) {
        console.log(error);
    });

}


