import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard} from 'react-native';

const Separator = () => <View style={styles.separator} />;

export default function App() {
  // console.log(Platform.OS)
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/images/Cat.jpeg')} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Start working</Text>
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={{...styles.form, marginBottom: isShowKeyboard ? 20 : 100}}>
            <View>
              <Text style={styles.inputTitle}>Email</Text>
              <TextInput
                style={styles.input}
                onFocus={()=>{setIsShowKeyboard(true)}}
                // onChangeText={onChangeText}
                // value={text}
              />
            </View>
            <Separator />
            <View>
              <Text style={styles.inputTitle}>Password</Text>
              <TextInput
                style={styles.input}
                onFocus={()=>{setIsShowKeyboard(true)}}
                secureTextEntry={true}
                // onChangeText={onChangeText}
                // value={text}
              />
            </View>
            <Separator />
            <TouchableOpacity
              style={styles.btn}
              onPress={()=>{keyboardHide()}}
            >
              <Text style={styles.inputTitle}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    fontSize: 54,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "red",
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  form: {
    marginHorizontal: 12,
  },
  separator: {
    marginTop: 20,
  },
  inputTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  input: {
    height: 40,
    marginTop: 5,
    padding: 10,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "red",
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212121',
    textAlign: 'center',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: Platform.OS === 'ios' ? 'transparent' : 'red',
    ...Platform.select({
      ios: {
        backgroundColor: '#d8bfd8',
      },
      android: {
        backgroundColor: '#ffc0cb',
      },
      default: {
        // other platforms, web for example
        backgroundColor: '#ffc0cb',
      },
    }),
    // backgroundColor: '#d8bfd8',
  },
});
