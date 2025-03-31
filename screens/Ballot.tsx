import React, { useState } from "react";
import { 
    View, Text, FlatList, StyleSheet, Pressable, Platform, LayoutAnimation, UIManager, TouchableOpacity, Image 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../navigation";
import { SafeAreaView } from "react-native-safe-area-context";

// Enable Layout Animation for Android
if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

// Define Candidate Type
type Candidate = {
    name: string;
    image: any; // Local assets require `any` type
};

// Define Position Type
type Position = {
    title: string;
    candidates: Candidate[];
};

// Positions Data with Local Images
const positions: Position[] = [
    {
        title: "President",
        candidates: [
            { name: "Juan Dela Cruz", image: require("../assets/c2.png") },
            { name: "Maria Santos", image: require("../assets/c2.png") }
        ]
    },
    {
        title: "Vice-President",
        candidates: [
            { name: "Jose Rizal", image: require("../assets/c2.png") },
            { name: "Andrea Bonifacio", image: require("../assets/c2.png") }
        ]
    },
    {
        title: "Senator",
        candidates: [
            { name: "Miguel Castillo", image: require("../assets/c2.png") },
            { name: "Isabela Mercado", image: require("../assets/c2.png") }
        ]
    },
    {
        title: "Governor",
        candidates: [
            { name: "Antonio Villanueva", image: require("../assets/c2.png") },
            { name: "Catherine Reyes", image: require("../assets/c2.png") }
        ]
    },
    {
        title: "Vice-Governor",
        candidates: [
            { name: "Ramon Fernandez", image: require("../assets/c2.png") },
            { name: "Angela Bautista", image: require("../assets/c2.png") }
        ]
    },
    {
        title: "Mayor",
        candidates: [
            { name: "Ricardo Mendoza", image: require("../assets/c2.png") },
            { name: "Lourdes Navarro", image: require("../assets/c2.png") }
        ]
    },
    {
        title: "Vice-Mayor",
        candidates: [
            { name: "Carlos Santiago", image: require("../assets/c2.png") },
            { name: "Feliza Aquino", image: require("../assets/c2.png") }
        ]
    }
]
;

const Ballot: React.FC = () => {
    const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();


    // Toggle dropdown expand/collapse
    const toggleExpand = (title: string): void => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));
    };

    // Handle candidate selection
    const handleCandidateSelect = (candidate: Candidate) => {
        navigation.navigate("Candidate", {
            name: candidate.name,
            location: "Unknown",
            party: "Independent",
            experience: "N/A",
            image: candidate.image,
            age: 45,
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Ballot</Text>
            </View>

            <FlatList
                data={positions}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        {/* Position Header with Expand/Collapse */}
                        <Pressable style={styles.item} onPress={() => toggleExpand(item.title)}>
                            <Text style={styles.itemText}>{item.title}</Text>
                            <Ionicons
                                name={expanded[item.title] ? "chevron-up" : "chevron-down"}
                                size={20}
                                color="#1F509A"
                            />
                        </Pressable>

                        {/* Dropdown Content */}
                        {expanded[item.title] && (
                            <View style={styles.dropdown}>
                                {item.candidates.map((candidate, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={styles.candidateItem}
                                        onPress={() => handleCandidateSelect(candidate)}
                                    >
                                        <Image source={candidate.image} style={styles.candidateImage} />
                                        <Text style={styles.dropdownText}>{candidate.name}</Text>
                                    </TouchableOpacity>
                                ))}

                                {/* Add Candidate Option */}
                                <TouchableOpacity 
                                    style={styles.addCandidateButton} 
                                    onPress={() => navigation.navigate("AddCandidate")}

                                >
                                    <Ionicons name="add-circle-outline" size={24} color="#1F509A" />
                                    <Text style={styles.addCandidateText}>Add Candidate</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },
    header: {
        backgroundColor: "#1F509A",
        paddingVertical: 20,
        alignItems: "center",
    },
    headerText: {
        marginTop: 40,
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
    },
    itemContainer: {
        marginHorizontal: 10,
        marginVertical: 5,
    },
    item: {
        backgroundColor: "white",
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    itemText: {
        fontSize: 18,
        fontWeight: "500",
    },
    dropdown: {
        backgroundColor: "#E8E8E8",
        padding: 10,
        marginTop: 5,
        borderRadius: 8,
    },
    candidateItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        paddingLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#D3D3D3",
    },
    candidateImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    dropdownText: {
        fontSize: 16,
    },
    addCandidateButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center", // Center horizontally
        paddingVertical: 10,
        marginTop: 10, 
    },
    addCandidateText: {
        fontSize: 16,
        color:"#1F509A",
        marginLeft: 10,
        fontWeight: "bold",
    },
});

export default Ballot;
