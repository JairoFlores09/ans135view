var t=new class{constructor(){this._container=document.querySelector(".app-container"),this._WIDTH=this._container.getBoundingClientRect().width,this._HEIGHT=this._container.getBoundingClientRect().height,this._params={appName:"graphing",width:Math.round(this._WIDTH),height:this._HEIGHT-45,showToolBar:!0,showAlgebraInput:!0,showMenuBar:!0},this._applet=new GGBApplet(this._params,!0)}renderGGB(t){this._applet.inject(t)}};var e=new class{_menu_item;constructor(){this._menu_item=document.querySelector(".sidebar")}init(){this._menu_item.addEventListener("click",(t=>{if(t.target.classList.contains("menu")){let e=t.target.dataset.unit;document.querySelector(`.sidebar__list--${e}`).classList.toggle("hidden")}}))}};const n=document.querySelector(".form-container"),a=function(){let t=document.querySelector(".summary");if(t){t.parentElement.removeChild(t)}},i=function(t){n.textContent="",a(),document.querySelector(".request-containter").classList.remove("hidden");let e=t.parentElement.dataset.id,i=t.dataset.name,r=t.dataset.interval;if("1"===e){const t=`\n\t\t\t\t<form id='unit1-form' method='POST'>\n\t\t\t\t\t<div class='method'>\n\t\t\t\t\t\t<span>${i}(${"Ln"==i?"1 +":""}<input type='number' step='0.01' name='x' id='x' class='input__method' require='true'/>)\n\t\t\t\t\t\t&nbsp; ${r||""}</span>\n\t\t\t\t\t\t<span>Cifras significativas: <input type='number' name='cifras' id='cifras' class='input__method' require='true'/></span>\n\t\t\t\t\t\t<button type='submit' class='btn btn-submit'><i class="fa-solid fa-check"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t</form> \n\t\t\t`;n.insertAdjacentHTML("afterbegin",t);let s=document.getElementById("x"),c=document.getElementById("cifras");s.focus(),document.querySelector(".btn").addEventListener("click",(t=>{t.preventDefault();(r=`http://127.0.0.1:8000/ans/unidad${e}/${i.toLowerCase()}/`,d={x:s.value,cifras:c.value},fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)})).then((t=>t.json())).then((t=>{!function(t){a();const e=Object.keys(t),i=t[e[0]],r=document.createElement("table"),s=document.createElement("thead"),c=document.createElement("tbody");e.forEach((t=>{let e=document.createElement("th");e.appendChild(document.createTextNode(t)),s.appendChild(e)}));let d=0;for(;d<i.length;){const n=document.createElement("tr");let a=null;e.forEach((e=>{a=document.createElement("td"),a.appendChild(document.createTextNode(t[e][d])),n.appendChild(a),c.appendChild(n)})),d++}r.appendChild(s),r.appendChild(c),r.classList.add("summary"),n.parentElement.appendChild(r)}(t)})).catch((t=>{Swal.fire({icon:"error",title:"Oops...",text:"Asegurate de ingresar valores válidos"})}));var r,d}))}},r=document.querySelectorAll(".sidebar__list"),s=document.querySelector("#ggb-element"),c=document.querySelector(".welcome");window.addEventListener("load",(()=>{t.renderGGB(s)})),e.init(),r.forEach((t=>{t.addEventListener("click",(t=>{let e=t.target;e.classList.contains("select")&&(c.classList.add("hidden"),i(e))}))}));
//# sourceMappingURL=index.0d02b10f.js.map
