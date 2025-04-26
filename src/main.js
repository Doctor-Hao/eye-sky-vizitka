import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
// Vuetify
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'


const vuetify = createVuetify({
    components,
    directives,
    // icons: {
    //     defaultSet: 'mdi', // Используем Material Design Icons
    // },
    theme: {
        defaultTheme: 'customTheme',
        themes: {
            customTheme: {
                dark: true,
                colors: {
                    background: '#2c2d34',
                }
            }
        }
    }
})

createApp(App).use(router).use(vuetify).mount('#app')
