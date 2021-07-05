import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const SplashScreen2 = ({navigation}) => {
  return (
    <LinearGradient
      style={{flex: 1}}
      colors={['#fe5f75', '#fc9842']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <View style={styles.container}>
        <View style={styles.topbar}>
          <View style={styles.left}>
            <TouchableOpacity>
              <Icon
                name="chevron-back-outline"
                size={35}
                style={styles.icons}
                onPress={() => navigation.navigate('Splash1')}
              ></Icon>
            </TouchableOpacity>
          </View>
          <View style={styles.right}>
            <TouchableOpacity>
              <Text
                style={styles.toptext}
                onPress={() => navigation.navigate('SignIn')}>
                Skip
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.innercontainer}>
          <View style={styles.header}>
            <Text style={styles.headertext}>Select a Task and Complete It</Text>
            <Image
              style={styles.image}
              source={require('../svgs/splash2.png')}
            />
            <TouchableOpacity>
              <View style={styles.btnContainer}>
                <Text
                  style={{fontSize: 20, textAlign: 'center'}}
                  onPress={() => navigation.navigate('Splash3')}>
                  Next
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default SplashScreen2;

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
    flex: 0.1,
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    // justifyContent: 'flex-end',
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'blue',
    padding: '5%',
    justifyContent: 'flex-start',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'green',
    justifyContent: 'flex-end',
    padding: '3%',
  },
  icons: {
    color: '#ffffff',
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
    borderRadius: 50,
    marginBottom: '2%',
    alignSelf: 'flex-end',
    padding: '5%',
    width: '25%',
    // justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000000',
    elevation: 5,
    fontFamily: 'Nunito-SemiBold',
    marginRight: '5%',
  },
  image: {
    width: '100%',
    height: '35%',
    zIndex: 3,
    padding: '10%',
    marginBottom: '5%',
  },
  
});
