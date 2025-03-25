import React, { useState } from 'react';

/**
 * Componente para una opción del menú.
 * @param {string} title - El título de la opción.
 * @param {string} iconClass - La clase del icono de FontAwesome.
 * @param {function} onClickUpdateTitle - Función a ejecutar al hacer clic en el título de la opción.
 * @param {Array} subMenuOptions - Lista de subopciones del menú.
 */
const MenuOption = ({ title, iconClass, onClickUpdateTitle, subMenuOptions }) => {
    const [isSubMenuExpanded, setIsSubMenuExpanded] = useState(false);

    const toggleSubMenu = (e) => {
        e.stopPropagation(); // Evita que el evento se propague al contenedor padre
        setIsSubMenuExpanded(!isSubMenuExpanded);
    };

    return (
        <>
            <div className='container-menu-option' onClick={() => onClickUpdateTitle(title)}>
                <div >
                    <i className={iconClass}></i> {title}
                </div>
                {subMenuOptions && (
                    <button className='container-menu-option-button' onClick={toggleSubMenu}>
                        <i
                            className={`fas ${isSubMenuExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}`}
                        ></i>
                    </button>
                )}
            </div>
            {isSubMenuExpanded && subMenuOptions && (
                <div className='container-submenu-options'>
                    {subMenuOptions.map((subOption, index) => (
                        <MenuOption
                            key={index}
                            title={subOption.title}
                            iconClass={subOption.iconClass}
                            onClickUpdateTitle={onClickUpdateTitle}
                            subMenuOptions={subOption.subMenuOptions}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

export default MenuOption;