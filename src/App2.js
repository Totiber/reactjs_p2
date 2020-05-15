import React, { Component } from 'react';
import './App.css';

// Componentes
import tareas from './ejemplos/tareas.json';
import Tareas2 from './components/Tareas2.js';
import TareasForm from './components/TareasForm';



// En App2.js, Tarea2.js, Tareas2.js veremos como separamos este componente

class App2 extends Component {

  state = {

    tareas: tareas

}

// Funcion Agrega un elemento tarea
addTarea = (title, descripcion) => {

  console.log(title, descripcion);

// crea variable constante con estados locales
  const newTarea = {
    title : title,
    descripcion : descripcion,
    id : this.state.tareas.length
  }

  console.log(newTarea);

// enviamos la variable creada al estado tareas. [...]: para agregar a loq ue ya estaba en e arreglo lo siguiente.
  this.setState({
    tareas : [...this.state.tareas, newTarea]
  })
}
  
  render(){


    return <div>

      <TareasForm addTarea = {this.addTarea}/>
      <Tareas2 datos2 = {this.state.tareas} />

    </div>
  }
}
export default App2;
