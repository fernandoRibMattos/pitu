import React from 'react';
import { Logo, HeaderContainer } from './styles';

import Icone from '../../assests/icone.png';

function Header(props) {
    return (
        <>
            <HeaderContainer>
                <Logo src={Icone} alt='url Slim - Encurtador de URL' />
                <h1>url Slim</h1>
                <p>{props.children}</p>
            </HeaderContainer>
        </>
    )
}

export default Header;