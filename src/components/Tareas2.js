import React, { Component } from 'react';
import Tarea2 from './Tarea2';



class Tareas2 extends Component {

    render() {

        // Este componente recorre cada elemento de tarea.json que viene llegando desde App2.js y por cada recorrido genera tareas independientes. Para pintar esto en 
        // pantalla lo enviamos al componente Tarea2, que es el que pinta todo en un div.. donde esta la estructura de la impresion.

        return this.props.datos.map(elemento => <Tarea2 datoTarea2 = {elemento} key = {datos.id} />);
    }
}

export default Tareas2;