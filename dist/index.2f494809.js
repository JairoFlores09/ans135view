var t=new class{constructor(){this._container=document.querySelector(".app-container"),this._WIDTH=this._container.getBoundingClientRect().width,this._HEIGHT=this._container.getBoundingClientRect().height,this._params={appName:"graphing",width:Math.round(this._WIDTH),height:this._HEIGHT-45,showToolBar:!0,showAlgebraInput:!0,showMenuBar:!0},this._applet=new GGBApplet(this._params,!0)}renderGGB(t){this._applet.inject(t)}};var e=new class{_menu_item;constructor(){this._menu_item=document.querySelector(".sidebar")}init(){this._menu_item.addEventListener("click",(t=>{if(t.target.classList.contains("menu")){let e=t.target.dataset.unit;document.querySelector(`.sidebar__list--${e}`).classList.toggle("hidden")}}))}};const n=document.querySelector(".form-container"),a=document.querySelector(".request-containter"),i=document.querySelector("#ggb-element"),r=function(t,e){return fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},s=function(){let t=document.querySelector(".summary");if(t){t.parentElement.removeChild(t)}},c=function(t){s();const e=Object.keys(t),i=t[e[0]],r=document.createElement("table"),c=document.createElement("thead"),o=document.createElement("tbody");e.forEach((t=>{let e=document.createElement("th");e.appendChild(document.createTextNode(t)),c.appendChild(e)}));let d=0;for(;d<i.length;){const n=document.createElement("tr");let a=null;e.forEach((e=>{a=document.createElement("td"),a.appendChild(document.createTextNode(t[e][d])),n.appendChild(a),o.appendChild(n)})),d++}r.appendChild(c),r.appendChild(o),r.classList.add("summary"),r.setAttribute("style","margin-bottom:10rem"),a.style.marginBottom="50rem",n.parentElement.appendChild(r)},o=document.querySelectorAll(".sidebar__list"),d=document.querySelector("#ggb-element"),l=document.querySelector(".welcome");window.addEventListener("load",(()=>{t.renderGGB(d)})),e.init(),o.forEach((t=>{t.addEventListener("click",(t=>{let e=t.target;e.classList.contains("select")&&(l.classList.add("hidden"),function(t){n.textContent="",s(),a.classList.remove("hidden");let e=t.parentElement.dataset.id,o=t.dataset.name;switch(e){case"1":let s=t.dataset.interval;const d=`\n\t\t\t\t<form id='unit1-form' method='POST'>\n\t\t\t\t\t<div class='method'>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<span>${o}(${"Ln"==o?"1 +":""}<input type='number' step='0.01' name='x' id='x' class='input__method' require='true'/>)\n\t\t\t\t\t\t\t&nbsp; ${s||""}</span>\n\t\t\t\t\t\t\t<span>Cifras significativas: <input type='number' name='cifras' id='cifras' class='input__method' require='true'/></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button type='submit' id='btn_unit1' class='btn btn-submit'><i class="fa-solid fa-check"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t</form> \n\t\t\t`;n.insertAdjacentHTML("afterbegin",d);let l=document.getElementById("x"),u=document.getElementById("cifras");l.focus(),document.querySelector("#btn_unit1").addEventListener("click",(t=>{t.preventDefault(),r(`http://127.0.0.1:8000/ans/unidad${e}/${o.toLowerCase()}/`,{x:l.value,cifras:u.value}).then((t=>t.json())).then((t=>{t.error?Swal.fire({icon:"error",title:"Oops...",text:t.error}):c(t)}))}));break;case"2":if("Gráfico"==o)a.classList.add("hidden"),i.classList.remove("hidden");else{i.classList.add("hidden");let a=Number(t.dataset.params);const s=`\n\t\t\t\t\t<form id='unit2-form' method='POST'>\n\t\t\t\t\t\t<div class='method'>\n\t\t\t\t\t\t\t<span class="label">${t.textContent}</span>\n\t\t\t\t\t\t\t<div style="margin-bottom: 1.5rem;">\n\t\t\t\t\t\t\t\t<label for="function" class="label">Función: </label>\n\t\t\t\t\t\t\t\t<input type="text" name="function" id="function" class="input" placeholder="sin(x) - x"/>\n\t\t\t\t\t\t\t\t<label for="cifras" class="label">Cifras: </label>\n\t\t\t\t\t\t\t\t<input type="number" name="cifras" id="cifras" class="input input_method"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form> \n\t\t\t\t`;n.insertAdjacentHTML("afterbegin",s);let d=document.createElement("div");for(let t=0;t<a;t++){let e=document.createElement("label");e.setAttribute("for",`param${t+1}`),e.classList.add("label"),e.textContent=`param${t+1}: `;let n=document.createElement("input");n.setAttribute("type","number"),n.setAttribute("name",`param${t+1}`),n.setAttribute("id","params"),n.classList.add("input"),d.appendChild(e),d.appendChild(n)}document.querySelector(".method").appendChild(d);let l="<button type='submit' id='btn_unit2' class='btn btn-submit'><i class=\"fa-solid fa-check\"></i></button>";document.querySelector(".method").insertAdjacentHTML("beforeend",l);let u=document.querySelector("#function"),m=document.querySelector("#cifras"),p=document.querySelectorAll("#params");document.querySelector("#btn_unit2").addEventListener("click",(t=>{t.preventDefault();let n=[];p.forEach((t=>n.push(t.value))),r(`http://127.0.0.1:8000/ans/unidad${e}/${o.toLowerCase()}/`,{funcion:u.value,cifras:m.value,params:n.sort((function(t,e){return t-e}))}).then((t=>t.json())).then((t=>{c(t)})).catch((t=>{Swal.fire({icon:"error",title:"Oops...",text:"Asegurate de ingresar valores válidos"})}))}))}}}(e))}))}));
//# sourceMappingURL=index.2f494809.js.map
