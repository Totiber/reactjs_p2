import React, { Component } from 'react';
import './App.css';

// Componentes
import tareas from './ejemplos/tareas.json';
import Tareas2 from './components/Tareas2';



// En App2.js, Tarea2.js, Tareas2.js veremos como separamos este componente

class App2 extends Component {

  state = {

    tareas: tareas

}

  
  render(){


    return <div>

      <Tareas2 datos2 = {this.state.tareas} />

    </div>
  }
}
export default App2;
