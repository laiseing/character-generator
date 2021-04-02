import { createTheme, colors, invertColorScale } from 'bold-ui'
import { turquoise } from 'bold-ui/lib/styles/colors'

const myTheme = createTheme({
pallete: {
    primaryScale: invertColorScale(colors.turquoise),
},
})

export default myTheme
