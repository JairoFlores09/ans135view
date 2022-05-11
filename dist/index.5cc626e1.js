var t=new class{constructor(){this._container=document.querySelector(".app-container"),this._WIDTH=this._container.getBoundingClientRect().width,this._HEIGHT=this._container.getBoundingClientRect().height,this._params={id:"ggbApplet",appName:"graphing",width:this._WIDTH,height:this._HEIGHT,showToolBar:!0,showMenuBar:!0,showAlgebraInput:!0,errorDialogsActive:!0},this._applet=new GGBApplet(this._params,!0)}renderGGB(t){this._applet.inject(t)}};var e=new class{_menu_item;constructor(){this._menu_item=document.querySelector(".sidebar")}init(){this._menu_item.addEventListener("click",(t=>{if(t.target.classList.contains("menu")){let e=t.target.dataset.unit;document.querySelector(`.sidebar__list--${e}`).classList.toggle("hidden")}}))}};const n=document.querySelector(".form-container"),a=document.querySelector(".request-containter"),l=document.querySelector("#ggb-element"),s=function(t,e){return fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},i=function(){let t=document.querySelector(".summary");if(t){t.parentElement.removeChild(t)}},c=function(t){i();const e=Object.keys(t),a=t[e[0]],l=document.createElement("table"),s=document.createElement("thead"),c=document.createElement("tbody");e.forEach((t=>{let e=document.createElement("th");e.appendChild(document.createTextNode(t)),s.appendChild(e)}));let r=0;for(;r<a.length;){const n=document.createElement("tr");let a=null;e.forEach((e=>{a=document.createElement("td"),a.appendChild(document.createTextNode(t[e][r])),n.appendChild(a),c.appendChild(n)})),r++}l.appendChild(s),l.appendChild(c),l.classList.add("summary"),n.parentElement.appendChild(l)},r=document.querySelectorAll(".sidebar__list"),d=document.querySelector("#ggb-element"),o=document.querySelector(".welcome");window.addEventListener("load",(()=>{t.renderGGB(d)})),e.init(),r.forEach((t=>{t.addEventListener("click",(t=>{let e=t.target;e.classList.contains("select")&&(o.classList.add("hidden"),function(t){n.textContent="",i(),a.classList.remove("hidden"),l.classList.contains("hidden")||l.classList.add("hidden");let e,r=t.parentElement.dataset.id,d=t.dataset.name,o=t.textContent;switch(r){case"1":let i=t.dataset.interval;e=`\n\t\t\t\t<form id='unit1-form' method='POST'>\n\t\t\t\t\t<div class='method'>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<span>${d}(${"Ln"==d?"1 +":""}<input type='number' step='0.01' name='x' id='x' class='input__method' require='true'/>)\n\t\t\t\t\t\t\t&nbsp; ${i||""}</span>\n\t\t\t\t\t\t\t<span>Cifras significativas: <input type='number' name='cifras' id='cifras' class='input__method' require='true'/></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button type='submit' id='btn_unit1' class='btn btn-submit'><i class="fa-solid fa-check"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t</form> \n\t\t\t`,n.insertAdjacentHTML("afterbegin",e);let u=document.getElementById("x"),m=document.getElementById("cifras");u.focus(),document.querySelector("#btn_unit1").addEventListener("click",(t=>{t.preventDefault(),s(`http://127.0.0.1:8000/ans/unidad${r}/${d.replace(" ","").toLowerCase()}/`,{x:u.value,cifras:m.value}).then((t=>t.json())).then((t=>{t.error?Swal.fire({icon:"error",title:"Oops...",text:t.error}):c(t)}))}));break;case"2":if("Gráfico"==d)a.classList.add("hidden"),l.classList.remove("hidden");else{l.classList.add("hidden");let a=Number(t.dataset.params);e=`\n\t\t\t\t\t<form id='unit2-form' method='POST'>\n\t\t\t\t\t\t<div class='method'>\n\t\t\t\t\t\t\t<span class="label">${o}</span>\n\t\t\t\t\t\t\t<div style="margin-bottom: 1.5rem;">\n\t\t\t\t\t\t\t\t<label for="function" class="label">Función: </label>\n\t\t\t\t\t\t\t\t<input type="text" name="function" id="function" class="input" placeholder="sin(x) - x"/>\n\t\t\t\t\t\t\t\t<label for="cifras" class="label">Cifras: </label>\n\t\t\t\t\t\t\t\t<input type="number" name="cifras" id="cifras" class="input input_method"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form> \n\t\t\t\t`,n.insertAdjacentHTML("afterbegin",e);let i=document.createElement("div");for(let t=0;t<a;t++){let e=document.createElement("label");e.setAttribute("for",`param${t+1}`),e.classList.add("label"),e.textContent=`param${t+1}: `;let n=document.createElement("input");n.setAttribute("type","number"),n.setAttribute("name",`param${t+1}`),n.setAttribute("id","params"),n.classList.add("input"),i.appendChild(e),i.appendChild(n)}document.querySelector(".method").appendChild(i);let u="<button type='submit' id='btn_unit2' class='btn btn-submit'><i class=\"fa-solid fa-check\"></i></button>";document.querySelector(".method").insertAdjacentHTML("beforeend",u);let m=document.querySelector("#function"),p=document.querySelector("#cifras"),h=document.querySelectorAll("#params");document.querySelector("#btn_unit2").addEventListener("click",(t=>{t.preventDefault();let e=[];h.forEach((t=>e.push(t.value))),s(`http://127.0.0.1:8000/ans/unidad${r}/${d.toLowerCase()}/`,{funcion:m.value,cifras:p.value,params:e.sort((function(t,e){return t-e}))}).then((t=>t.json())).then((t=>{t.error?Swal.fire({icon:"error",title:"Oops...",text:t.error}):c(t)}))}))}break;case"3":e=`\n\t\t\t\t<form id='unit3-form' method='POST'>\n\t\t\t\t\t<div class='method fontvar'>\n\t\t\t\t\t\t<span class='label'>${o}</span>\n\t\t\t\t\t\t<div style="margin-top: 2rem;">\n\t\t\t\t\t\t\t<div">\n\t\t\t\t\t\t\t\t<label for="poly" class="label">Polinomio: </label>\n\t\t\t\t\t\t\t\t<input type="text" name="poly" id="poly" class="input" placeholder="x^2 - 5*x + 4"/>\n\t\t\t\t\t\t\t\t<label for="makeTable" class="label">Ingresar los datos en una Tabla </label>\n\t\t\t\t\t\t\t\t<input type="checkbox" name="makeTable" id="makeTable"/>\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<table class="polynomial-table">\n\t\t\t\t\t\t\t\t<tbody class="body-table">\n\t\t\t\t\t\t\t\t\t<tr class="ptr">\n\t\t\t\t\t\t\t\t\t\t<td class="ptc init">x</td>\n\t\t\t\t\t\t\t\t\t\t<td class="ptc"><input type="text" class="axis"/></td>\n\t\t\t\t\t\t\t\t\t\t<td class="ptc"><input type="text" class="axis"/></td>\n\t\t\t\t\t\t\t\t\t\t<td class="ptc"><input type="text" class="axis"/></td>\n\t\t\t\t\t\t\t\t\t\t<td class="ptc"><button type="button" class="add-col"><i class="fa-solid fa-plus"></i></button></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t`,n.insertAdjacentHTML("afterbegin",e);let p=document.querySelector(".body-table"),h=document.querySelector(".add-col"),b='<td class="ptc"><input type="text" class="axis"/></td>';h.addEventListener("click",(function(){if(this.parentElement.insertAdjacentHTML("beforebegin",b),p.childNodes.length-2>1){let t='<td class="ptc"><input type="text" class="epsilon"/></td>';p.lastChild.insertAdjacentHTML("beforeend",t)}})),document.querySelector("#makeTable").addEventListener("change",(function(){if(this.checked){document.querySelector("#poly").disabled=!0;let t=document.querySelector(".ptr").childNodes.length-8,e=document.createElement("tr");e.setAttribute("class","ptr");let n=document.createElement("td");n.setAttribute("class","ptc init"),n.textContent="y",e.appendChild(n);for(let n=0;n<t;n++){let t=document.createElement("td");t.setAttribute("class","ptc");let n=document.createElement("input");n.setAttribute("type","text"),n.setAttribute("class","epsilon"),t.appendChild(n),e.appendChild(t)}p.appendChild(e)}else{document.querySelector("#poly").disabled=!1;let t=p.lastChild;p.removeChild(t)}}));let f="<button type='submit' id='btn_unit3' class='btn btn-submit'><i class=\"fa-solid fa-check\"></i></button>";document.querySelector(".method").insertAdjacentHTML("beforeend",f),document.querySelector("#poly")?.value;let y=[],v=[];document.querySelector("#btn_unit3").addEventListener("click",(t=>{t.preventDefault();let e=document.querySelectorAll(".axis"),n=document.querySelectorAll(".epsilon");e.forEach((t=>y.push(t.value))),n&&n.forEach((t=>v.push(parseInt(t.value,10)))),console.log(y),console.log(v)}))}}(e))}))}));
//# sourceMappingURL=index.5cc626e1.js.map