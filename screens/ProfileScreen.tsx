import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { StackParamList } from "../navigation";
import { useState } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

type CandidateScreenRouteProp = RouteProp<StackParamList, "Candidate">;

const ProfileScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
    const route = useRoute<CandidateScreenRouteProp>();

    const [activeTab, setActiveTab] = useState<"Profile Information" | "Polling Information">("Profile Information");

    const tabDetails = {
        "Profile Information": (
            <View>
                <Text style={styles.boldText}>Full Name</Text>
                <Text>{route.params?.name ?? "Rica Mae Cruz"}</Text>

                <Text style={styles.boldText}>Age</Text>
                <Text>{route.params?.age ?? "21 Years old"}</Text>

                <Text style={styles.boldText}>Place of Birth</Text>
                <Text>{route.params?.location ?? "Antipolo City"}</Text>

            </View>
        ),

        "Polling Information": (
            <View>
                <Text style={styles.boldText}>Place of Registration</Text>
                <Text>{route.params?.district ?? "• Cainta, Rizal"}</Text>

                <Text style={styles.boldText}>Polling Place</Text>
                <Text>{route.params?.pollingStation ?? "• Cainta Elementary School"}</Text>

                <Text style={styles.boldText}>Precinct Number</Text>
                <Text>{route.params?.electionDate ?? "• 0090A"}</Text>
           
                <View style={styles.statusContainer}>
                  <Text style={styles.boldText}>Status:</Text>
                  <Text style={styles.statusText}>{route.params?.status ?? "Active"}</Text>
                </View>

            </View>
        ),
    };

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                </TouchableOpacity>

      {/*Name of the user */}
      <Image source={route.params?.image ? { uri: route.params.image } : require("../assets/c1.png")} style={styles.image} />
                <Text style={styles.name}>{route.params?.name ?? "Rica Mae Cruz"}</Text>
                <Text style={styles.party}>{route.params?.party ?? "@ricaMae"}</Text>
            </View>

            <View style={styles.bottomSection}>
                <View style={styles.tabs}>
                    {Object.keys(tabDetails).map((tab) => (
                        <TouchableOpacity
                            key={tab}
                            style={[styles.tab, activeTab === tab ? styles.activeTab : null]}
                            onPress={() => setActiveTab(tab as keyof typeof tabDetails)}
                        >
                            <Text style={[styles.tabText, activeTab === tab ? styles.activeTabText : null]}>
                                {tab}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.tabContent}>{tabDetails[activeTab]}</View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({


  statusContainer: {
    flexDirection: "row",
    alignItems: "center", // Aligns text vertically
    justifyContent: "flex-start", // Centers content horizontally
    gap: 5, // Adds space between "Status:" and "Active"
 
},
statusText: {
    color: "green",
    fontWeight: "bold",
    marginTop: 13,
},


    container: { 
        flex: 1,
        backgroundColor: "#007bff",
    },
    topSection: {
        flex: 1,
        backgroundColor: "#1F509A",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 40,
        width: "100%",
    },
    bottomSection: {
        marginTop: -40,
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 2,
    },
    backButton: {
        position: "absolute",
        top: 55,
        left: 10,
        padding: 10,
    },
    backButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    image: {
        width: 120,
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: 'white',
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
    },
    party: {
        fontSize: 18,
        color: "white",
        fontStyle: "italic",
    },
    tabs: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 10,
    },
    tab: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 2,
        borderBottomColor: "transparent",
    },
    activeTab: {
        borderBottomColor: "#1F509A",
    },
    tabText: {
        fontSize: 14,
        color: "gray",
    },
    activeTabText: {
        color: "#1F509A",
        fontWeight: "bold",
    },
    tabContent: {
        fontSize: 16,
        color: "black",
        marginTop: 0,
    },
    boldText: {
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 10,
        lineHeight: 30,
    }
});

export default ProfileScreen;
