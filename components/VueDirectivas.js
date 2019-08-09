Vue.component('vue-directivas',{
    template:`
        <div>
            <h1 v-text="title"></h1>
            <p v-text = "text"></p>
            <a v-bind:href="link.href" v-text="link.text" :title="link.title" target="_blank"></a>
            <!-- <directivas-html></directivas-html> -->
            <DirectivasHtml/>
        </div>
    
    `,
    data(){
        return {
            title: 'Directivas de Vue',
            text: 'Texto de prueba v-text',
            link: {
                text: 'Vue.js Home',
                href: 'https://vuejs.org',
                title: 'Documentación de Vue'
            }
        }
    },
    components: {
        // 'directivas-html' : DirectivasHtml
        DirectivasHtml
    }
}) 

