import React, {useState} from 'react';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

export function strikeProcess(input) {
  const newStrikes = input.strikes+1;
    if(newStrikes===3) {
      return {
        balls : 0,
        strikes: 0,
      }
    } else {
      return {
        ...input,
        strikes: newStrikes,
      }
    }
}

export function ballProcess(input) {
  const newBalls = input.balls+1;
    if(newBalls===4) {
      return {
        balls : 0,
        strikes: 0,
      }
    } else {
      return {
        ...input,
        balls: newBalls,
      }
    }
}

export function foulProcess(input) {
  const newStrikes = input.strikes+1;
    if(newStrikes>2) {
      return input;
    } else {
      return {
        ...input,
        strikes: newStrikes,
      }
    }
}

function App() {
  const [state,setState]=useState({
    balls : 0,
    strikes: 0,
  })

  function strike(input) {
    setState(strikeProcess(input)); 
  }

  function ball(input) {
    setState(ballProcess(input)); 
  }

  function foul(input) {
    setState(foulProcess(input)); 
  }

  function hit() {
    setState({
      balls : 0,
      strikes: 0,
    })    
  }

  return (
    <div className="App">
      <Display balls={state.balls} strikes={state.strikes} />
      <Dashboard 
        strike={()=>strike(state)}
        ball={()=>ball(state)}
        foul={()=>foul(state)}
        hit={hit}
      />
    </div>
  );
}

export default App;
