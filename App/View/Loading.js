import React, {
    ActivityIndicatorIOS,
    StyleSheet,
    Text,
    View
} from 'react-native';

class Loading extends React.Component{
    render(){
        return(
            <View style={[styles.container, styles.centerText]}>
                <ActivityIndicatorIOS
                    animating={this.props.isLoading}
                    style={styles.spinner}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : '#ffffff'
    },
    centerText: {
        alignItems: "center",
    },
    spinner: {
        width: 50,
    }
})

module.exports = Loading;