// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import 'mint-ui/lib/style.css'
import { Header,Button,Navbar, TabItem,CellSwipe,Swipe,SwipeItem,TabContainer,TabContainerItem,Cell} from 'mint-ui'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name,Button);
Vue.component(Header.name,Header);
Vue.use(VueAxios, axios)
Vue.component(CellSwipe.name, CellSwipe);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router:router,
	template:`<div id="wrapper">	
				<App />
  			</div>`,
	components: {
		App,Header, Button ,CellSwipe,Swipe,SwipeItem,TabContainer, TabContainerItem ,Cell
	}

})