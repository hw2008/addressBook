import React, {
	Component
} from 'react';
import { 
	Text,
	StyleSheet,
	View
} from 'react-native';

export default class FirstBar extends Component{

	render(){
		return (
<View style={styles.top}>
					<Text style={styles.topTitle}>{this.props.title}</Text>
				</View>
			)
			
		
		
	}
}

var styles = StyleSheet.create({
	top: { 
		height: 40,
		backgroundColor: '#0093fa',
		alignItems: 'center',
		justifyContent: 'center',
	},
	topTitle: {
		fontSize: 20, 
		color: 'white',
	} 
});

