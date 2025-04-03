import React, { useState } from 'react';
import './ProductResources.css';

// Datos de prueba que representan los productos disponibles
const dataTest = [
  { id: 1, product: 'Antena', option1: 'Incluido', description1:'Min. 2 - Max. 10', option2: 'Adicional', description2:'Min. 2 - Max. 10 | Valores para ejercicio test de los checks' },
  { id: 2, product: 'Router', option1: 'Incluido', description1:'Min. 2 - Max. 10', option2: 'Adicional', description2:'Min. 2 - Max. 10 | Valores para ejercicio test de los checks' }, 
  { id: 3, product: 'Switch', option1: 'Incluido', description1:'Min. 2 - Max. 10', option2: 'Adicional', description2:'Min. 2 - Max. 10 | Valores para ejercicio test de los checks' },
  { id: 4, product: 'Access Point', option1: 'Incluido', description1:'Min. 2 - Max. 10', option2: 'Adicional', description2:'Min. 2 - Max. 10 | Valores para ejercicio test de los checks' },
  { id: 5, product: 'Firewall', option1: 'Incluido', description1:'Min. 2 - Max. 10', option2: 'Adicional', description2:'Min. 2 - Max. 10 | Valores para ejercicio test de los checks' },
  { id: 6, product: 'Modem', option1: 'Incluido', description1:'Min. 2 - Max. 10', option2: 'Adicional', description2:'Min. 2 - Max. 10 | Valores para ejercicio test de los checks' },
  { id: 7, product: 'Repeater', option1: 'Incluido', description1:'Min. 2 - Max. 10', option2: 'Adicional', description2:'Min. 2 - Max. 10 | Valores para ejercicio test de los checks' },
  { id: 8, product: 'Extensor de Red', option1: 'Incluido', description1:'Min. 2 - Max. 10', option2: 'Adicional', description2:'Min. 2 - Max. 10 | Valores para ejercicio test de los checks' },
];

const ProductResources = () => {
  // Estado para almacenar las opciones seleccionadas (radio buttons) por producto
  const [selectedOptions, setSelectedOptions] = useState({});
  // Estado para almacenar el estado de los checkboxes (si están seleccionados o no)
  const [checkedProducts, setCheckedProducts] = useState({});

  /**
   * Maneja el cambio de selección de los radio buttons.
   * @param {number} productId - ID del producto.
   * @param {string} option - Opción seleccionada ('included' o 'aditional').
   */
  const handleOptionChange = (productId, option) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [productId]: option, // Actualiza la opción seleccionada para el producto
    }));
  };

  /**
   * Maneja el cambio de estado de los checkboxes.
   * @param {number} productId - ID del producto.
   * @param {boolean} isChecked - Estado del checkbox (true o false).
   */
  const handleCheckboxChange = (productId, isChecked) => {
    setCheckedProducts((prevState) => ({
      ...prevState,
      [productId]: isChecked, // Actualiza el estado del checkbox para el producto
    }));
  };

  /**
   * Genera un objeto con los datos de los productos, incluyendo:
   * - ID del producto.
   * - Nombre del producto.
   * - Estado del checkbox (true o false).
   * - ID del radio seleccionado.
   * @returns {Array} - Lista de objetos con los datos de los productos.
   */
  const getProductsData = () => {
    return dataTest.map((item) => ({
      id: item.id,
      product: item.product,
      isChecked: !!checkedProducts[item.id], // Si está checkeado, true; de lo contrario, false
      selectedOption: selectedOptions[item.id] || '', // ID del radio seleccionado o vacío si no hay selección
    }));
  };

  return (
    <div className="component-products-resources">
      <div className="component-products-resources-title">Recursos de producto</div>
      <div className="products-resources-container">
        {dataTest.map((item) => (
          <div key={item.id} id={item.id} className="product-card-container">
            {/* Sección del checkbox */}
            <div className="product-card-container-element">
              <div className="product-card-container-element-check">
                <input
                  type="checkbox"
                  id={`checkbox-${item.id}`}
                  name={`checkbox-${item.id}`}
                  value="included"
                  onChange={(e) => handleCheckboxChange(item.id, e.target.checked)}
                />
              </div>
              <div className="product-card-container-element-title">{item.product}</div>
            </div>

            {/* Sección de las opciones (radio buttons) */}
            <div className="product-card-container-options">
              {/* Opción "Incluido" */}
              <div className="product-card-container-check-included">
                <input
                  type="radio"
                  id={`included-${item.id}`}
                  name={`option-${item.id}`}
                  value="included"
                  checked={selectedOptions[item.id] === 'included'}
                  onChange={() => handleOptionChange(item.id, 'included')}
                />
              </div>
              <div className="product-card-container-option-included">
                <div className="product-card-container-option-included-title">{item.option1}</div>
                <div className="product-card-container-option-included-description" title={item.description1}>{`(${item.description1})`}</div>
              </div>

              {/* Opción "Adicional" */}
              <div className="product-card-container-check-aditional">
                <input
                  type="radio"
                  id={`aditional-${item.id}`}
                  name={`option-${item.id}`}
                  value="aditional"
                  checked={selectedOptions[item.id] === 'aditional'}
                  onChange={() => handleOptionChange(item.id, 'aditional')}
                />
              </div>
              <div className="product-card-container-option-aditional">
                <div className="product-card-container-option-aditional-title">{item.option2}</div>
                <div className="product-card-container-option-aditional-description" title={item.description2}>{`(${item.description2})`}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Botón para obtener los datos de los productos */}
      <button onClick={() => console.log(getProductsData())}>Obtener Datos</button>
    </div>
  );
};

export default ProductResources;