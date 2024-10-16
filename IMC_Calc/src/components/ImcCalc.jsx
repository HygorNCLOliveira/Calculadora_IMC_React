import React from 'react'
import { useState } from 'react'

// Componentes
import Button from './Button'

// Estilização
import "./ImcCalc.css"


const ImcCalc = ({calcImc}) => {

    const [height, setHeigth] = useState("");
    const [weight, setWeigth] = useState("");

    const clearForm = (e) => {
        e.preventDefault();
        setWeigth("")
        setHeigth("")
    }

    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, "")
    }

    const handleHeightChange = (e) => {
        const updatedValue = validDigits(e.target.value)

        setHeigth(updatedValue);
    }
    const handleWeightChange = (e) => {
        const updatedValue = validDigits(e.target.value)

        setWeigth(updatedValue);
    }

  return (
    <div id="calc-container">
        <h2>Calculadora de IMC</h2>
        <form id="imc-form">
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="height">Altura: </label>
                    <input type="text" name='height' id='height' placeholder='Exemplo: 1,65'
                    onChange={(e) => handleHeightChange(e)} value={height}/>
                </div>
                <div className="form-control">
                    <label htmlFor="weight">Peso: </label>
                    <input type="text" name='weight' id='weight' placeholder='Exemplo: 58,5' onChange={(e) => handleWeightChange(e)} value={weight}/>
                </div>
            </div>
            <div className="action-control">
                <Button id="calc-btn" text="Calcular" action={(e) => calcImc(e, height, weight)}/>
                <Button id="clear-btn" text="Limpar" action={clearForm}/>
            </div>
        </form>
    </div>
  )
}

export default ImcCalc