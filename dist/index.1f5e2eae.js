var e=new class{constructor(){this._container=document.querySelector(".app-container"),this._WIDTH=_container.getBoundingClientRect().width,this._HEIGHT=_container.getBoundingClientRect().height,this._params={appName:"graphing",width:Math.round(_WIDTH),height:_HEIGHT-45,showToolBar:!0,showAlgebraInput:!0,showMenuBar:!0},this._applet=new GGBApplet(_params,!0)}renderGGB(){this._applet.inject(element)}};document.querySelector(".app-container");const t=document.querySelector(".sidebar"),n=document.querySelector("#ggb-element"),a=document.querySelector(".welcome");e.renderGGB(n),t.addEventListener("click",(e=>{if(e.target.classList.contains("menu")){let t=e.target.dataset.unit;document.querySelector(`.sidebar__list--${t}`).classList.toggle("hidden")}else if(e.target.classList.contains("select")){a.classList.add("hidden");let t=e.target.textContent;e.target.parentElement.dataset.id,e.target.dataset.name;"Método Gráfico"!=t?n.classList.add("hidden"):n.classList.remove("hidden")}}));
//# sourceMappingURL=index.1f5e2eae.js.map
