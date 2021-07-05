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
            <View style={[styles.gridbox, {flex: 3}]}>
              <View></View>
            </View>

            <View style={[styles.gridboxbtn]}>
              <View style={styles.btncontainers}>
                <View style={styles.buttonoption}>
                  <TouchableOpacity
                    onPress={() => Alert.alert('Button Pressed')}>
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Icon
                        name="checkmark-circle-outline"
                        size={50}
                        style={styles.icons}></Icon>
                    </View>

                    <Text
                      style={styles.optionstext}
                      textBreakStrategy={'simple'}>
                      Hunt Task
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.btncontainers}>
                <View style={styles.buttonoption}>
                  <TouchableOpacity
                    onPress={() => Alert.alert('Button Pressed')}>
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Icon
                        name="hammer-outline"
                        size={50}
                        style={styles.icons}></Icon>
                    </View>

                    <Text
                      style={styles.optionstext}
                      textBreakStrategy={'simple'}>
                      Post Task
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.gridboxbtn}>
              <View style={styles.btncontainers}>
                <View style={styles.buttonoption}>
                  <TouchableOpacity
                    onPress={() => Alert.alert('Button Pressed')}>
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Icon
                        name="time-outline"
                        size={50}
                        style={styles.icons}></Icon>
                    </View>

                    <Text
                      style={styles.optionstext}
                      textBreakStrategy={'simple'}>
                      History
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.btncontainers}>
                <View style={styles.buttonoption}>
                  <TouchableOpacity
                    onPress={() => Alert.alert('Button Pressed')}>
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Icon
                        name="chatbubbles-outline"
                        size={50}
                        style={styles.icons}></Icon>
                    </View>

                    <Text
                      style={styles.optionstext}
                      textBreakStrategy={'simple'}>
                      Chat
                    </Text>
                  </TouchableOpacity>
                </View>
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
    display: 'flex',
    flex: 4,
    flexDirection: 'column',
    position: 'absolute',
    // backgroundColor: 'red',
    height: '80%',
    width: '100%',
    marginTop: '25%',
    // flexDirection: 'column',
    // borderRadius: 25,
    // elevation: 10,
    // marginBottom: '20%',
    borderColor: 'transparent',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    zIndex: 2,
  },
  gridbox: {
    flex: 2,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingTop: '10%',
    paddingBottom: '10%',
    width: '100%',
    justifyContent: 'space-around',
    // padding: '10%',
    // marginTop: '15%',
    // backgroundColor: 'yellow',
  }, //please do not edit this or you will fuck up the whole grid system of the app
  gridboxbtn: {
    flex: 2,
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-around',
    // backgroundColor: 'yellow',
  }, //please do not edit this or you will fuck up the whole grid system of the app
  logoutbtn: {
    alignSelf: 'flex-end',
    color: '#ffffff',
    fontSize: 35,
    fontWeight: 'bold',
    padding: '4%',
    marginLeft: '5%',
  },
  btncontainers: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    borderWidth: 5,
    borderColor: 'transparent',
    borderRadius: 25,
    // borderColor: "#eb3b5a",
    // marginLeft: '15%',
    // marginRight: '15%',
    // marginBottom: '5%',
    // borderRadius: 15,
    // elevation: 15,
  },
  buttonoption: {
    flex: 1,
    flexDirection: 'row',
    padding: '5%',
    justifyContent: 'space-evenly',
    marginTop: '10%',
    // margin: "30%",
    // backgroundColor: "red"
  },
  optionstext: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
  },

  icons: {
    color: '#eb3b5a',
  },
});
