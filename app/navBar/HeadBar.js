import React, {
	Component
} from 'react';
import { 
	Text,
	StyleSheet,
	TouchableHighlight,
	View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class HeadBar extends Component{
_back() {
    const {
      navigator
    } = this.props;
    if (navigator) {
      navigator.pop();
    }
  }
	render(){
		return (
			
<View style={styles.top}>
        <TouchableHighlight underlayColor="#fff" onPress={this._back.bind(this)}>
         <Icon style={styles.icon}
                name={'ios-arrow-back'} 
                size={30}
                color={'red'}/>
      </TouchableHighlight>
          
                <Text style={styles.topTitle}>{this.props.title}</Text>
        </View>
			)
			
		
		
	}
}

var styles = StyleSheet.create({
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
  topTitle: {
    fontSize: 20,
    color: 'white',
  },
});

