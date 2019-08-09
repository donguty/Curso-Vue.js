let DirectivaIf = {
    template: `
        <div>
            <h1 v-text="title"></h1>
            <p v-if = "mostrar" v-html = "message"></p>
            <h1>Uso de v-if / v-else</h1>
            <p v-if = "user.permission">El usuario tiene permiso para visualizar esto</p>
            <p v-else>El usuario no tiene permiso para visualizar esto</p>

            <h1>Uso de v-if / v-else-if / v-else</h1>
            <p v-if = "user.permission && user.vip">El usuario tiene permiso para visualizar y es VIP</p>
            <p v-else-if = "user.permission">El usuario tiene permiso para visualizar esto</p>
            <p v-else-if = "user.vip">El usuario es VIP</p>
            <p v-else>El usuario NO tiene permiso, ni es VIP</p>
        </div>
        `,
    data() {
        return {
            title: 'Directiva v-if',
            message: '<b>Texto de prueba v-if</b>',
            mostrar: true,
            user: {
                permission: true,
                vip: true
                }
            }
    }
    
}