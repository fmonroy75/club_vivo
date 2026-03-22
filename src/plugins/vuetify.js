import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export const vuetify = createVuetify({
  components,
  directives,
  theme: {

    defaultTheme: 'light',

    themes: {

      light: {

        colors: {
          primary: '#ff3d00',
          secondary: '#111111',
          background: '#ffffff'
        }

      },

      dark: {

        dark: true,

        colors: {
          primary: '#ff3d00',
          secondary: '#000000',
          background: '#121212'
        }

      }

    }

  }

})
