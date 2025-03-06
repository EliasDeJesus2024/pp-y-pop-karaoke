//conexion  con HTML (selecciona relemenytos)

const songForm = document.getElementById('song_form');
const playlist = document.getElementById('play_list');

//funcion para agregar una cancion ala lista

function addsong(songName, artistName, songUrl) {
    const listSong = document.createElement('li');
    listSong.classList.add(
        'flex','justify-between','items-center','p-4','bg-white','shamd','rounded-lg','mb-4','border','border-gray-300','hover:bg-gray-100' 
    ,);


    listSong.innerHTML = `
    <span class="font-semibold text-lg text-gray-800">
    <strong>${songName}</strong>
    - ${artistName}
    <div class="flex space-x-4">
    <a href="${songUrl}" target="_blank" 
    class="text-blue-500 hover:text-blue-700 transition-colors duration-300 
    px-3 py-2 rounded-lg border border-blue-500 hover:bg-blue-500 hover:text-white">
    Reproducir</a>

    <button  class="delete-btn text-red-500 hover:text-red-700 transition-colors duration-300 
                px-3 py-2 rounded-lg border border-red-500 hover:bg-red-500 hover:text-white">
                Eliminar 
                </button>  
            
    
                </div>
    
    `;
//agregar al html
    playlist.appendChild(listSong);

    // Agregar evento para eliminar la canción
    const deleteButton = listSong.querySelector('.delete-btn');
    deleteButton.addEventListener('click', () => {
        listSong.remove();  // Elimina la canción de la lista
    });


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