import React, { Component } from 'react';
import './App.css';
import tareas from './ejemplos/tareas.json';
import Tareas from './components/Tareas';
import TareasForm from './components/TareasForm';


class App extends Component {


// state RECIBE los datos de JSON

  state = {

    tareas: tareas

  }

  
  render(){


// --------------------------------------------------- ENVIA LOS DATOS AL COMPONENTE Y CONTRUYE EL COMPONENTE ------------------------------------------


//  Aqui instanceamos el COMPONENTE Tareas en forma de etiqueta. Le pasamos una propiedad llamada datos. Que en react.js funciona como PARAMETRO de un componente.
//  "datos" recoje los datos del estado. El flujo es el siguiente:

//      tareas.json -----> state -----> Componente instanseado recoje del estado,    -----> Componente real
//                                      los datos mediante una PROPIEDAD  
    return <div>

      <TareasForm/>
      <Tareas datos = {this.state.tareas} />

    </div>
  }
}
// ----------------------------------------------------------------------------------------------------------------------------------------
export default App;
