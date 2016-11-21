import React, {
	Component
} from 'react';
import {
	View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

import Item from './message/Item';
import Detail from './message/Detail';
import FirstBar from './navBar/First';

import Util from './util';

export default class Message extends Component {
	
	render(){
    var contents = [];
    var items = [];
    console.log();
    if(this.props.data.status){
      contents = this.props.data.data;
    }
    for(var i = 0; i < contents.length; i++){
      items.push(
        <Item
          data={contents[i]}
          nav={this.props.navigator}
          component={Detail}
          key={contents[i].messageid}
          text={contents[i].message}
          name={contents[i].username}
          date={contents[i].time}/>
      );
    }

    return (
    	<View style={{flex:1,}}>
    	<FirstBar title={'公告'} />
    	<View style={{height:50,padding:7,}}>
          <TextInput style={styles.search} placeholder="搜索"/>
        </View>
      <ScrollView style={styles.container}>
        
        <View style={{backgroundColor:'#fff', borderTopWidth:1, borderTopColor:'#ddd'}}>
          {items}
        </View>
      </ScrollView>
      </View>
    );
  

	}


}

var styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F5F5F5',
    flexDirection:'column', 
  },
  search:{
    height:35,
    borderWidth:Util.pixel,
    borderColor:'#ccc',
    paddingLeft:10,
    borderRadius:6,
    backgroundColor:'#fff',
  }
});