import React, { CSSProperties } from 'react'
import ReactDOM from 'react-dom'
import { Button, Icon, Text, Theme, useStyles } from 'bold-ui'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        
        <div className="App-logo">
          <a href=".">
            <img src="/src/resources/happyd20.svg" alt="A flat style d20 with a smile face"/>
            <h1>CharGenerator</h1>
          </a>
        </div>
        <div className="Github">
        <a href="https://github.com/laiseing/character-generator" target="blank">Github</a>
        </div>


      </header>
      <body className="App-body">
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

const createStyles = (theme: Theme) => ({
  container: {
    textAlign: 'center',

    '& > p': {
      fontSize: '1rem',
      lineHeight: 2,
    },
  } as CSSProperties,

  first: {
    color: theme.pallete.status.danger.main,
    '&:hover': {
      background: theme.pallete.surface.background,
    },
  } as CSSProperties,

  second: {
    background: theme.pallete.surface.background,
  } as CSSProperties,
})


