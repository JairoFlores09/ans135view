'use strict';

class TreeView{
	_menu_item;

	constructor(){
		this._menu_item = document.querySelector(".sidebar");	
	}

	init(){
		this._menu_item.addEventListener('click', (e)=>{
			if(e.target.classList.contains('menu')){
				let unit = e.target.dataset.unit;
				document.querySelector(`.sidebar__list--${unit}`).classList.toggle("hidden");
			}
		});
	}
}

export default new TreeView();