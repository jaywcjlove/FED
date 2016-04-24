'use strict';

import React , {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    // TouchableHighlight
} from 'react-native'


export default class Button extends React.Component{
    
    constructor(props) {
      super(props);
      this.state = {status:1};
    }
    constomPressHandler = () => {
        // alert('你摁下了按钮，当前状态是'+this.state.status)
        const {onPress} = this.props
        this.disable()
        onPress&&(onPress(this.enable))
    }
    enable = () => {
        this.setState({
            disable:false
        })
    }
    disable = () => {
        this.setState({
            disable:true
        })
    }
    render(){
        const {text} = this.props
        return(
            <TouchableOpacity
             disable={this.state.disable}
             onPress={this.constomPressHandler}
             style={[styles.buttons,this.state.disable && styles.disable]}>
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
    disable:{
        backgroundColor:'gray'
    },
    buttonsText:{
        textAlign:'center',
        color:'#fff'
    }
})