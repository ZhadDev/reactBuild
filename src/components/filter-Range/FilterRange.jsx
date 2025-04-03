import React, { useState } from 'react';
import './FilterRange.css';

/**
 * Componente para un filtro de rango con dos controles deslizantes (mínimo y máximo).
 * @param {number} min - Valor mínimo del rango.
 * @param {number} max - Valor máximo del rango.
 * @param {function} onChange - Función que se ejecuta al cambiar los valores del rango.
 */
const FilterRange = ({ min = 0, max = 100, onChange = () => {} }) => {
  // Estado para almacenar los valores actuales del rango
  const [rangeValues, setRangeValues] = useState({ minValue: min, maxValue: max });

  /**
   * Maneja el cambio del control deslizante mínimo.
   * @param {object} e - Evento del cambio.
   */
  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), rangeValues.maxValue - 1); // Asegura que el mínimo no supere al máximo
    setRangeValues((prev) => ({ ...prev, minValue: value })); // Actualiza el estado
    if (typeof onChange === 'function') {
      onChange({ ...rangeValues, minValue: value }); // Llama a la función onChange si es válida
    }
  };

  /**
   * Maneja el cambio del control deslizante máximo.
   * @param {object} e - Evento del cambio.
   */
  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), rangeValues.minValue + 1); // Asegura que el máximo no sea menor al mínimo
    setRangeValues((prev) => ({ ...prev, maxValue: value })); // Actualiza el estado
    if (typeof onChange === 'function') {
      onChange({ ...rangeValues, maxValue: value }); // Llama a la función onChange si es válida
    }
  };

  return (
    <div className="filter-range-container">
      <div className="range-container">
        <div className="range-container-title">Valor:</div>
        <div className="range-container-inputs">
          {/* Control deslizante para el valor mínimo */}
          <input
            type="range"
            id="min-range"
            min={min}
            max={max}
            value={rangeValues.minValue}
            onChange={handleMinChange}
          />
          {/* Control deslizante para el valor máximo */}
          <input
            type="range"
            id="max-range"
            min={min}
            max={max}
            value={rangeValues.maxValue}
            onChange={handleMaxChange}
          />
          {/* Barra visual del rango */}
          <div className="range-track">
            <div
              className="range-highlight"
              style={{
                left: `${((rangeValues.minValue - min) / (max - min)) * 100}%`,
                right: `${100 - ((rangeValues.maxValue - min) / (max - min)) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
      {/* Etiquetas para mostrar los valores mínimo y máximo */}
      <div className="range-labels">
        <div className="range-label-min">
          <div className="range-label-title-min">Min.</div>
          <div className="range-label-min-value">$ {rangeValues.minValue.toLocaleString()}</div>
        </div>
        <div className="range-label-max">
          <div className="range-label-title-max">Max.</div>
          <div className="range-label-max-value">$ {rangeValues.maxValue.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};

export default FilterRange;