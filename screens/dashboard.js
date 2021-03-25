import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <LinearGradient
          style={styles.innercontainer}
          colors={['#fe5f75', '#fc9842']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}>
          <View style={{flexDirection: 'row', padding: '2%'}}>
            <TouchableOpacity>
              <Icon
                name="menu-outline"
                style={[
                  styles.logoutbtn,
                  {alignSelf: 'flex-start', marginRight: '50%'},
                ]}
                onPress={() => Alert.alert('Settings')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                name="log-out-outline"
                style={styles.logoutbtn}
                onPress={() => Alert.alert('Logout')}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <View style={styles.btncontainers}>
              <View style={styles.sidelabel}></View>
              <View style={styles.buttonoption}>
                <TouchableOpacity>
                  <Icon name="checkmark-circle-outline" size={50} style={styles.icons}>
                    <Text
                      onPress={() => Alert.alert('Button Pressed')}
                      style={styles.optionstext}
                      textBreakStrategy={'simple'}>
                      Hunt Task
                    </Text>
                  </Icon>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.btncontainers}>
              <View
                style={[styles.sidelabel, {backgroundColor: '#fed330'}]}></View>
              <View style={styles.buttonoption}>
                <TouchableOpacity>
                  <Icon
                    name="hammer-outline"
                    size={50}
                    style={styles.icons}>
                    <Text
                      onPress={() => Alert.alert('Button Pressed')}
                      style={styles.optionstext}>
                      Post Task
                    </Text>
                  </Icon>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.btncontainers}>
              <View
                style={[styles.sidelabel, {backgroundColor: '#334DE0'}]}></View>
              <View style={styles.buttonoption}>
                <TouchableOpacity>
                  <Icon name="time-outline" size={50} style={styles.icons}>
                    <Text
                      onPress={() => Alert.alert('Button Pressed')}
                      style={styles.optionstext}>
                      History
                    </Text>
                  </Icon>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.btncontainers}>
              <View
                style={[styles.sidelabel, {backgroundColor: '#D6A2E8'}]}></View>
              <View style={styles.buttonoption}>
                <TouchableOpacity>
                  <Icon name="chatbubbles-outline" size={50} style={styles.icons}>
                    <Text
                      onPress={() => Alert.alert('Button Pressed')}
                      style={styles.optionstext}>
                      Chat
                    </Text>
                  </Icon>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innercontainer: {
    flex: 1,
    backgroundColor: '#85FFBD',
    zIndex: 1,
  },
  card: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    height: '80%',
    width: '100%',
    flexDirection: 'column',
    // borderRadius: 25,
    // elevation: 10,
    marginTop: '30%',
    marginBottom: '10%',
    borderColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    zIndex: 2,
  },
  logoutbtn: {
    alignSelf: 'flex-end',
    color: '#ffffff',
    fontSize: 35,
    fontWeight: 'bold',
    padding: '4%',
    marginLeft: '5%',
  },

  btncontainers: {
    // flex: 0.3,
    flexDirection: 'row',
    width: '90%',
    height: '20%',
    backgroundColor: '#ffffff',
    marginLeft: '15%',
    marginRight: '15%',
    marginBottom: '5%',
    borderRadius: 15,
    elevation: 15,
  },
  sidelabel: {
    flex: 0.1,
    backgroundColor: '#55E6C1',
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
  },

  buttonoption: {
    flex: 0.9,
    padding: '10%',
    alignItems: 'stretch',
    // margin: "5%",
    // backgroundColor: "red"
  },
  optionstext: {
    fontSize: 28,
    color: '#000000',
    // backgroundColor: "red",
    fontFamily: 'Nunito-Bold',
  },

  icons: {
    color: '#eb3b5a',
  },
});
