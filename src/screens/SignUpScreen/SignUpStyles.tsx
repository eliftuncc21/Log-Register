import { FontAwesome5 } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #ffffff;
    justify-content: center;
    align-items: center;
`;
export const Logo = styled.Image`
    width: 40%; 
    height: 20%;
    resizeMode: contain;
    margin-bottom: 30;
`;
export const InputContainer = styled.View`
    flex-direction: row;
    align-items: center;
    border-radius: 8px;
    margin-bottom: 20px;
    padding-horizontal: 15px;
    width: 80%;
    height: 50px;
    background-color: #f5f5f5;
`;
export const Icon = styled(FontAwesome5)`
    margin-right: 10px;
`;
export const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #333333;
    placeholderTextColor: #666666; 
`;
export const SignUpButton = styled.TouchableOpacity`
    padding-vertical: 15px;
    padding-horizontal: 100px;
    border-radius: 8px;
`;
export const ButtonText = styled.Text`
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`;
export const ErrorText = styled.Text`
    color: red;
    margin-bottom: 5px;
    margin-left: 10px;
`;
