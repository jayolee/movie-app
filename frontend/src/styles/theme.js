import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: "#008edd"
        },
        secondary: {
            main: "#c2dd6a"
        }
    },
    typography: {
        h1: {
            fontWeight: '600',
            fontSize: '2.5rem',
            letterSpacing: '1px',
            marginBottom: '1.5rem',
            textTransform: 'capitalize'
        },
        subtitle1: {
            fontSize: '1rem'
        },
        h2: {
            fontWeight: '600',
            textTransform: 'capitalize',
            marginBottom: '1rem',
        },
    }
})