import React, { useState } from 'react';
import './loginForm.css';
import { Zsvg } from '../libZhad/zSvg/Zsvg';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña

    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className='container-login-all'>
        <div className='container-login'>
        <img
          className="container-login-icon"
          style={{
            width: '100px',
            height: '100px',
          }}
          src={'https://unavatar.io/black'}
          alt={"icono de login"}
        />
        <form onSubmit={handleSubmit} className="login-form">
            <div className='login-form-username'>
                <label className='login-form-username-label' htmlFor="username">Username:</label>
                <input
                    className='login-form-username-input'
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div className='login-form-password'>
                <label className='login-form-password-label' htmlFor="password">Password:</label>
                <div className='login-form-password-input-container' >
                    <input
                    className='login-form-password-input'
                        type={showPassword ? 'text' : 'password'} // Cambia el tipo de input
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                    className='show-password-button'
                        type="button"
                        onClick={() => setShowPassword(!showPassword)} // Cambia el estado
                        style={{ marginLeft: '8px' }}
                    >
                        {showPassword ? 
                            <Zsvg
                            icon={'eye'}
                            fontSize={"15pt"}
                            color={ "black"}
                            /> : 
                            <Zsvg
                            icon={'eye-off'}
                            fontSize={"15pt"}
                            color={ "black"}
                            />}
                    </button>
                </div>
            </div>
            <div className='login-form-links-footer'>
                <div className='login-form-link-footer-recover-password'>
                    <a href="/recover-password" className='login-form-link-footer-recover-password-a'>Recover Password</a>
                </div>
                <div className='login-form-link-footer-register'>
                    <a href="/register" className='login-form-link-footer-register-a'>Register</a>
                </div>
            </div>

            <button className='btn-submit-form' type="submit">Login</button>
        </form>
        </div>
    </div>
    );
};

export default LoginForm;