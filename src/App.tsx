import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Text, useStyles } from 'bold-ui'
import './App.css';
import logo from './resources/happyd20.svg';
import {createStyles} from './styles' ;

function App() {
  const { classes } = useStyles(createStyles);

  return (
    <div className={classes.App}>
      <header className={classes.AppHeader}> 
        
        <div className="App-logo">
          <a href=".">
            <img src={logo} alt="A flat style d20 with a smile face"/>
            <h1>CharGenerator</h1>
          </a>
        </div>
        <div className="Github">
        <a href="https://github.com/laiseing/character-generator" target="blank">Github</a>
        </div>


      </header>
      <body className={classes.AppBody}>
        <h2 className="Main-text">
            Want to create an awesome character?<br/>Well, you can certainly try.
        </h2>
        <Button kind='primary' size='large'>    
          <Text color='inherit'>Roll</Text>
        </Button>
      </body>   
    </div>
  );
}

export default App;


