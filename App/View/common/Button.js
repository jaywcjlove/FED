'use strict';

import React , {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native'


export default class Button extends React.Component{
    
    constructor(props) {
      super(props);
      this.state = {status:1};
    }
    constomPressHandler = () => {
        // alert('你摁下了按钮，当前状态是'+this.state.status)
        const {onPress} = this.props
        onPress&&(onPress())
    }
    render(){
        const {text} = this.props
        return(
            <TouchableOpacity
             onPress={this.constomPressHandler}
             style={styles.buttons}>
                <Text style={styles.buttonsText}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    buttons:{
        backgroundColor:'green',
        height: 24,
        width:110,
        borderRadius:10,
        justifyContent:'center',
        overflow:'hidden'
    },
    buttonsText:{
        textAlign:'center',
        color:'#fff'
    }
})