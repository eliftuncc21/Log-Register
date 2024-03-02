import React from "react";
import { InputContainer, Icon, Input } from "../screens/SignUpScreen/SignUpStyles";

interface CustomInputProps{
    iconName: string;
    handlePlaceholder: string;
    isSecureText: boolean;
    handleValue: string;
    handleOnChangeText: (text : string) => void;
}

const CustomSignUpInput: React.FC<CustomInputProps> = ({
    iconName,
    handlePlaceholder,
    isSecureText,
    handleValue,
    handleOnChangeText,
}) => {
    return(
        <InputContainer>
            <Icon name={iconName} size={20} color="#000"/>
            <Input
                placeholder={handlePlaceholder}
                secureTextEntry={isSecureText}
                value={handleValue}
                onChangeText={handleOnChangeText}
            />
        </InputContainer>
    )
}

export default CustomSignUpInput;