'use strict';

class GGBView {
	constructor(){
		this._container = document.querySelector('.app-container');
		this._WIDTH = this._container.getBoundingClientRect().width;
		this._HEIGHT = this._container.getBoundingClientRect().height;
		//'width': (Math.round(this._WIDTH)),
		//'height': (this._HEIGHT - 45),
		this._params = {
			"id":"ggbApplet",
            "appName":"graphing",
           	"width": this._WIDTH,
           	"height": (this._HEIGHT),
            "showToolBar":true,
            "showMenuBar":true,
            "showAlgebraInput":true,
            "errorDialogsActive":true,
		}

		this._applet = new GGBApplet(this._params,true);
	}

	renderGGB(element){
		this._applet.inject(element);
	}
}

export default new GGBView();