import { Button, Text, useStyles, ThemeProvider, Grid, Cell } from 'bold-ui'
import './App.css';
import logo from './resources/happyd20.svg';
import icon from './resources/d20icon.svg';
import {createStyles} from './styles' ;
import createTheme from './theme';

function App() {
  const { classes } = useStyles(createStyles);
  return (
    <ThemeProvider theme={createTheme}>


    <div className={classes.App}>
      <header className={classes.AppHeader}> 
         <a className={classes.AppLogo} href=".">
            <img src={logo} alt="A flat style d20 with a smile face"/>
            <h1 className={classes.AppLogoName}>CharGenerator</h1>
          </a>
          <a className={classes.LinkGithub} href="https://github.com/laiseing/character-generator" target="blank">Github</a>
      </header>

      <body className={classes.AppBody}>
        <h2 className={classes.Header2}>Want to create an awesome character?<br/>Well, you can certainly try.</h2>

          <Button kind='primary' size='large' style={{minWidth: '15rem'}}>   
          <img src={icon} style={{paddingRight: '0.5rem'}} alt='D20 with a smiling face'/> 
            <Text>Roll</Text>
          </Button>

    <Grid gap={2} gapVertical={1} wrap style={{display:'flex', maxWidth:'60rem', margin:'3rem auto 3rem auto'}}>
        
        <Cell
          md={4}
          sm={6}
          xs={12}
        >
          <div className={classes.Card} style= {{boxShadow: '0rem 1rem 1.5rem rgba(0, 0, 0, 0.14), 0rem 0.375rem 1.875rem rgba(0, 0, 0, 0.12), 0rem 0.5rem 0.625rem rgba(0, 0, 0, 0.2)',}}>
              <Text className={classes.TextCard}>CLASSES</Text>
            </div>
        </Cell>
        <Cell
          md={4}
          sm={6}
          xs={12}
        >
          <div className={classes.Card} style= {{boxShadow: '0rem 1rem 1.5rem rgba(0, 0, 0, 0.14), 0rem 0.375rem 1.875rem rgba(0, 0, 0, 0.12), 0rem 0.5rem 0.625rem rgba(0, 0, 0, 0.2)',}}>
              <Text className={classes.TextCard}>BACKGROUNDS</Text>
            </div>
        </Cell>
        <Cell
          md={4}
          sm={6}
          xs={12}
        >
          <div className={classes.Card} style= {{boxShadow: '0rem 1rem 1.5rem rgba(0, 0, 0, 0.14), 0rem 0.375rem 1.875rem rgba(0, 0, 0, 0.12), 0rem 0.5rem 0.625rem rgba(0, 0, 0, 0.2)',}}>
              <Text className={classes.TextCard}>FLAWS & SECRETS</Text>
            </div>
        </Cell>
        <Cell
          sm={6}
          xs={12}
        >
          <div className={classes.Card} style= {{boxShadow: '0rem 1rem 1.5rem rgba(0, 0, 0, 0.14), 0rem 0.375rem 1.875rem rgba(0, 0, 0, 0.12), 0rem 0.5rem 0.625rem rgba(0, 0, 0, 0.2)',}}>
              <Text className={classes.TextCard}>RACES</Text>
            </div>
        </Cell>
        <Cell
          sm={6}
          xs={12}
        >
          <div className={classes.Card} style= {{boxShadow: '0rem 1rem 1.5rem rgba(0, 0, 0, 0.14), 0rem 0.375rem 1.875rem rgba(0, 0, 0, 0.12), 0rem 0.5rem 0.625rem rgba(0, 0, 0, 0.2)',}}>
              <Text className={classes.TextCard}>PERSONALITIES</Text>
            </div>
        </Cell>
        </Grid>


<h5 className={classes.Hint}>CLICK OR PRESS SPACEBAR TO ROLL</h5>
      </body>   
    </div>
    </ThemeProvider>
  );
}


export default App;


