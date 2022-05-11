var t=new class{constructor(){this._container=document.querySelector(".app-container"),this._WIDTH=this._container.getBoundingClientRect().width,this._HEIGHT=this._container.getBoundingClientRect().height,this._params={id:"ggbApplet",appName:"graphing",width:this._WIDTH,height:this._HEIGHT,showToolBar:!0,showMenuBar:!0,showAlgebraInput:!0,errorDialogsActive:!0},this._applet=new GGBApplet(this._params,!0)}renderGGB(t){this._applet.inject(t)}};var e=new class{_menu_item;constructor(){this._menu_item=document.querySelector(".sidebar")}init(){this._menu_item.addEventListener("click",(t=>{if(t.target.classList.contains("menu")){let e=t.target.dataset.unit;document.querySelector(`.sidebar__list--${e}`).classList.toggle("hidden")}}))}};const n=document.querySelector(".form-container"),a=document.querySelector(".request-containter"),i=document.querySelector("#ggb-element"),s=function(t,e){return fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},l=function(){let t=document.querySelector(".summary");if(t){t.parentElement.removeChild(t)}},r=function(t){l();const e=Object.keys(t),a=t[e[0]],i=document.createElement("table"),s=document.createElement("thead"),r=document.createElement("tbody");e.forEach((t=>{let e=document.createElement("th");e.appendChild(document.createTextNode(t)),s.appendChild(e)}));let c=0;for(;c<a.length;){const n=document.createElement("tr");let a=null;e.forEach((e=>{a=document.createElement("td"),a.appendChild(document.createTextNode(t[e][c])),n.appendChild(a),r.appendChild(n)})),c++}i.appendChild(s),i.appendChild(r),i.classList.add("summary"),n.parentElement.appendChild(i)},c=document.querySelectorAll(".sidebar__list"),d=document.querySelector("#ggb-element"),o=document.querySelector(".welcome");window.addEventListener("load",(()=>{t.renderGGB(d)})),e.init(),c.forEach((t=>{t.addEventListener("click",(t=>{let e=t.target;e.classList.contains("select")&&(o.classList.add("hidden"),function(t){n.textContent="",l(),a.classList.remove("hidden"),i.classList.contains("hidden")||i.classList.add("hidden");let e,c=t.parentElement.dataset.id,d=t.dataset.name,o=t.textContent;switch(c){case"1":let l=t.dataset.interval;e=`\n\t\t\t\t<form id='unit1-form' method='POST'>\n\t\t\t\t\t<div class='method'>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<span>${d}(${"Ln"==d?"1 +":""}<input type='number' step='0.01' name='x' id='x' class='input__method' require='true'/>)\n\t\t\t\t\t\t\t&nbsp; ${l||""}</span>\n\t\t\t\t\t\t\t<span>Cifras significativas: <input type='number' name='cifras' id='cifras' class='input__method' require='true'/></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button type='submit' id='btn_unit1' class='btn btn-submit'><i class="fa-solid fa-check"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t</form> \n\t\t\t`,n.insertAdjacentHTML("afterbegin",e);let u=document.getElementById("x"),m=document.getElementById("cifras");u.focus(),document.querySelector("#btn_unit1").addEventListener("click",(t=>{t.preventDefault(),s(`http://127.0.0.1:8000/ans/unidad${c}/${d.replace(" ","").toLowerCase()}/`,{x:u.value,cifras:m.value}).then((t=>t.json())).then((t=>{t.error?Swal.fire({icon:"error",title:"Oops...",text:t.error}):r(t)}))}));break;case"2":if("Gráfico"==d)a.classList.add("hidden"),i.classList.remove("hidden");else{i.classList.add("hidden");let a=Number(t.dataset.params);e=`\n\t\t\t\t\t<form id='unit2-form' method='POST'>\n\t\t\t\t\t\t<div class='method'>\n\t\t\t\t\t\t\t<span class="label">${o}</span>\n\t\t\t\t\t\t\t<div style="margin-bottom: 1.5rem;">\n\t\t\t\t\t\t\t\t<label for="function" class="label">Función: </label>\n\t\t\t\t\t\t\t\t<input type="text" name="function" id="function" class="input" placeholder="sin(x) - x"/>\n\t\t\t\t\t\t\t\t<label for="cifras" class="label">Cifras: </label>\n\t\t\t\t\t\t\t\t<input type="number" name="cifras" id="cifras" class="input input_method"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form> \n\t\t\t\t`,n.insertAdjacentHTML("afterbegin",e);let l=document.createElement("div");for(let t=0;t<a;t++){let e=document.createElement("label");e.setAttribute("for",`param${t+1}`),e.classList.add("label"),e.textContent=`param${t+1}: `;let n=document.createElement("input");n.setAttribute("type","number"),n.setAttribute("name",`param${t+1}`),n.setAttribute("id","params"),n.classList.add("input"),l.appendChild(e),l.appendChild(n)}document.querySelector(".method").appendChild(l);let u="<button type='submit' id='btn_unit2' class='btn btn-submit'><i class=\"fa-solid fa-check\"></i></button>";document.querySelector(".method").insertAdjacentHTML("beforeend",u);let m=document.querySelector("#function"),p=document.querySelector("#cifras"),h=document.querySelectorAll("#params");document.querySelector("#btn_unit2").addEventListener("click",(t=>{t.preventDefault();let e=[];h.forEach((t=>e.push(t.value))),s(`http://127.0.0.1:8000/ans/unidad${c}/${d.toLowerCase()}/`,{funcion:m.value,cifras:p.value,params:e.sort((function(t,e){return t-e}))}).then((t=>t.json())).then((t=>{t.error?Swal.fire({icon:"error",title:"Oops...",text:t.error}):r(t)}))}))}break;case"3":e=`\n\t\t\t\t<form id='unit3-form' method='POST'>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<span class='label'>${o}</span>\n\t\t\t\t\t\t<div style="margin-top: 2rem;">\n\t\t\t\t\t\t\t<div">\n\t\t\t\t\t\t\t\t<label for="poly" class="label">Polinomio: </label>\n\t\t\t\t\t\t\t\t<input type="text" name="poly" id="poly" class="input" placeholder="x^2 - 5*x + 4"/>\n\t\t\t\t\t\t\t\t<label for="makeTable" class="label">Ingresar los datos en una Tabla </label>\n\t\t\t\t\t\t\t\t<input type="checkbox" name="makeTable" id="makeTable"/>\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<table class="polynomial-table">\n\t\t\t\t\t\t\t\t<tbody class="body-table">\n\t\t\t\t\t\t\t\t\t<tr class="ptr">\n\t\t\t\t\t\t\t\t\t\t<td class="ptc init">x</td>\n\t\t\t\t\t\t\t\t\t\t<td class="ptc"><input type="text" class="axis"/></td>\n\t\t\t\t\t\t\t\t\t\t<td class="ptc"><input type="text" class="axis"/></td>\n\t\t\t\t\t\t\t\t\t\t<td class="ptc"><input type="text" class="axis"/></td>\n\t\t\t\t\t\t\t\t\t\t<td class="ptc"><button type="button" class="add-col"><i class="fa-solid fa-plus"></i></button></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t`,n.insertAdjacentHTML("afterbegin",e),document.querySelector(".add-col").addEventListener("click",(function(){console.log(this)}))}}(e))}))}));
//# sourceMappingURL=index.3aac8df8.js.map
