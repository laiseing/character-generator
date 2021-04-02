import { createTheme, colors, invertColorScale } from 'bold-ui'

const myTheme = createTheme({
pallete: {
    primaryScale: invertColorScale(colors.turquoise),
},
})

export default myTheme
