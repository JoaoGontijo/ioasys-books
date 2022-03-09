import React from "react";
import Form from "../../components/Form.jsx";
import Flexbox from "../../components/shared/Flexbox.tsx";
import Spacer from "../../components/shared/Spacer.tsx";
import BackgroundImage from "./../../assets/BackgroundImage.png"
import Logo from "./../../assets/Logo.png"
import "../../components/style.scss"

const Login = () => {

    return (
    <Flexbox 
        height={'100vh'}
        flexDirection="row"
        backgroundImage={BackgroundImage}   
        justifyContent="center"
        alignItems="flex-start"
        flexFlow="column wrap"
        padding="0 15%"
        type="email"
        className="bg-mobile"
    >
        <Flexbox alignItems="center">
            <img
                src={Logo}
                alt="logo-ioasys"
                loading="lazy"
                width="104.4"
                height="36"
            />
            <Spacer vertical="16.6"/>
            <p style={{fontFamily: 'Heebo', fontSize: '28px', fontWeight: '300', color: '#FFF'}}>
                Books
            </p>
        </Flexbox>
        <Form />
    </Flexbox>
    );
};

export default Login;