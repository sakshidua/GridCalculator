import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
  } from 'react-native';
import GridComponent from '../component/GridComponent';
import VirtualKeyboardComponent from '../component/VirtiualKeyboardComponent';
import ButtonComponent from '../component/ButtonComponent';
import {modalarray} from '../util/Modal'
export default class MainContainer extends Component {
    constructor() {
        super();
        this.state = {
          dataItem: {},
          noOfColumn:6,
        };
      }
      componentDidMount() {
        let noofcolm=6;
        let items = Array.apply(null, Array(36)).map((v, i) => {
          let itemObj = {id:i,value:null,flag:null};
          if(modalarray && modalarray.questionInput){
            modalarray.questionInput.find(function (item) {
              if((item.row-1)*noofcolm+item.column-1===i){
                return(itemObj={id:i,value:item.value,flag:'input'});
              }else{
                itemObj = { id: i, value: null,flag:null };
              }
            });
          }
          return itemObj;
        });
        this.setState({
          dataItem: items,
        });
      }
      getKeyPressed = (value) => {
        if(value.value==='left'){
          this.setState({
            pressedColumn:this.state.pressedColumn-1
          })
        }else if(value.value==='right'){
          this.setState({
            pressedColumn:this.state.pressedColumn+1
          })
        }else if(value.value==='up'){
          this.setState({
            pressedColumn:this.state.pressedColumn-6
          })
        }else if(value.value==='down'){
          this.setState({
            pressedColumn:this.state.pressedColumn+6
          })
        }else{
        if (this.state.dataItem && this.state.pressedColumn) {
          this.state.dataItem.find(element =>  element.id == this.state.pressedColumn).value = value.value;
          this.setState({
            dataItem: this.state.dataItem,
          });
        }
      }
    }
      getColumnPressed = (value) =>{
        this.setState({pressedColumn:value})
      }

      setOutputData = (value) =>{
        this.setState({questionOutput:value})
      }
      render() {
        return (
          <View style={styles.MainContainer}>
           <GridComponent dataItem = {this.state.dataItem} getColumnPressed={this.getColumnPressed} noOfColumn={this.state.noOfColumn} pressedColumn={this.state.pressedColumn}/>
           <ButtonComponent setOutputData={this.setOutputData} dataItem={this.state.dataItem}/>
           <Text style={{marginTop:20,marginBottom:20,textAlign:'center'}}>{JSON.stringify(this.state.questionOutput)}</Text>
           <VirtualKeyboardComponent getKeyPressed ={this.getKeyPressed}/>
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      MainContainer: {
        justifyContent: 'center',
        flex: 1,
        paddingTop: 10,
        paddingLeft: 5,
        paddingRight: 5,
      },
    });