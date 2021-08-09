import { createTheme } from '@material-ui/core/styles'
import { primaryColor, secondaryColor, blackColor } from './colors'

const theme = createTheme ({

    palette:{
        primary:{
            main: primaryColor,
            contrastText: blackColor
        },
        text:{
            primary: blackColor
        }
    }
})

export default theme