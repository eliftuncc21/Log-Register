import React from 'react';
import { Icon, StyledTextInput, InputContainer } from '../screens/LoginScreen/LoginStyles';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';

interface CustomInputProps {
    iconName: string;
    handlePlaceholder: string;
    isSecureText: boolean;
    handleValue: string;
    handleOnChangeText: (text: string) => void;
    handleOnBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>, field: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
    iconName,
    handlePlaceholder,
    isSecureText,
    handleValue,
    handleOnChangeText,
    handleOnBlur,
}) => {
    const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        handleOnBlur(e, handlePlaceholder); //placeholder yerine başka birşeyde alabilirsin
    };

    return (
        <InputContainer>
            <Icon name={iconName} size={20} color="#000" />
            <StyledTextInput
                placeholder={handlePlaceholder}
                secureTextEntry={isSecureText}
                value={handleValue}
                onChangeText={handleOnChangeText}
                onBlur={handleBlur} 
            />
        </InputContainer>
    );
};

export default CustomInput;
