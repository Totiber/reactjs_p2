import React, { Component } from 'react';
import './App.css';
import tareas from './ejemplos/tareas.json';
import Tareas from './components/Tareas';


class App extends Component {

  state = {

    tareas: tareas

  }

  
  render(){




//  Aqui instanceamos el COMPONENTE Tareas en forma de etiqueta. Le pasamos una propiedad llamada datos. Que en react.js funciona como PARAMETRO de un componente.
//  datos reoje los datos del estado. El flujo es el siguiente:

//      tareas.json -----> state -----> Componente instanseado recoje del estado    -----> Componente real
//                                      los datos mediante una PROPIEDAD  
    return <div>

      <Tareas datos = {this.state.tareas} />

    </div>
  }
}
export default App;
