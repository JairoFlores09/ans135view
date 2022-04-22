'use strict';

import GGBView from "./views/GeogebraView.js";
import TreeView from "./views/TreeView.js";
import {requestData} from "./utilities.js";

const categories = document.querySelectorAll(".sidebar__list");
const ggb_element = document.querySelector('#ggb-element');
const welcome = document.querySelector('.welcome');

window.addEventListener('load', ()=>{
	GGBView.renderGGB(ggb_element);
});


TreeView.init();

categories.forEach(category => {
	category.addEventListener('click', (e)=>{
		let element = e.target;
		if(element.classList.contains('select')){
			welcome.classList.add('hidden');
			
			requestData(element);		
		}
	});
});








