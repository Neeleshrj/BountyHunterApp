import React from 'react';
import {
  Text,  
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';


const Dashboard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.innercontainer}>
                    <TouchableOpacity>
                        <Text
                            onPress={() => Alert.alert('Button Pressed')}
                            style={styles.logoutbtn}
                        >
                                Logout
                        </Text>  
                    </TouchableOpacity>
                    <View style={styles.card}>
                        <TouchableOpacity>
                            <Text
                                onPress={() => Alert.alert('Button Pressed')}
                                style={styles.optionsButtons}
                            >

                            </Text>
                        </TouchableOpacity>
                    </View>
                         
            </View>
        </View>
    );
}

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex:1,
        fontFamily: "sans-serif-condensed",
        
    },
    innercontainer: {
        flex:1,
        backgroundColor: '#0be881',
        zIndex:1,
       
    },
    card: {
        flex:1,
        position: "absolute",
        backgroundColor: '#ffffff',
        height: '80%',
        width: '90%',
        flexDirection: 'row',
        borderRadius: 25,
        elevation: 10,
        marginTop: '30%',
        marginBottom: '10%',
        borderColor: 'transparent',
        justifyContent: 'center',
        alignSelf:'center',
    },
    logoutbtn: {
        alignSelf: 'flex-end',
        backgroundColor: '#f53b57',
        color: "#d2dae2",
        fontSize: 25,
        fontWeight: 'bold',
        padding: '5%',
        marginTop: '5%',
        marginBottom: '5%',
        marginRight: '5%',
        borderRadius: 15,
    }
})