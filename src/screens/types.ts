import { NavigationProp } from "@react-navigation/native";

export type RootStackParamList = {
    Home: undefined;
    SignUp: undefined;
};

export type Props = {
    navigation: NavigationProp<RootStackParamList>;
};