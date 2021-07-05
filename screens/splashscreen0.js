import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen1 = ({navigation}) => {
  return (
    <LinearGradient
      style={{flex: 1}}
      colors={['#fe5f75', '#fc9842']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <View style={styles.container}>
        <View style={styles.topbar}>
          <TouchableOpacity>
            <Text
              style={styles.toptext}
              onPress={() => navigation.navigate('SignIn')}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.innercontainer}>
          <View style={styles.header}>
            <Text style={styles.headertext}>Welcome to Bounty Hunter!</Text>
            <Image
              style={styles.image}
              source={require('../svgs/splash0.png')}
            />
            <TouchableOpacity>
              <View style={styles.btnContainer}>
                <Text
                  style={{fontSize: 20, textAlign: 'center'}}
                  onPress={() => navigation.navigate('Splash1')}>
                  Get Started
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default SplashScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'yellow',
    // flexDirection: 'row',
  },
  innercontainer: {
    flex: 0.9,
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  topbar: {
    flexDirection: 'row',
    flex: 0.2,
    // backgroundColor: 'green',
    padding: '3%',
    justifyContent: 'flex-end',
  },
  toptext: {
    color: '#ffffff',
    fontSize: 22,
    fontFamily: 'Nunito-SemiBold',
    // backgroundColor: 'blue',
    padding: '7%',
  },
  header: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  headertext: {
    fontSize: 60,
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
    padding: '8%',
  },
  btnContainer: {
    backgroundColor: '#ff3f34',
    opacity: 0.7,
    borderRadius: 25,
    marginBottom: '2%',
    alignSelf: 'center',
    padding: '3%',
    width: '50%',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000000',
    elevation: 5,
    fontFamily: 'Nunito-SemiBold',
  },
  image: {
    width: '100%',
    height: '30%',
    zIndex: 3,
    padding: '10%',
    marginBottom: '5%',
  },
});
