import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import ModalSelector from "react-native-modal-selector";
import Ionicons from "react-native-vector-icons/Ionicons";

declare module 'react-native-vector-icons/Ionicons';

// Define a type for candidates
type Candidate = {
    key: string;
    label: string;
    image: any; // Keeping as `any` since it's using `require()`
    education: string;
    experience: string;
    legislativeWork: string;
};

// Candidate data
const candidates: Candidate[] = [
    { 
        key: "1", 
        label: "Carlos Mendoza", 
        image: require("../assets/c2.png"),
        education: "University of the Philippines",
        experience: "Senator - 8 years",
        legislativeWork: "Proposed 15 bills, passed 7"
    },
    { 
        key: "2", 
        label: "Maria Santos", 
        image: require("../assets/c2.png"),
        education: "Ateneo de Manila University",
        experience: "Governor - 4 years",
        legislativeWork: "Authored 10 policies, passed 6"
    },
    { 
        key: "3", 
        label: "Jose Ramirez", 
        image: require("../assets/c2.png"),
        education: "De La Salle University",
        experience: "Mayor - 6 years",
        legislativeWork: "Implemented 12 city projects, passed 8 ordinances"
    },
    { 
        key: "4", 
        label: "Angela Dela Cruz", 
        image: require("../assets/c2.png"),
        education: "University of Santo Tomas",
        experience: "Representative - 5 years",
        legislativeWork: "Proposed 18 bills, passed 9"
    },
    { 
        key: "5", 
        label: "Fernando Reyes", 
        image: require("../assets/c2.png"),
        education: "Polytechnic University of the Philippines",
        experience: "Vice Governor - 3 years",
        legislativeWork: "Drafted 7 policies, co-authored 5 laws"
    }
];

const Compare = () => {
    const [candidate1, setCandidate1] = useState<Candidate | null>(null);
    const [candidate2, setCandidate2] = useState<Candidate | null>(null);
    const [showComparison, setShowComparison] = useState(false);

    const handleCompare = () => {
        if (!candidate1 || !candidate2) {
            alert("Please select two candidates to compare.");
            return;
        }
        setShowComparison(true);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Compare</Text>
            </View>

            <View style={styles.pickerRow}>
                <View style={styles.pickerContainer}>
                    <ModalSelector
                        data={candidates}
                        initValue="Select a candidate"
                        onChange={(option) => setCandidate1(option)}
                        selectStyle={styles.picker}
                        selectTextStyle={styles.pickerText}
                    />
                    <Ionicons name="chevron-down-outline" size={20} style={styles.icon} />
                </View>

                <View style={styles.pickerContainer}>
                    <ModalSelector
                        data={candidates}
                        initValue="Select a candidate"
                        onChange={(option) => setCandidate2(option)}
                        selectStyle={styles.picker}
                        selectTextStyle={styles.pickerText}
                    />
                    <Ionicons name="chevron-down-outline" size={20} style={styles.icon} />
                </View>
            </View>

            <View style={styles.candidateDisplay}>
                {candidate1 && (
                    <View style={styles.candidateCard}>
                        <Image source={candidate1.image} style={styles.image} />
                        <Text style={styles.candidateName}>{candidate1.label}</Text>
                    </View>
                )}
                {candidate2 && (
                    <View style={styles.candidateCard}>
                        <Image source={candidate2.image} style={styles.image} />
                        <Text style={styles.candidateName}>{candidate2.label}</Text>
                    </View>
                )}
            </View>

            <TouchableOpacity style={styles.compareButton} onPress={handleCompare}>
                <Text style={styles.buttonText}>Compare</Text>
            </TouchableOpacity>

            {showComparison && candidate1 && candidate2 && (
                <View style={styles.comparisonTable}>
                    {/* Education */}
                    <Text style={styles.title}>Education</Text>
                    <View style={styles.row}>
                        <Text style={styles.value}>{candidate1.education}</Text>
                        <View style={styles.separator} />
                        <Text style={styles.value}>{candidate2.education}</Text>
                    </View>

                    {/* Government Experience */}
                    <Text style={styles.title}>Government Experience</Text>
                    <View style={styles.row}>
                        <Text style={styles.value}>{candidate1.experience}</Text>
                        <View style={styles.separator} />
                        <Text style={styles.value}>{candidate2.experience}</Text>
                    </View>

                    {/* Legislative Work */}
                    <Text style={styles.title}>Legislative Work</Text>
                    <View style={styles.row}>
                        <Text style={styles.value}>{candidate1.legislativeWork}</Text>
                        <View style={styles.separator} />
                        <Text style={styles.value}>{candidate2.legislativeWork}</Text>
                    </View>
                </View>
            )}
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#fff" },
    header: { alignItems: "center", marginBottom: 20 },
    headerText: { fontSize: 24, fontWeight: "bold" },
    pickerRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
    pickerContainer: { flex: 1, marginHorizontal: 5 },
    picker: { padding: 10, borderWidth: 1, borderColor: "#ccc", borderRadius: 5 },
    pickerText: { fontSize: 16 },
    icon: { position: "absolute", right: 10, top: 15 },
    candidateDisplay: { flexDirection: "row", justifyContent: "space-around", marginBottom: 20 },
    candidateCard: { alignItems: "center" },
    image: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
    candidateName: { fontSize: 16, fontWeight: "bold" },
    compareButton: { backgroundColor: "#007bff", padding: 10, borderRadius: 5, alignItems: "center" },
    buttonText: { color: "#fff", fontSize: 18 },
    comparisonTable: { marginTop: 20 },
    title: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
    row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
    value: { fontSize: 16, flex: 1, textAlign: "center" },
    separator: { width: 1, backgroundColor: "#ccc", height: "100%" }
});

export default Compare;
