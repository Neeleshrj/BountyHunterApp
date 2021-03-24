import React from 'react';
import {
  Text,  
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


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
                        <View style={styles.btncontainers}>
                            <TouchableOpacity>
                                <Icon
                                    name="cube-outline"
                                    backgroundColor="#3b5998"
                                    size={50}
                                    style={styles.icons}
                                >
                                        <Text
                                            onPress={() => Alert.alert('Button Pressed')}
                                            style={styles.optionstext}
                                        >
                                            Hunt Task
                                        </Text>                          
                                </Icon>
                            </TouchableOpacity>
                            
                        </View>

                        <View style={[styles.btncontainers,{backgroundColor: "#34e7e4"}]}>
                            <TouchableOpacity>
                                <Icon
                                    name="checkmark-circle-outline"
                                    backgroundColor="#3b5998"
                                    size={50}
                                    style={styles.icons}
                                >
                                        <Text
                                            onPress={() => Alert.alert('Button Pressed')}
                                            style={styles.optionstext}
                                        >
                                            Post Task
                                        </Text>                          
                                </Icon>
                            </TouchableOpacity>
                            
                        </View>

                        <View style={[styles.btncontainers,{backgroundColor: "#ff793f"}]}>
                            <TouchableOpacity>
                                <Icon
                                    name="eye-outline"
                                    backgroundColor="#3b5998"
                                    size={50}
                                    style={styles.icons}
                                >
                                        <Text
                                            onPress={() => Alert.alert('Button Pressed')}
                                            style={styles.optionstext}
                                        >
                                            {"\t\t"}History
                                        </Text>                          
                                </Icon>
                            </TouchableOpacity>
                            
                        </View>

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
        flexDirection: 'column',
        borderRadius: 25,
        elevation: 10,
        marginTop: '30%',
        marginBottom: '10%',
        borderColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
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
    },

    btncontainers: {
        
        width: '80%',
        padding: '5%',
        alignContent: "center",
        textAlign: 'justify',
        backgroundColor: '#ff5e57',
        marginLeft: '15%',
        marginRight: '15%',
        marginBottom: '5%',
        borderRadius: 25,
        justifyContent: 'flex-end',
    },

    optionstext: {
        alignSelf: 'center',
        fontSize: 30,
        color: '#ffffff',
        padding: "5%",
    },
    
    icons:{
        paddingVertical: '5%',
        marginRight: '10%',
        
    }
})