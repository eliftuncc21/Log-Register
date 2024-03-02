import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Props } from '../types';
import { Container, Title, Logo, ErrorText } from './LoginStyles';
import { CustomButton, CustomInput } from '../../components';

const App: React.FC<Props> = ({ navigation }) => {
    return (
        <Formik
            initialValues={{
                userName: '',
                userPassword: ''
            }}
            validationSchema={Yup.object({
                userName: Yup.string().required('Kullanıcı adı zorunludur').min(6, 'Kullanıcı adı en az 6 karakter olmalıdır'),
                userPassword: Yup.string().required('Şifre zorunludur').min(6, 'Şifre en az 6 karakter olmalıdır')
            })}
            onSubmit={() => navigation.navigate('Home')}
        >
            {formik => (
                <Container>
                    <Logo source={require('../../../assets/img/logo.png')} />
                    <Title>Giriş Yap</Title>
                    <CustomInput
                        iconName="user"
                        handlePlaceholder="Kullanıcı Adı"
                        isSecureText={false}
                        handleValue={formik.values.userName}
                        handleOnChangeText={formik.handleChange('userName')}
                        handleOnBlur={formik.handleBlur('userName')}
                    />
                    {formik.errors.userName && formik.touched.userName && (
                        <ErrorText>{formik.errors.userName}</ErrorText>
                    )}
                    <CustomInput
                        iconName="key"
                        handlePlaceholder="Şifre"
                        isSecureText={true}
                        handleValue={formik.values.userPassword}
                        handleOnChangeText={formik.handleChange('userPassword')}
                        handleOnBlur={formik.handleBlur('userPassword')}
                    />
                    {formik.errors.userPassword && formik.touched.userPassword && (
                        <ErrorText>{formik.errors.userPassword}</ErrorText>
                    )}
                    <CustomButton
                        buttonText="Giriş Yap"
                        handleOnPress={() => formik.handleSubmit()}
                        backgroundColor="#6A0DAD"
                    />
                    <CustomButton
                        buttonText='Hesap Oluştur'
                        handleOnPress={() => navigation.navigate('SignUp')}
                        backgroundColor='#007bff'
                    />
                </Container>
            )}
        </Formik>
    );
};

export default App;
