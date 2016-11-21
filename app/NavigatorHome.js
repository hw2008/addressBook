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

 import Home from './home';

export default class NavigatorHome extends Component {
	constructor(props) {
		super(props);
		  
	}

	render() {  
		let defaultName = '3';
            let defaultComponent = Home;
            let params = {};
            return (
            <Navigator
              initialRoute={{ name: defaultName, component: defaultComponent }}
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