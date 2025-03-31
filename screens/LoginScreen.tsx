import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../navigation";

const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleHome = () => {
        navigation.navigate("Home");
    };

    const handleSignup = () => {
        navigation.navigate("Signup");
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={styles.container}>
            <LinearGradient colors={['orange', 'blue']} style={styles.background}>
                <Text style={styles.headingText}>Welcome  
                    <Text style={{ color: 'orange' }}> Back!</Text>
                </Text>
            </LinearGradient>

            <View style={styles.content}>
                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <Ionicons name="mail-outline" size={30} color="gray" />
                        <TextInput
                            style={styles.inputEmail}
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <SimpleLineIcons name="lock" size={30} color="gray" />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!isPasswordVisible}
                        />
                        <TouchableOpacity onPress={togglePasswordVisibility}>
                        <Ionicons name={isPasswordVisible ? "eye-off" : "eye"} size={25} color="#1F509A" />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.ForgotPass}>Forgot Password?</Text>
                    <TouchableOpacity style={styles.button} onPress={handleHome}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>

                    <View style={styles.footerContainer}>
                        <Text>Don't have an account?</Text>
                        <TouchableOpacity onPress={handleSignup}>
                            <Text style={styles.signinText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    background: {
        width: '111%',
        height: height * 0.30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
        marginBottom: -50,
    },
    headingText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
    },
    content: {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: 'white',
        marginTop: 5,
        height: '80%',
        width: '111%',
        alignItems: "center",
        paddingTop: 40,
    },
    formContainer: {
        width: '100%',
        paddingHorizontal: 30,
    },
    inputContainer: {
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        marginBottom: 20,
    },
    inputEmail: {
        flex: 1,
        paddingVertical: 10, 
        marginLeft: 10,
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        marginLeft: 10,
    },
    ForgotPass: {
        textAlign: 'right',
        marginRight: 15,
        textDecorationLine: 'underline',
    },
    button: {
        backgroundColor: "orange",
        padding: 15,
        borderRadius: 50,
        alignItems: "center",
        marginTop: 30,
        width: "100%",
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    footerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    signinText: {
        fontWeight: "bold",
        marginLeft: 5,
        color: "orange",
    }
});
