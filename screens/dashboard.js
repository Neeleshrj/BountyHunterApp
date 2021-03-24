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
          colors={['#85FFBD', '#FFFB7D']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}>
          <View style={{flexDirection: 'row', padding: '2%'}}>
            <TouchableOpacity>
              <Icon
                name="options-outline"
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
              <TouchableOpacity>
                <Icon name="cube-outline" size={50} style={styles.icons}>
                  <Text
                    onPress={() => Alert.alert('Button Pressed')}
                    style={styles.optionstext}>
                    Hunt Task
                  </Text>
                </Icon>
              </TouchableOpacity>
            </View>

            <View style={[styles.btncontainers, {backgroundColor: '#34e7e4'}]}>
              <TouchableOpacity>
                <Icon
                  name="checkmark-circle-outline"
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

            <View style={[styles.btncontainers, {backgroundColor: '#ff793f'}]}>
              <TouchableOpacity>
                <Icon name="eye-outline" size={50} style={styles.icons}>
                  <Text
                    onPress={() => Alert.alert('Button Pressed')}
                    style={styles.optionstext}>
                    {'\t\t'}History
                  </Text>
                </Icon>
              </TouchableOpacity>
            </View>

            <View style={[styles.btncontainers, {backgroundColor: '#33d9b2'}]}>
              <TouchableOpacity>
                <Icon name="chatbox-outline" size={50} style={styles.icons}>
                  <Text
                    onPress={() => Alert.alert('Button Pressed')}
                    style={styles.optionstext}>
                    {'\t\t'}Chat
                  </Text>
                </Icon>
              </TouchableOpacity>
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
    fontFamily: 'sans-serif-condensed',
  },
  innercontainer: {
    flex: 1,
    backgroundColor: '#85FFBD',
    zIndex: 1,
  },
  card: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#ffffff',
    height: '80%',
    width: '90%',
    flexDirection: 'column',
    borderRadius: 25,
    elevation: 10,
    marginTop: '30%',
    marginBottom: '10%',
    borderColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  logoutbtn: {
    alignSelf: 'flex-end',
    color: 'black',
    fontSize: 45,
    fontWeight: 'bold',
    padding: '4%',
    marginLeft: '5%',
    // marginTop: '5%',
    // marginBottom: '5%',
    // marginRight: '5%',
  },

  btncontainers: {
    width: '90%',
    padding: '8%',
    alignContent: 'center',
    textAlign: 'center',
    backgroundColor: '#ff5e57',
    marginLeft: '15%',
    marginRight: '15%',
    marginBottom: '5%',
    borderRadius: 15,
    justifyContent: 'center',
  },

  optionstext: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 30,
    color: '#ffffff',
    padding: '5%',
  },

  icons: {
    color: '#ffffff',
  },
});
