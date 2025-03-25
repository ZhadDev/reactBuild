import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Menu.css';
import MenuOption from './MenuOptions/MenuOptions';

/**
 * Componente principal del menú.
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.menuTitle - El título inicial del menú.
 */
const Menu = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedTitle, setSelectedTitle] = useState(props.menuTitle);

    const toggleMenu = () => {
        setIsExpanded(!isExpanded);
    };

    const handleOptionClick = (title) => {
        setSelectedTitle(title);
        setIsExpanded(false);
    };

    return (
        <div className='container-all-menu' style={{color: props.menuTextColor || 'black'}}>
            <div className='container-menu-components' style={{ height: props.heightTopMenu || '50px', backgroundColor: props.menuOptionsBackgroundColor || '#f5f5f5' }}>
                <button onClick={toggleMenu} className='menu-toggle-button'>
                    <i className='fas fa-bars'></i>
                </button>
                <div className='container-menu-components-title'>
                    {selectedTitle}
                </div>
                <img className='container-menu-user-img' style={{ width: props.widthUserIconImg || '40px',  height: props.heightUserIconImg || '40px' }} hidden={isExpanded} src={props.UserIcon ? props.UserIcon : 'https://unavatar.io/none'} alt={'icono de usuario'} />
            </div>
            {isExpanded && (
                <div className='container-menu-options' style={{ width: props.widthMenuOptions || '300px', backgroundColor: props.menuOptionsBackgroundColor || '#f5f5f5' }}>
                    <div className='container-menu-option-user'>
                    <img className='container-menu-option-user-img' style={{ width: props.widthUserIconMenuOptions || '70px',  height: props.heightUserIconMenuOptions || '70px' }} src={props.UserIcon ? props.UserIcon : 'https://unavatar.io/none'} alt={'icono de usuario'} />
                    </div>
                    {props.dataMenuOptions.map((option, index) => (
                        <MenuOption
                            key={index}
                            title={option.title}
                            iconClass={option.iconClass}
                            onClickUpdateTitle={handleOptionClick}
                            subMenuOptions={option.subMenuOptions}
                        />
                    ))}
                    <div className='container-menu-footer'>
                        <p>Juan.cuesta@iptotal.com ©</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Menu;