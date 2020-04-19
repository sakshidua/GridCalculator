import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text,
    TouchableHighlight,
  } from 'react-native';
  import {modalarray} from '../util/Modal'
export default class GridComponent extends Component {
    render() {
    return (
    <FlatList
    data={this.props.dataItem}
    renderItem={({ item }) => (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <TouchableHighlight onPress={() => item.flag===null && this.props.getColumnPressed(item.id)}>
        <View
          style={{
            backgroundColor: this.props.pressedColumn===item.id ?'#5d5d5d':'#fff',
            borderWidth: 1,
            borderColor: '#c6eafd',
            paddingTop: 40,
            margin: 0,
            //  width: 20,
               height:60
          }} 
        >
         { 
           item.value && <Text style={{textAlign:'center'}}>{item.value}</Text>
         } 
          </View>
          </TouchableHighlight>
      </View>
    )}
    //Setting the number of column
    numColumns={this.props.noOfColumn}
    keyExtractor={(item, index) => index.toString()}
  />
  );
}
}