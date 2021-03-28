import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Text, Paper, HFlow, colors, useStyles, ThemeProvider, createTheme, useTheme, invertColorScale} from 'bold-ui'
import './App.css';
import logo from './resources/happyd20.svg';
import icon from './resources/d20icon.svg';
import {createStyles} from './styles' ;
import { styles } from 'bold-ui/lib/components/Dropdown/DropdownMenu';
import { defaultConfig } from 'bold-ui/lib/styles/theme/createPallete';

const mainTheme = createTheme({
  pallete: {
    primaryScale: colors.turquoise,

  },
})

const darkTheme = createTheme({
  pallete: {
    primaryScale: invertColorScale(mainTheme.pallete.primary)

  },
})

function App() {
  const { classes } = useStyles(createStyles);
  return (


    <div className={classes.App}>
      <header className={classes.AppHeader}> 
         <a className={classes.AppLogo} href=".">
            <img src={logo} alt="A flat style d20 with a smile face"/>
            <h1 className={classes.AppLogoName}>CharGenerator</h1>
          </a>
          <a className={classes.LinkGithub} href="https://github.com/laiseing/character-generator" target="blank">Github</a>
      </header>

      <body className={classes.AppBody}>
        <h2 className={classes.MainText}>
            Want to create an awesome character?<br/>Well, you can certainly try.
        </h2>
        <ThemeProvider theme={darkTheme}>
          <Button kind='primary' size='large' style={{minWidth: '15rem'}}>   
          <img src={icon} style={{paddingRight: '0.5rem'}}/> 
            <Text color='inherit'>Roll</Text>
          </Button>
        </ThemeProvider>


        <HFlow
  hSpacing={1}
  justifyContent={'center'}
  style={{paddingTop: '5rem'}}>
        
        <div className={classes.Card} style= {{boxShadow: '0rem 1rem 1.5rem rgba(0, 0, 0, 0.14), 0rem 0.375rem 1.875rem rgba(0, 0, 0, 0.12), 0rem 0.5rem 0.625rem rgba(0, 0, 0, 0.2)',}}>
          <Text className={classes.TextCard}>CLASSES</Text>
        </div>

        <div className={classes.Card} style= {{boxShadow: '0rem 1rem 1.5rem rgba(0, 0, 0, 0.14), 0rem 0.375rem 1.875rem rgba(0, 0, 0, 0.12), 0rem 0.5rem 0.625rem rgba(0, 0, 0, 0.2)',}}>
          <Text className={classes.TextCard}>BACKGROUNDS</Text>
        </div>

        <div className={classes.Card} style= {{boxShadow: '0rem 1rem 1.5rem rgba(0, 0, 0, 0.14), 0rem 0.375rem 1.875rem rgba(0, 0, 0, 0.12), 0rem 0.5rem 0.625rem rgba(0, 0, 0, 0.2)',}}>
          <Text className={classes.TextCard}>FLAWS & SECRETS</Text>
        </div>

</HFlow>

<HFlow
  hSpacing={1}
  justifyContent={'center'}
  style={{paddingBottom: '2rem'}}>
        
        <div className={classes.Card} style= {{boxShadow: '0rem 1rem 1.5rem rgba(0, 0, 0, 0.14), 0rem 0.375rem 1.875rem rgba(0, 0, 0, 0.12), 0rem 0.5rem 0.625rem rgba(0, 0, 0, 0.2)',}}>
          <Text className={classes.TextCard}>RACES</Text>
        </div>

        <div className={classes.Card} style= {{boxShadow: '0rem 1rem 1.5rem rgba(0, 0, 0, 0.14), 0rem 0.375rem 1.875rem rgba(0, 0, 0, 0.12), 0rem 0.5rem 0.625rem rgba(0, 0, 0, 0.2)',}}>
          <Text className={classes.TextCard}>PERSONALITIES</Text>
        </div>

</HFlow>
<h5 className={classes.Hint}>CLICK OR PRESS SPACEBAR TO ROLL</h5>
      </body>   
    </div>
  );
}

export default App;


