import React, { Component } from 'react';
import './Tarea.css';

class Tarea2 extends Component {
    render () {

        //Para no esccribir todo el rato this.props, transformamos la propiedad que viene de la etiqueta anterior en una variable constante que dentro tenga el this.props        
        const {datoTarea2} = this.props;
        return <p style={{background: 'red'}}>

            {datoTarea2.title} - 
            {datoTarea2.description} - 
            {datoTarea2.done} - 
            {datoTarea2.id}
            
            <input type = "checkbox"/>
            <button>
                x
            </button>

        </p>
    }
}

export default Tarea2;