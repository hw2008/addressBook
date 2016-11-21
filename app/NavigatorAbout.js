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

 import About from './About';

export default class NavigatorAbout extends Component {
	constructor(props) {
		super(props);
		  
	}

	render() {  
		let defaultName = '1';
            let defaultComponent = About;
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