import * as Clipboard from "expo-clipboard";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function ModalPassword({ password, handleclose }) {  // Desestruturando as props

    async function handleCopyPassword() {
        await Clipboard.setStringAsync(password)
        alert("Senha salva com sucesso!")
        handleclose();
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha Gerada!</Text>

                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.text}>
                        {password}
                    </Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleclose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content:{
        backgroundColor: "#FFF",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    title:{
        fontSize: 25,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 20,
    },
    innerPassword:{
        backgroundColor: "#0e0e0e",
        width: '90%',
        padding: 14,
        borderRadius: 8,
    },
    text:{
        color: "#FFF",
        textAlign:'center',
        justifyContent:'center',
        fontSize: 25,
        fontWeight: "bold",
    },
    buttonArea:{
        flexDirection: "row",
        width: "90%",
        marginTop: 8,
        alignItems: "center",
        justifyContent: "space-between"
    },
    button:{
        flex:1,
        backgroundColor:"#A5BEFA",
        alignItems: "center",
        marginTop: 14,
        marginBottom: 14,
        padding: 8,
        borderRadius: 8,
    },
    buttonSave:{
        backgroundColor:"#392DE9",
        borderRadius: 8,
    },
    buttonSaveText:{
        color:"#FFF",
        fontWeight: 'bold'
    },
    buttonText:{
        color:"#000",
        fontWeight: 'bold',
        fontSize: 25
    }
})
