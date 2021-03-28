import { Theme, useTheme,Button, colors, createTheme, HFlow } from "bold-ui";
import { gray, yellow, turquoise } from "bold-ui/lib/styles/colors";
import { CSSProperties } from "react";

export const createStyles = (theme: Theme) => ({

    App: {
      textAlign: 'center',
      backgroundColor: theme.pallete.gray.c10,
      fontFamily: "'Open Sans', sans-serif" 
    } as CSSProperties,

    AppHeader: {
      backgroundColor: theme.pallete.gray.c10,
      border: '0 0 0 1px solid #24252E',
      boxSizing: 'border-box',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
      position: 'fixed',
      width: '100%',
      padding: '2.5rem',
      height: '7rem',
      '@media (max-width: 800px)': {
        height: '3rem'    
      },
    } as CSSProperties,

    AppLogo: {
      float: 'left',
      display: '-webkit-box',
      textDecorationLine: 'none'
      } as CSSProperties,

    LinkGithub: {
      color: yellow.c80,
      fontWeight: 800,
      letterSpacing: '0.05rem',
      float: 'right',
      margin: 0,
      lineHeight: '2rem'
    } as CSSProperties,

    AppLogoName: {
      marginBlockStart: 0,
      marginBlockEnd: 0,
      letterSpacing: '0.1rem',
      marginLeft: '1rem',
      color: yellow.c80
      } as CSSProperties,

    AppBody: {
      backgroundImage: 'url(/Backgroundirado.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom',
      backgroundSize: '100%',
      minHeight: '100vh',
      paddingTop: '11rem',
      color: gray.c100
    } as CSSProperties,

    MainText: {
      lineHeight: '2.25rem',
    } as CSSProperties,

    TextCard: {
      color: yellow.c80,
      fontWeight: 700,
      letterSpacing: '0.125rem',
      fontSize: '0.875rem',
    } as CSSProperties,

    Card: {
      backgroundColor: gray.c20,
      marginTop: '1rem',
      padding: '1rem',
      minWidth: '18rem',
    } as CSSProperties,

    Hint: {
      color: gray.c50,
      letterSpacing: '0.05rem',
      fontWeight: 400,
      fontSize: '0.875rem',
    },
  })


