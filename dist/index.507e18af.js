var t=new class{constructor(){this._container=document.querySelector(".app-container"),this._WIDTH=this._container.getBoundingClientRect().width,this._HEIGHT=this._container.getBoundingClientRect().height,this._params={appName:"graphing",width:Math.round(this._WIDTH),height:this._HEIGHT-45,showToolBar:!0,showAlgebraInput:!0,showMenuBar:!0},this._applet=new GGBApplet(this._params,!0)}renderGGB(t){this._applet.inject(t)}};var e=new class{_menu_item;constructor(){this._menu_item=document.querySelector(".sidebar")}init(){this._menu_item.addEventListener("click",(t=>{if(t.target.classList.contains("menu")){let e=t.target.dataset.unit;document.querySelector(`.sidebar__list--${e}`).classList.toggle("hidden")}}))}};const n=document.querySelector(".form-container"),a=document.querySelector(".request-containter"),i=document.querySelector("#ggb-element"),s=function(){let t=document.querySelector(".summary");if(t){t.parentElement.removeChild(t)}},r=function(t){n.textContent="",s(),a.classList.remove("hidden");let e=t.parentElement.dataset.id,r=t.dataset.name;switch(e){case"1":let c=t.dataset.interval;const d=`\n\t\t\t\t<form id='unit1-form' method='POST'>\n\t\t\t\t\t<div class='method'>\n\t\t\t\t\t\t<span>${r}(${"Ln"==r?"1 +":""}<input type='number' step='0.01' name='x' id='x' class='input__method' require='true'/>)\n\t\t\t\t\t\t&nbsp; ${c||""}</span>\n\t\t\t\t\t\t<span>Cifras significativas: <input type='number' name='cifras' id='cifras' class='input__method' require='true'/></span>\n\t\t\t\t\t\t<button type='submit' class='btn btn-submit'><i class="fa-solid fa-check"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t</form> \n\t\t\t`;n.insertAdjacentHTML("afterbegin",d);let o=document.getElementById("x"),l=document.getElementById("cifras");o.focus(),document.querySelector(".btn").addEventListener("click",(t=>{t.preventDefault();(a=`http://127.0.0.1:8000/ans/unidad${e}/${r.toLowerCase()}/`,i={x:o.value,cifras:l.value},fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).then((t=>t.json())).then((t=>{!function(t){s();const e=Object.keys(t),a=t[e[0]],i=document.createElement("table"),r=document.createElement("thead"),c=document.createElement("tbody");e.forEach((t=>{let e=document.createElement("th");e.appendChild(document.createTextNode(t)),r.appendChild(e)}));let d=0;for(;d<a.length;){const n=document.createElement("tr");let a=null;e.forEach((e=>{a=document.createElement("td"),a.appendChild(document.createTextNode(t[e][d])),n.appendChild(a),c.appendChild(n)})),d++}i.appendChild(r),i.appendChild(c),i.classList.add("summary"),n.parentElement.appendChild(i)}(t)})).catch((t=>{Swal.fire({icon:"error",title:"Oops...",text:"Asegurate de ingresar valores válidos"})}));var a,i}));break;case"2":if("Gráfico"==r)a.classList.add("hidden"),i.classList.remove("hidden");else{i.classList.add("hidden");let e=t.dataset.params;console.log(e)}}},c=document.querySelectorAll(".sidebar__list"),d=document.querySelector("#ggb-element"),o=document.querySelector(".welcome");window.addEventListener("load",(()=>{t.renderGGB(d)})),e.init(),c.forEach((t=>{t.addEventListener("click",(t=>{let e=t.target;e.classList.contains("select")&&(o.classList.add("hidden"),r(e))}))}));
//# sourceMappingURL=index.507e18af.js.map
