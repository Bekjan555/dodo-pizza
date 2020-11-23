import React from 'react';
import logo from '../../assets/logo.svg';
import './styles.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row row">
                    <div className="header__logo logo">
                        <img src={logo} alt=""/>
                        <div className="logo__info">
                            <h2 className="logo__title">
                                REACT PIZZA
                            </h2>
                            <div className="logo__description">
                                самая вкусная пицца во вселенной
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </header>
    )
}

export default Header;
