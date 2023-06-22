import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6464',
    },
    secondary: {
      main: '#00ABCC',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },

  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'md',
      },
      styleOverrides: {
        maxWidthSm: {
          maxWidth: '680px',

          '@media (min-width: 680px)': {
            maxWidth: '680px',
          },
        },
        maxWidthMd: {
          maxWidth: '900px',

          '@media (min-width: 900px)': {
            maxWidth: '860px',
          },
        },
      },
    },

    // MuiTypography: {
    //   styleOverrides:{
    //     root: {
    //       color:{

    //       }
    //     }
    //   }
    // }
  },
})
