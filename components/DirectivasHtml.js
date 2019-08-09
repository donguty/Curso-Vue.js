let DirectivasHtml = {
    template: `
        <div>
            <h1 v-text="title"></h1>
            <p v-html = "message"></p>
        </div>
        `,
    data() {
        return {
            title: 'Directiva v-html',
            message: '<b>Texto de prueba v-html</b>',
            }
    }
}