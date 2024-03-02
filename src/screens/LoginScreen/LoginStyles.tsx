import { FontAwesome5 } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`;
export const InputContainer = styled.View`
    flex-direction: row;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 20px;
    padding-horizontal: 15px;
    width: 80%;
    height: 50px;
    background-color: #f0f0f0;
`;
export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #000;
    margin-bottom: 10px;
`;
export const Logo = styled.Image`
    width: 40%;
    height: 20%;
    margin-bottom: 30px;
`;
export const Icon = styled(FontAwesome5)`
    margin-right: 10px;
`;
export const StyledTextInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #3b5998;
    placeholderTextColor: #A8A8A8; 
`;
export const UserActionButton = styled.TouchableOpacity`
    padding-vertical: 15px;
    padding-horizontal: 100px;
    border-radius: 8px;
    margin-bottom: 10px;
    width: 80%;
    align-items: center;
`;
export const ButtonText = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`;
export const ErrorText = styled.Text`
    color: red;
    margin-bottom: 5px;
    margin-left: 10px;
`;