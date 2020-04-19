import React, { Component } from 'react';
import {
    View,
    Button,
  } from 'react-native';
export default class ButtonComponent extends Component {

    render(){
        let questionOutput=[]
        return(
            <View style={{marginLeft:70,marginRight:70}}>
            <Button color='#5d5d5d' title="Next" onPress={()=>{
              this.props.dataItem.map((element) => {
                element.value && element.flag===null && questionOutput.push({'column':(element.id%6)+1,'row':Math.trunc((element.id/6))+1,'value':element.value})
              })
              this.props.setOutputData(questionOutput)
              //  Alert.alert(JSON.stringify(questionOUtput));
            }}/>
            </View>

        );
    }

}