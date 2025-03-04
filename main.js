//conexion  con HTML (selecciona relemenytos)

const songForm = document.getElementById('song_form');
const playlist = document.getElementById('play_list');

//funcion para agregar una cancion ala lista

function addsong(songName, artistName, songUrl) {
    const listSong = document.createElement('li');
    listSong.innerHTML = `
    <strong>${songName}</strong>
    - ${artistName}
    <a href="${songUrl}" target="_blank" >Reproducir</a>
    <button class="delete-btn">Eliminar </button>

    `;
//agregar al html
    playlist.appendChild(listSong);


}    

//manejo de envios de formulario (eventos)

songForm.addEventListener('submit',(event) =>{
    event.preventDefault();

    //Obteber datos del formulario
    const songName = document.getElementById("song_name").value ;
    const artistName =document.getElementById("artist_name"). value;
    const songUrl =document.getElementById("url_song"). value;
    addsong(songName,artistName,songUrl);

    songForm.reset()
})