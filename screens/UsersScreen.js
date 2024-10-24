import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function UsersScreen () { 
    return (
        <View style={styles.container}>
            <View style={styles.user}>
                <Text style={styles.name}>Nome do usuário:</Text>
                <Text>E-mail:</Text>
                <Text>Telefone:</Text>
            </View>
        </View>
    )
 }

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    user: {
        marginBottom: 20,
        padding: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
 });