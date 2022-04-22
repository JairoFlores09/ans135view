var t=new class{constructor(){this._container=document.querySelector(".app-container"),this._WIDTH=this._container.getBoundingClientRect().width,this._HEIGHT=this._container.getBoundingClientRect().height,this._params={appName:"graphing",width:Math.round(this._WIDTH),height:this._HEIGHT-45,showToolBar:!0,showAlgebraInput:!0,showMenuBar:!0},this._applet=new GGBApplet(this._params,!0)}renderGGB(t){this._applet.inject(t)}};var e=new class{_menu_item;constructor(){this._menu_item=document.querySelector(".sidebar")}init(){this._menu_item.addEventListener("click",(t=>{if(t.target.classList.contains("menu")){let e=t.target.dataset.unit;document.querySelector(`.sidebar__list--${e}`).classList.toggle("hidden")}}))}};const n=document.querySelector(".form-container"),a=document.querySelector(".request-containter"),i=document.querySelector("#ggb-element"),s=function(t,e){return fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},r=function(){let t=document.querySelector(".summary");if(t){t.parentElement.removeChild(t)}},c=function(t){n.textContent="",r(),a.classList.remove("hidden");let e=t.parentElement.dataset.id,c=t.dataset.name;switch(e){case"1":let l=t.dataset.interval;const d=`\n\t\t\t\t<form id='unit1-form' method='POST'>\n\t\t\t\t\t<div class='method'>\n\t\t\t\t\t\t<span>${c}(${"Ln"==c?"1 +":""}<input type='number' step='0.01' name='x' id='x' class='input__method' require='true'/>)\n\t\t\t\t\t\t&nbsp; ${l||""}</span>\n\t\t\t\t\t\t<span>Cifras significativas: <input type='number' name='cifras' id='cifras' class='input__method' require='true'/></span>\n\t\t\t\t\t\t<button type='submit' id='btn_unit1' class='btn btn-submit'><i class="fa-solid fa-check"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t</form> \n\t\t\t`;n.insertAdjacentHTML("afterbegin",d);let o=document.getElementById("x"),u=document.getElementById("cifras");o.focus(),document.querySelector("#btn_unit1").addEventListener("click",(t=>{t.preventDefault();s(`http://127.0.0.1:8000/ans/unidad${e}/${c.toLowerCase()}/`,{x:o.value,cifras:u.value}).then((t=>t.json())).then((t=>{!function(t){r();const e=Object.keys(t),a=t[e[0]],i=document.createElement("table"),s=document.createElement("thead"),c=document.createElement("tbody");e.forEach((t=>{let e=document.createElement("th");e.appendChild(document.createTextNode(t)),s.appendChild(e)}));let l=0;for(;l<a.length;){const n=document.createElement("tr");let a=null;e.forEach((e=>{a=document.createElement("td"),a.appendChild(document.createTextNode(t[e][l])),n.appendChild(a),c.appendChild(n)})),l++}i.appendChild(s),i.appendChild(c),i.classList.add("summary"),n.parentElement.appendChild(i)}(t)})).catch((t=>{Swal.fire({icon:"error",title:"Oops...",text:"Asegurate de ingresar valores válidos"})}))}));break;case"2":if("Gráfico"==c)a.classList.add("hidden"),i.classList.remove("hidden");else{i.classList.add("hidden");let a=Number(t.dataset.params);const r=`\n\t\t\t\t\t<form id='unit2-form' method='POST'>\n\t\t\t\t\t\t<div class='method'>\n\t\t\t\t\t\t\t<span class="label">${t.textContent}</span>\n\t\t\t\t\t\t\t<div style="margin-bottom: 1.5rem;">\n\t\t\t\t\t\t\t\t<label for="function" class="label">Función: </label>\n\t\t\t\t\t\t\t\t<input type="text" name="function" id="function" class="input" placeholder="sin(x) - x"/>\n\t\t\t\t\t\t\t\t<label for="cifras" class="label">Cifras: </label>\n\t\t\t\t\t\t\t\t<input type="number" name="cifras" id="cifras" class="input input_method"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form> \n\t\t\t\t`;n.insertAdjacentHTML("afterbegin",r);let l=document.createElement("div");for(let t=0;t<a;t++){let e=document.createElement("label");e.setAttribute("for",`param${t+1}`),e.classList.add("label"),e.textContent=`param${t+1}: `;let n=document.createElement("input");n.setAttribute("type","number"),n.setAttribute("name",`param${t+1}`),n.setAttribute("id","params"),n.classList.add("input"),l.appendChild(e),l.appendChild(n)}document.querySelector(".method").appendChild(l);let d="<button type='submit' id='btn_unit2' class='btn btn-submit'><i class=\"fa-solid fa-check\"></i></button>";document.querySelector(".method").insertAdjacentHTML("beforeend",d);let o=document.querySelector("#function"),u=document.querySelector("#cifras"),m=document.querySelectorAll("#params");document.querySelector("#btn_unit2").addEventListener("click",(t=>{t.preventDefault();let n=[];m.forEach((t=>n.push(t.value))),console.log(n);s(`http://127.0.0.1:8000/ans/unidad${e}/${c.toLowerCase()}/`,{funcion:o.value,cifras:u.value,params:n}).then((t=>t.json())).then((t=>console.log(t)))}))}}},l=document.querySelectorAll(".sidebar__list"),d=document.querySelector("#ggb-element"),o=document.querySelector(".welcome");window.addEventListener("load",(()=>{t.renderGGB(d)})),e.init(),l.forEach((t=>{t.addEventListener("click",(t=>{let e=t.target;e.classList.contains("select")&&(o.classList.add("hidden"),c(e))}))}));
//# sourceMappingURL=index.1424f8d1.js.map
