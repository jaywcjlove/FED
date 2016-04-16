import React, {
    StyleSheet,
    Text,
    View
} from 'react-native';


class Loading extend Components {
    render(){
        <View style={styles.container}>
            <Text>
            Loading...
            </Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color : '#bababa',
        backgroundColor : '#ffffff',
        fontSize : 12,
    }
})

module.exports = Loading;