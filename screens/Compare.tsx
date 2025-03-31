import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import ModalSelector from "react-native-modal-selector";
import Ionicons from "react-native-vector-icons/Ionicons";

declare module 'react-native-vector-icons/Ionicons';

const candidates = [
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
    const [candidate1, setCandidate1] = useState(null);
    const [candidate2, setCandidate2] = useState(null);
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

            {showComparison && (
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        alignItems: "center",
    },
    header: {
        backgroundColor: "#1F509A",
        paddingVertical: 20,
        alignItems: "center",
        width: "100%",
    },
    headerText: {
        marginTop: 40,
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
    },
    pickerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginVertical: 15,
    },
    pickerContainer: {
        flex: 1,
        marginHorizontal: 10,
        position: "relative",
    },
    picker: {
        backgroundColor: "#D9D9D9",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
    },
    pickerText: {
        color: "black",
        fontSize: 16,
    },
    icon: {
        position: "absolute",
        right: 15,
        top: "50%",
        marginTop: -10,
        color: "#1F509A",
    },
    candidateDisplay: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 20,
        width: "100%",
    },
    candidateCard: {
        alignItems: "center",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    candidateName: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: "bold",
    },
    compareButton: {
        marginTop: 30,
        backgroundColor: "#E38E49",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    comparisonTable: {
        marginTop: 20,
        width: "90%",
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#1F509A",
        textAlign: "center",
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        paddingVertical: 5,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    value: {
        flex: 1,
        fontSize: 16,
        textAlign: "center",
    },
    separator: {
        width: 1,
        backgroundColor: "#ccc",
        height: "100%",
        marginHorizontal: 10,
    }
});

export default Compare;
