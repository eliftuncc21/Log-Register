import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Props } from '../types';
import { Container, Logo, InputContainer, Icon, Input, SignUpButton, ButtonText, ErrorText } from './SignUpStyles';
import { CustomButton, CustomSignUpInput } from '../../components';

const SignUp: React.FC<Props> = ({ navigation }) => {
    return (
        <Formik
            initialValues={{
                mailAdresi: '',
                kullanıcıAd: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={Yup.object({
                mailAdresi: Yup.string().required('Mail adresi zorunludur').min(6,'En az 6 karaktere sahip olmalıdır').matches(/^[a-zA-Z0-9]*$/, 'Kullanıcı adı yalnızca harf ve rakamlardan oluşabilir'),
                kullanıcıAd: Yup.string().required('Kullanıcı adı zorunludur').min(6, 'En az 6 karaktere sahip olmalıdır'),
                password: Yup.string().required('Şifre zorunludur').min(6, 'En az 6 karaktere sahip olmalıdır'),
                confirmPassword: Yup.string().required('Şifre zorunludur').min(6, 'En az 6 karaktere sahip olmalıdır'),
            })}
            onSubmit={() => navigation.navigate('Home')}
        >
            {formik => (
                <Container>
                    <Logo source={require('../../../assets/img/logo.png')} />
                    <CustomSignUpInput
                        iconName='envelope'
                        handlePlaceholder='E-posta adresi'
                        isSecureText={false}
                        handleValue={formik.values.mailAdresi}
                        handleOnChangeText={formik.handleChange('mailAdresi')} />
                    {formik.errors.mailAdresi && formik.touched.mailAdresi && (
                        <ErrorText>{formik.errors.mailAdresi}</ErrorText>
                    )}

                    <CustomSignUpInput
                        iconName='user'
                        handlePlaceholder='Kullanıcı Adı'
                        isSecureText={false}
                        handleValue={formik.values.kullanıcıAd}
                        handleOnChangeText={formik.handleChange('kullanıcıAd')} />
                    {formik.errors.kullanıcıAd && formik.touched.kullanıcıAd && (
                        <ErrorText>{formik.errors.kullanıcıAd}</ErrorText>
                    )}

                    <CustomSignUpInput
                    iconName='lock'
                    handlePlaceholder='Şifre'
                    isSecureText={true}
                    handleOnChangeText={formik.handleChange('password')}
                    handleValue={formik.values.password} />
                    {formik.errors.password && formik.touched.password && (
                        <ErrorText>{formik.errors.password}</ErrorText>
                    )}

                    <CustomSignUpInput
                    iconName='lock'
                    handlePlaceholder='Şifreyi Tekrar Girin'
                    isSecureText={true}
                    handleValue={formik.values.confirmPassword}
                    handleOnChangeText={formik.handleChange('confirmPassword')} />
                    {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                        <ErrorText>{formik.errors.confirmPassword}</ErrorText>
                    )}

                    <CustomButton 
                    handleOnPress={() => formik.handleSubmit()}
                    buttonText='Kaydet'
                    backgroundColor='#6A0DAD' />
                </Container>
            )}
        </Formik>
    );
};

export default SignUp;
