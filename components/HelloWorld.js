// Define a new component called hello-world
Vue.component('hello-world', {

    template: `
    <header>
        <h1> {{ title }} </h1>
        <h3> {{ message }} </h3>
    </header>
    
             `,
    data() {
        return {
            title: 'Hola Mundo desde componente Vue.js',
            message: 'Bienvenido al Curso de Vue'
        }
    }
  
})