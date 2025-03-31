import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../navigation"; // Adjust path if needed

const { width, height } = Dimensions.get('window');

const SignupScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

    const handleLogin = () => {
        navigation.navigate("Login");
    };

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const handleSignup = () => {
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }
        Alert.alert('Success', `Account created for ${firstName} ${lastName}`);
    };

    return (
        <View style={styles.container}>
            <LinearGradient colors={['orange', 'blue']} style={styles.background}>
                <Text style={styles.headingText}>Create Your</Text>
                <Text style={styles.headingTextOrange}>Account</Text>
            </LinearGradient>

            <View style={styles.content}>
                <View style={styles.formContainer}>
                    {/* First Name */}
                    <View style={styles.inputContainer}>
                        <Ionicons name="person-outline" size={30} color="gray" />
                        <TextInput
                            style={styles.input}
                            placeholder="First Name"
                            value={firstName}
                            onChangeText={setFirstName}
                        />
                    </View>

                    {/* Last Name */}
                    <View style={styles.inputContainer}>
                        <Ionicons name="person-outline" size={30} color="gray" />
                        <TextInput
                            style={styles.input}
                            placeholder="Last Name"
                            value={lastName}
                            onChangeText={setLastName}
                        />
                    </View>

                    {/* Email */}
                    <View style={styles.inputContainer}>
                        <Ionicons name="mail-outline" size={30} color="gray" />
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    {/* Password */}
                    <View style={styles.inputContainer}>
                        <SimpleLineIcons name="lock" size={30} color="gray" />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!isPasswordVisible}
                        />
                        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                            <Ionicons name={isPasswordVisible ? "eye-off" : "eye"} size={25} color="gray" />
                        </TouchableOpacity>
                    </View>

                    {/* Confirm Password */}
                    <View style={styles.inputContainer}>
                        <SimpleLineIcons name="lock" size={30} color="gray" />
                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            secureTextEntry={!isConfirmPasswordVisible}
                        />
                        <TouchableOpacity onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}>
                            <Ionicons name={isConfirmPasswordVisible ? "eye-off" : "eye"} size={25} color="gray" />
                        </TouchableOpacity>
                    </View>

                    {/* Sign Up Button */}
                    <TouchableOpacity style={styles.button} onPress={handleSignup}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>

                    {/* Already have an account? Sign In */}
                    <View style={styles.footerContainer}>
                        <Text>Already have an account?</Text>
                        <TouchableOpacity onPress={handleLogin}>
                            <Text style={styles.signinText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default SignupScreen;

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
        alignItems: 'flex-start',
        paddingHorizontal: 30,
        marginBottom: -50,
    },
    headingText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
    },
    headingTextOrange: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'orange',
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
    input: {
        flex: 1,
        paddingVertical: 10,
        marginLeft: 10,
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
