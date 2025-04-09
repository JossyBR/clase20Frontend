const baseUrl = 'http://localhost:3000/api/v1/';

async function getMovies() {
    
    try {
        const movies = await fetch(`${baseUrl}movies`);
        const result = await movies.json();

        await console.log(result.data);

        await showMovies(result.data)
    } catch (error) {
        console.error("Error al obtener las peliculas:", error.message)
    }
}

getMovies();

function showMovies(movies) {
    const container = document.getElementById(("movies"));

    //Limpiar el contenedor antes de agregar nuevas peliculas
    container.innerHTML = "";

    movies.forEach((movie) => {
        const movieElement = document.createElement("div");

        const title = movie.title
        const date = movie.release_date
        

        //Agregar una clase al elemento
        movieElement.classList.add("movie");

        movieElement.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" >

            <h3>${title} </h3>
            <p>Fecha de lanzamiento: ${date}</p>
        `;

        movieElement.addEventListener("click", () => {
            console.log("id main", movie.id)
            //Redirige el detail.html pasando el ID de la pelicula
            console.log(`detail.html?moviedId=${movie.id}`)
            window.location.href = `detail.html?movieId=${movie.id}`;
        })

        container.appendChild(movieElement);

    });

}