import Slider from '@react-native-community/slider';
import { useState } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ModalPassword } from './src/components/modal';

let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789"

export default function App() {
  const [size, setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false);

function generatePassword(){
  
  let password = "";

  for(let i = 0 ; i < size; i++){
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  setPasswordValue(password)
  setModalVisible(true);

}

  return (
    <View style={styles.container}>
      
      <Image
      source={require("./src/assets/logo.png")}
      style={styles.logo}
      />
      
      <Text style = {styles.title}>{size} Caracteres</Text>
      <View style={styles.area}>
        <Slider
        style = {{height: 50}}
        minimumValue={6}
        maximumValue={20}
        maximumTrackTintColor='#FF0000'
        minimumTrackTintColor='#000'
        thumbTintColor='#392de9'
        value={size}
        onValueChange={(value) => setSize(Math.floor(value))}
        />
      </View>

      <TouchableOpacity style= {styles.button} onPress={generatePassword}>
        <Text style= {styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword password={passwordValue} handleclose={ () => setModalVisible(false)}/>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    marginBottom: 60,
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 8,
  },
  button:{
    backgroundColor:'#392de9',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 18,
  },
  buttonText:{
    color: '#FFF',
    fontSize: 20,
  },
  title:{
    fontSize: 30,
    fontWeight:'bold'
  }
});
