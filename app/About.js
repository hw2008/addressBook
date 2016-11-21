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

 
 

import FirstBar from './navBar/First';
export default class About extends Component {
	
	render(){
     
     

    return (
    	<View style={{flex:1,}}>
    	<FirstBar title={'关于'} />
    	 
       
      </View>
    );
  

	}


}

var styles = StyleSheet.create({
   
});