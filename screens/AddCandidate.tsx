import { useState } from "react";
import { 
    View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image 
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { StackParamList } from "../navigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

// Sample candidate list
const candidates = [
    { id: "1", name: "Carlos Mendoza", image: require("../assets/c2.png") },
    { id: "2", name: "Maria Santos", image: require("../assets/c2.png") },
    { id: "3", name: "Ramon Villanueva", image: require("../assets/c2.png") },
    { id: "4", name: "Angela Cruz", image: require("../assets/c2.png") },
    { id: "5", name: "Victor Reyes", image: require("../assets/c2.png") },
];

const AddCandidate = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
    const [searchText, setSearchText] = useState("");

    // Filter candidates based on search
    const filteredCandidates = candidates.filter(candidate => 
        candidate.name.toLowerCase().includes(searchText.toLowerCase())
    );

    // Handle adding candidate
    const handleAddCandidate = (candidateName: string) => {
        console.log(`Added: ${candidateName}`);
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header with Back Button */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Add Candidate</Text>
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search for a candidate..."
                    value={searchText}
                    onChangeText={setSearchText}
                />
            </View>

            {/* Candidate List */}
            <FlatList
                data={filteredCandidates}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.candidateItem}>
                        <View style={styles.candidateInfo}>
                            <Image source={item.image} style={styles.candidateImage} />
                            <Text style={styles.candidateName}>{item.name}</Text>
                        </View>
                        <TouchableOpacity 
                            style={styles.addButton} 
                            onPress={() => handleAddCandidate(item.name)}
                        >
                            <Text style={styles.addButtonText}>Add</Text>
                        </TouchableOpacity>
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
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1F509A",
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    backButton: {
        marginRight: 10,
    },
    headerText: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        paddingHorizontal: 10,
        borderRadius: 8,
        margin: 15,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        paddingVertical: 10,
        fontSize: 16,
    },
    candidateItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        backgroundColor: "white",
        marginHorizontal: 15,
        marginVertical: 5,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    candidateInfo: {
        flexDirection: "row",
        alignItems: "center",
    },
    candidateImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    candidateName: {
        fontSize: 18,
    },
    addButton: {
        backgroundColor: "#E38E49",
        paddingVertical: 6,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    addButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default AddCandidate;
