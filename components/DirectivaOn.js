let DirectivaOn = {
    template: `
        <header>            
            <h1 v-text="title"></h1>
            <p v-html = "message"></p>
            <!-- <button v-on:click = "decirHola">Dame un click</button> -->
            <button @click.stop.prevent = "comprarEntrada">Comprar entrada</button>
            <div>
                
            </div>
            Disponibles: <span v-text="entradas"></span>
        </header>
        `,
    data() {
        return {
            title: 'Directiva v-on',
            message: '<b>Texto de prueba v-on</b>',
            welcome_text: 'Bienvenido desde la data',
            pelicula: 'Stars War',
            entradas: 5
            }
    },
    methods: {
        decirHola() {            
            alert(this.welcome_text);
        },
        comprarEntrada() {
            if (this.entradas>0) {
                this.entradas--
                return alert(`Entrada para ${this.pelicula} comprada`)
            }
            return alert('No hay entradas')
        }
    }
}