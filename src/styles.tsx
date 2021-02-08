import { Theme } from "bold-ui";
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

    AppBody: {
      backgroundImage: 'url(/Backgroundirado.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom',
      backgroundSize: '100%',
      minHeight: '100vh',
      paddingTop: '11rem'
    } as CSSProperties
  })