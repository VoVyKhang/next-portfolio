import { Roboto } from 'next/font/google'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { red } from '@mui/material/colors'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

// Create a theme instance.
export let theme = createTheme({
  palette: {
    primary: {
      main: '#FF6464',
    },
    secondary: {
      light: '#EDF7FA',
      main: '#00ABCC',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: 'Heebo, sans-serif',
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

    MuiButton: {
      variants: [
        {
          props: {
            variant: 'contained',
            color: 'primary',
          },
          style: {
            color: 'white',
          },
        },
      ],
    },
  },
})

theme = responsiveFontSizes(theme)

// theme.typography.h3 = {
//   fontSize: '2rem',
//   [theme.breakpoints.up('md')]: {
//     fontSize: '3rem',
//   },
// }
