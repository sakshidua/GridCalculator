import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    TouchableHighlight,
    } from 'react-native';
import {keys} from '../util/Keys'
export default class VirtualKeyboardComponent extends Component {

    render(){
        return(
            <View style={styles.MainContainer}>
            <FlatList
            data={keys}
            renderItem={({ item, index }) => (
            <View
            key={index}
            style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#5d5d5d',
            }}>
            <View
            style={{
            backgroundColor: '#fff',
            borderRadius: 5,
            paddingTop: 20,
            margin: 5,
            width: 40,
            flex: 0.6,
            height: 50,
            }}>
           <TouchableHighlight onPress={() => this.props.getKeyPressed(item)}>
            <Text
            style={{
            color: '#5d5d5d',
            textAlign: 'center',
            textAlignVertical: 'center',
            fontSize: 17,
            fontWeight: 'bold',
            lineHeight: 17,
            }}>
            {item.key}
            </Text>
            </TouchableHighlight>
            </View>
            </View>
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            keyExtractor={(item, index) => index.toString()}
            />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    MainContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingBottom: 30,
    height: 80,
    },
    });