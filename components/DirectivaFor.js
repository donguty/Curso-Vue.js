let DirectivaFor = {
    template: `
        <div>
            <h1 v-text="title"></h1>
            <p v-html = "message"></p>
            <h3>Lista de un array</h3>
            <ol>
                <li v-for = "color in list" v-text = "color"></li>
            </ol>
            <h3>Lista de un objeto</h3>
            <ul>
                <li v-for = "(item,key,index) in object_list" :key = "index">
                    {{key}}: {{item}}
                </li>
            </ul>
            <h3>Lista de un array de objetos</h3>
            <ul>
                <li v-for = "(item,index) in other_list" :key = "index">
                    Nombre: {{item.name}}<br/>
                    Apellido: {{item.lastName}}<br/>
                    Nick: {{item.nick}}<br/>
                </li>
            </ul>              
        </div>
        `,
    data() {
        return {
            title: 'Directiva v-for',
            message: '<b>Texto de prueba v-for</b>',
            list: ['Rojo', 'Verde', 'Azúl', 'Naranja'],
            object_list: {
                name: 'Carlos',
                lastName: 'Gutiérrez',
                nick: 'Guty'
            },
            other_list: [
                {
                    name: 'Carlos',
                    lastName: 'Gutiérrez',
                    nick: 'Guty'
                },
                {
                    name: 'Mar',
                    lastName: 'Saldaña',
                    nick: 'Marsa'
                },
                {
                    name: 'Pedro',
                    lastName: 'Martinez',
                    nick: 'Pedrín'
                }
            ]      
        }    
    }
}     