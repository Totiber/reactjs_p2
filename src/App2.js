import React, { Component } from 'react';
import './App.css';
import tareas from './ejemplos/tareas.json';
import Tareas2 from './components/Tareas';



// En App2.js, Tarea2.js, Tareas2.js veremos como separamos este componente

class App2 extends Component {

  state = {

    tareas: tareas

}

  
  render(){


    return <div>

      <Tareas2 datos = {this.state.tareas} />

    </div>
  }
}
export default App2;
