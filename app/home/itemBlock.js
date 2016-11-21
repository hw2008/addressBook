import React, {
	Component
} from 'react';
import {
	StyleSheet,
	TouchableHighlight,
	Text,
	View
} from 'react-native';

import Address from './address';
import Util from './../util';
import Service from './../service'; 
export default class ItemBlock extends Component {
	constructor(props) {
		super(props);


	}

	render() {
		var size = {
			width: parseInt(this.props.width),
			height: parseInt(this.props.width),
			backgroundColor: this.props.color,
		};
		return (
			<TouchableHighlight underlayColor="#fff" onPress={this._pressButton.bind(this)}>
        <View style={[styles.itemBlock, size]}>
          <View>
            <Text style={styles.font18}>{this.props.title}</Text>
          </View>
          <View>
            <Text style={styles.font10}>{this.props.partment}</Text>
          </View>
        </View>
      </TouchableHighlight>
		);
	}

	_pressButton() {
		const { navigator } = this.props;
		const key = Util.key;
    	const partment = this.props.partment;
    	const path = Service.host + Service.getUser; 
		Util.post(path, {
      key: key,
      partment : partment
    }, function(data){
      console.log(data);
    	if(navigator) { 
            navigator.push({
                name: 'SecondPageComponent',
                component: Address,
                params:{
          			   data: data
  			         }
            })
        } 
    }.bind(this));   
    }
}

var styles = StyleSheet.create({
	itemBlock: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		marginLeft: 10,
	},
	font18: {
		color: '#fff',
		fontSize: 18,
		fontWeight: '500',
	},
	font10: {
		color: '#fff',
		fontSize: 10,
	},
});