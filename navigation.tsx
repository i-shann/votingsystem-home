import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, ImageSourcePropType  } from "react-native";

import HomeScreen from "./screens/HomeScreen";
import PresidentScreen from "./screens/PresidentScreen";
import CandidateScreen from "./screens/CandidateScreen";
import Ballot from "./screens/Ballot";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import Profile from "./screens/ProfileScreen"

import AdministrationProgress from "./screens/administrationprogress";
export type StackParamList = {
    Home: undefined;
    President: { category: string };
    Candidate: { name: string; location: string; party: string; experience: string; image: ImageSourcePropType, age: number };
    Login: undefined; 
    Signup: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: styles.tabBar,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => {
                    let iconName;
                    let label;
                    let iconColor = focused ? "#E38E49" : "white"; // Orange when active

                    if (route.name === "Home") {
                        iconName = "home";
                        label = "Home";
                    } else if (route.name === "Ballot") {
                        iconName = "clipboard";
                        label = "Ballot";
                    } else if (route.name === "Compare") {
                        iconName = "swap-horizontal";
                        label = "Compare";
                    } else if (route.name === "Information") {
                        iconName = "information-circle";
                        label = "Info"; // Shortened to fit
                    } else if (route.name === "Profile") {
                        iconName = "person";
                        label = "Profile";
                    }

                    return (
                        <View style={styles.iconContainer}>
                            <Ionicons name={iconName as any} size={24} color={iconColor} />
                            <Text style={styles.iconText} numberOfLines={1} ellipsizeMode="tail">
                                {label}
                            </Text>
                        </View>
                    );
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Ballot" component={Ballot} options={{ headerShown: false }} />
            <Tab.Screen name="Compare" component={Compare} options={{ headerShown: false }} />
            <Tab.Screen name="Information" component={AdministrationProgress} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name ="Login" component = {LoginScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="Home" component={BottomTabs} />
                <Stack.Screen name="President" component={PresidentScreen} />
                <Stack.Screen name="Candidate" component={CandidateScreen} />
                <Stack.Screen name="AddCandidate" component={AddCandidate} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: "#1F509A",
        height: 70,
        paddingBottom: 70,
        paddingTop: 10,
    },
    iconContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: 70, // Ensures enough space
        height: 100,
    },
    iconText: {
        fontSize: 10, // Slightly reduced size to fit
        marginTop: 2,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },
});
