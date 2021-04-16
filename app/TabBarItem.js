import React from 'react';
import { Text, TouchableHighlight, StyleSheet} from 'react-native'

const TabBarItem = ({border, title, selected, setType, type}) => (
    <TouchableHighlight
    underlayColor='#EFEFEF'
    onPress={setType}
    style={[
        styles.item, selected ? style.selected:null,
        border ? styles.border : null,
        type === title ? styles.selected : null
    ]}>
    <Text style={[ styles.itemText, type === title ? styles.bold : null]}>
    {title}
    </Text>
    </TouchableHighlight>
)

const styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    vorder: {
        borderLeftWidth: 1,
        borderLeftColor:'#dddddd'
    },
    itemText: {
        color: '#777777',
        fontSize: 16
    },
    selected: {
        backgroundColor: '#ffffff'
    },
    bold: {
        fontWeight: 'bold'
    }
})

export default TabBarItem