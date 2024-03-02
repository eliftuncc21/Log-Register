import React from "react";
import { UserActionButton, ButtonText} from "../screens/LoginScreen/LoginStyles";


interface CustomButtonProps {
    buttonText: string;
    handleOnPress: () => void;
    backgroundColor: string;
    style?: object; 
}

const CustomButton: React.FC<CustomButtonProps> = ({ buttonText, handleOnPress, backgroundColor, style }) => {
    return (
        <UserActionButton 
            style={{ backgroundColor: backgroundColor }}
            onPress={handleOnPress}>
            <ButtonText>{buttonText}</ButtonText>
        </UserActionButton>
    );
}

export default CustomButton;
