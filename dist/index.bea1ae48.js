var t=new class{constructor(){this._container=document.querySelector(".app-container"),this._WIDTH=this._container.getBoundingClientRect().width,this._HEIGHT=this._container.getBoundingClientRect().height,this._params={appName:"graphing",width:Math.round(this._WIDTH),height:this._HEIGHT-45,showToolBar:!0,showAlgebraInput:!0,showMenuBar:!0},this._applet=new GGBApplet(this._params,!0)}renderGGB(t){this._applet.inject(t)}};var e=new class{_menu_item;constructor(){this._menu_item=document.querySelector(".sidebar")}init(){this._menu_item.addEventListener("click",(t=>{if(t.target.classList.contains("menu")){let e=t.target.dataset.unit;document.querySelector(`.sidebar__list--${e}`).classList.toggle("hidden")}}))}};const n=document.querySelector(".form-container"),i=document.querySelectorAll(".sidebar__list"),s=document.querySelector("#ggb-element"),a=document.querySelector(".welcome");window.addEventListener("load",(()=>{t.renderGGB(s)})),e.init(),i.forEach((t=>{t.addEventListener("click",(t=>{let e=t.target;e.classList.contains("select")&&(a.classList.add("hidden"),function(t){n.textContent="",document.querySelector(".request-containter").classList.remove("hidden");let e=t.parentElement.dataset.id,i=t.dataset.name,s=t.dataset.interval;if("1"===e){const t=`\n\t\t\t\t<form id='unit1-form' method='POST'>\n\t\t\t\t\t<div class='method'>\n\t\t\t\t\t\t<span>${i}(${"Ln"==i?"1 +":""}<input type='number' step='0.01' name='x' id='x' class='input__method' require='true'/>)\n\t\t\t\t\t\t&nbsp; ${s||""}</span>\n\t\t\t\t\t\t<span>Cifras significativas: <input type='number' name='cifras' id='cifras' class='input__method' require='true'/></span>\n\t\t\t\t\t\t<button type='submit' class='btn btn-submit'><i class="fa-solid fa-check"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t</form> \n\t\t\t`;n.insertAdjacentHTML("afterbegin",t);let e=document.getElementById("x");document.getElementById("cifras"),e.focus(),document.querySelector(".btn").addEventListener("click",(t=>{t.preventDefault(),console.log("has hecho click en el botón")}))}}(e))}))}));
//# sourceMappingURL=index.bea1ae48.js.map
