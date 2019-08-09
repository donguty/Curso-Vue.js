let DirectivaShow = {
    template: `
        <div>
            <h1 v-text="title"></h1>
            <p v-show = "mostrar" v-html = "message"></p>
            <p v-show = "user.permission">El usuario tiene permiso para visualizar esto</p>
            <p v-show = "!user.permission">El usuario no tiene permiso para visualizar esto</p>
        </div>
        `,
    data() {
        return {
            title: 'Directiva v-show',
            message: '<b>Texto de prueba v-show</b>',
            mostrar: true,
            user: {
                permission: false
                }
            }
    }
    
}