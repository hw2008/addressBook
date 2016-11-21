import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Navigator,
	StatusBar,
	ScrollView,
	Text,
	View
} from 'react-native';

 import Message from './Message';

export default class NavigatorGonggao extends Component {
	constructor(props) {
		super(props);
		  
	}

	render() {  
		let defaultName = '2';
            let defaultComponent = Message;
             
            return (
            <Navigator
              initialRoute={{ name: defaultName, component: defaultComponent, params: {data:this.props.data} }}
		configureScene = {
			(route) => {
				return Navigator.SceneConfigs.VerticalDownSwipeJump;
			}
		}
              renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator} />
              }} />
            );
	}
}

var styles = StyleSheet.create({
	 
});