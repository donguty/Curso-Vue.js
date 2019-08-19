let DirectivaModel = {
    template: `
        <div>
            <h1 v-text="title"></h1>
            <p v-html = "message"></p>
            <input type="text" v-model="inputText">

            <h2>Tipo Checkbox</h2>
            <label>
                <input type="checkbox" v-model="checked">            
                Activado
            </label>

            <h2>Películas</h2>
            <label v-for="(movie,key) in movies" :key=""key>
                <input :value="movie" type="checkbox" v-model="favoritesMovies">         
                {{ movie }}
            </label>
        </div>
        `,
    data() {
        return {
            title: 'Directiva v-model',
            message: '<b>Texto de prueba v-model</b>',
            inputText: 'Data desde el input',
            checked: false,
            favoritesMovies: [],
            movies: ['Buscando a Nemo', 'Titanic', 'Superman'],
            
        }
    }    
}