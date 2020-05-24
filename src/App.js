import React from 'react'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import Home from './components/Home'

const Theme = createMuiTheme({
    typography: {
        fontFamily: [
            '"Helvetica Neue"',
            'Helvetica',
            'Arial',
            'sans-serif',
        ].join(','),
    },
    palette: {
        primary: {
            main: '#7fcd91',
        },
        secondary: {
            main: '#4d4646',
            light: '#5b5656',
        },
        default: {
            main: '#f5eaea',
        },
    },
})

const App = () => {
    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline />
            <Home />
        </ThemeProvider>
    )
}

export default App
