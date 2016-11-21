

 

  import React, {
	Component
} from 'react';
import {
	View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';　

export default class Detail extends Component{
	_back() {
    const {
      navigator
    } = this.props;
    if (navigator) {
      navigator.pop();
    }
  }

  render(){
    var content = this.props.content;
    return (
<View>
    	<View style={styles.top}>
        <TouchableHighlight underlayColor="#fff" onPress={this._back.bind(this)}>
         <Icon style={styles.icon}
                name={'ios-arrow-back'} 
                size={30}
                color={'red'}/>
      </TouchableHighlight>
          
                <Text style={styles.topTitle}>公告</Text>
        </View>
      <ScrollView>

        <View style={styles.content}>
          <Text style={{lineHeight:20,}}>{content.message}</Text>
        </View>

        <View style={[styles.luokuan, {marginTop:25}]}>
          <View style={{flex:1}}></View>
          <Text style={[styles.text, {color:'#007AFF'}]}>{content.username}</Text>
        </View>

        <View style={styles.luokuan}>
          <View style={{flex:1}}></View>
          <Text style={[styles.text, {color:'#3BC1FF'}]}>{content.time}</Text>
        </View>

      </ScrollView>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  content:{
    marginTop:20,
    marginLeft:15,
    marginRight:15,
    opacity:0.85,
  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
  },
  top: {
    height: 40,
    backgroundColor: '#0093fa',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  luokuan:{
    flex:1,
    flexDirection:'row',
    marginRight:20,
  },
  text:{
    lineHeight:20,
    width:90
  }
}); 