import { Button, InputAdornment, TextField } from "@material-ui/core";
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React, { useState, useContext } from "react";
import * as yup from 'yup';
import { useFormik } from 'formik';
import Spacer from "../components/shared/Spacer.tsx";
import loginUser from "../services/login";

import { UserContext } from "../context/UserContext";

const Form = () => {

    const { setUserDetails } = useContext(UserContext)
    const [showAlert, setShowAlert] = useState(false)
    const navigate = useNavigate();


    const validationLogin = yup.object({
        email: yup
          .string('Digite um email')
          .email('Digite um email válido')
          .required('Este campo é obrigatório'),
        password: yup
          .string('Digite sua senha')
          .required('A senha é obrigatória'),
      });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationLogin,
        onSubmit: (values) => {
            setShowAlert(false)
            loginUser(values).then((response) => {
                const userDetails = {
                    ...response.data,
                    authorization: response.headers.authorization,
                    refreshToken: response.headers['refresh-token'],
                }
                sessionStorage.setItem("user", JSON.stringify(userDetails))
                setUserDetails(userDetails)
                navigate("/home")
            })
            .catch((error) => {
                setShowAlert(true)
            })
        },
    });

    return (
    <form onSubmit={formik.handleSubmit}>
        <TextField
            style={{backgroundColor: 'rgba(0, 0, 0, 0.32', border: 'solid 0' ,borderRadius: '3px', width: '100%'}}
            id="filled-label-medium"
            value={formik.values.email}
            name="email"
            onChange={formik.handleChange}
            variant="filled"
            label="Email"
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            InputLabelProps={{ shrink: true }}
        />
        <Spacer horizontal="16"/>
        <TextField
            style={{backgroundColor: 'rgba(0, 0, 0, 0.32', border: 'solid 0' ,borderRadius: '3px'}}
            id="filled-label-medium"
            value={formik.values.password}
            onChange={formik.handleChange}
            variant="filled"
            label="Senha"
            name="password"
            type="password"
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputLabelProps={{ shrink: true }}
            InputProps={{
                endAdornment: (
                <InputAdornment position="end">
                    <Button 
                        style={{
                            borderRadius: 35,
                            backgroundColor: '#FFFFFF',
                            fontSize: '16px',
                            fontFamily: 'Heebo',
                            color: "#B22E6F"
                        }} 
                        type="submit"
                        variant="contained">
                        Entrar
                    </Button>
                </InputAdornment>
                ),
            }}
        />
        { showAlert && 
            <>
                <Spacer horizontal="16"/>
                <Alert severity="error">Usuário ou senha inválida.</Alert> 
            </>
        }
    </form>
    );
};

export default Form;