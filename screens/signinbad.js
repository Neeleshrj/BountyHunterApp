import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const SignIn = () => {
  return (
    // <View style={styles.container}>
    //   <View style={styles.innercontainer}>

    <KeyboardAvoidingView style={styles.signinarea} behavior={Platform.OS === "ios" ? "padding" : null}>
      <LinearGradient
        // style={styles.innercontainer}
        colors={['#fe5f75', '#fc9842']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <View style={styles.container}>

        
        <Text style={styles.welcometext}>Welcome back!</Text>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={[styles.inputarea, {marginTop: '10%'}]}>
            <TextInput
              style={styles.inputbox}
              placeholder="Email"
              autoCompleteType={'email'}></TextInput>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inputarea}>
            <TextInput
              style={styles.inputbox}
              placeholder="Password"
              secureTextEntry={true}
              autoCompleteType={'email'}></TextInput>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.inputarea}>
          <Text style={styles.signinbtn} onPress={() => Alert.alert('Sign In')}>
            Sign In
          </Text>
        </View>
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>

    //   </View>
    // </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Nunito-SemiBold',
  },
  innercontainer: {
    flex: 1,
    backgroundColor: '#85FFBD',
    zIndex: 1,
  },
  signinarea: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'red',
    marginTop: '20%',
    alignSelf: 'center',
  },
  welcometext: {
    margin: '5%',
    fontSize: 65,
    color: '#ffffff',
    alignSelf: 'flex-start',
  },
  inputarea: {
    flex: 1,
    // marginTop: "15%",
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    backgroundColor: 'yellow',
    zIndex: 3,
  },
  inputbox: {
    marginTop: '2%',
    marginBottom: '2%',
    padding: '3%',
    fontSize: 20,
    borderRadius: 30,
    backgroundColor: '#ffffff',
    width: '85%',
    justifyContent: 'center',
    zIndex: 3,
  },
  signinbtn: {
    marginTop: '2%',
    marginBottom: '2%',
    padding: '2%',
    fontSize: 28,
    width: '40%',
    textAlign: 'center',
    backgroundColor: '#26de81',
    borderRadius: 25,
    fontWeight: 'bold',
  },
});
