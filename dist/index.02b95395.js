function t(t,e,n,l){Object.defineProperty(t,e,{get:n,set:l,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},a={},o=n.parcelRequirec77b;null==o&&((o=function(t){if(t in l)return l[t].exports;if(t in a){var e=a[t];delete a[t];var n={id:t,exports:{}};return l[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){a[t]=e},n.parcelRequirec77b=o),o.register("27Lyk",(function(e,n){var l,a;t(e.exports,"register",(()=>l),(t=>l=t)),t(e.exports,"resolve",(()=>a),(t=>a=t));var o={};l=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)o[e[n]]=t[e[n]]},a=function(t){var e=o[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),o("27Lyk").register(JSON.parse('{"51ds3":"index.02b95395.js","b1Vii":"icons.c14567a0.svg"}'));var i=new class{constructor(){this._container=document.querySelector(".app-container"),this._WIDTH=this._container.getBoundingClientRect().width,this._HEIGHT=this._container.getBoundingClientRect().height,this._params={id:"ggbApplet",appName:"graphing",width:this._WIDTH,height:this._HEIGHT,showToolBar:!0,showMenuBar:!0,showAlgebraInput:!0,errorDialogsActive:!0},this._applet=new GGBApplet(this._params,!0)}renderGGB(t){this._applet.inject(t)}};var s,r=new class{_menu_item;constructor(){this._menu_item=document.querySelector(".sidebar")}init(){this._menu_item.addEventListener("click",(t=>{if(t.target.classList.contains("menu")){let e=t.target.dataset.unit;document.querySelector(`.sidebar__list--${e}`).classList.toggle("hidden")}}))}};s=new URL(o("27Lyk").resolve("b1Vii"),import.meta.url).toString();const c=document.querySelector(".form-container"),d=document.querySelector(".request-containter"),u=document.querySelector("#ggb-element"),p=function(){let t=document.querySelector(".spinner");t&&d.removeChild(t)},m=function(){let t=document.querySelector(".summary");if(t){t.parentElement.removeChild(t)}const n=`\n\t\t<div class="spinner">\n\t\t\t<svg>\n\t\t\t\t<use href="${e(s)}#icon-loader"></use>\n\t\t\t</svg>\n\t\t</div>\n\t`;c.parentElement.insertAdjacentHTML("beforeend",n)},b=function(t,e){return fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},f=function(){let t=document.querySelector(".spinner"),e=document.querySelector(".summary");if(e){e.parentElement.removeChild(e)}if(t){t.parentElement.removeChild(t)}},y=function(t){f();const e=Object.keys(t),n=t[e[0]],l=document.createElement("table"),a=document.createElement("thead"),o=document.createElement("tbody");e.forEach((t=>{let e=document.createElement("th");e.appendChild(document.createTextNode(t)),a.appendChild(e)}));let i=0;for(;i<n.length;){const n=document.createElement("tr");let l=null;e.forEach((e=>{l=document.createElement("td"),l.appendChild(document.createTextNode(t[e][i])),n.appendChild(l),o.appendChild(n)})),i++}l.appendChild(a),l.appendChild(o),l.classList.add("summary"),c.parentElement.appendChild(l)},v=document.querySelectorAll(".sidebar__list"),h=document.querySelector("#ggb-element"),g=document.querySelector(".welcome");window.addEventListener("load",(()=>{i.renderGGB(h)})),r.init(),v.forEach((t=>{t.addEventListener("click",(t=>{let e=t.target;e.classList.contains("select")&&(g.classList.add("hidden"),function(t){c.textContent="",f(),d.classList.remove("hidden"),u.classList.contains("hidden")||u.classList.add("hidden");let e,n=t.parentElement.dataset.id,l=t.dataset.name,a=t.textContent;switch(n){case"1":let o=t.dataset.interval;e=`\n\t\t\t\t<form id='unit1-form' method='POST'>\n\t\t\t\t\t<div class='method'>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<span>${"fraccion"==l?"1 / 1 - ":l}(${"Ln"==l?"1 +":""}<input type='number' step='0.01' name='x' id='x' class='input__method' require='true'/>)\n\t\t\t\t\t\t\t&nbsp; ${o||""}</span>\n\t\t\t\t\t\t\t<span>Cifras significativas: <input type='number' name='cifras' id='cifras' class='input__method' require='true'/></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button type='submit' id='btn_unit1' class='btn btn-submit'><i class="fa-solid fa-check"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t</form> \n\t\t\t`,c.insertAdjacentHTML("afterbegin",e);let i=document.getElementById("x"),s=document.getElementById("cifras");i.focus(),document.querySelector("#btn_unit1").addEventListener("click",(t=>{t.preventDefault(),p(),m(),b(`http://127.0.0.1:8000/ues/unidad${n}/${l.replace(" ","").toLowerCase()}/`,{x:i.value,cifras:s.value}).then((t=>t.json())).then((t=>{t.error?(p(),Swal.fire({icon:"error",title:"Oops...",text:t.error})):y(t)}))}));break;case"2":if("Gráfico"==l)d.classList.add("hidden"),u.classList.remove("hidden");else{u.classList.add("hidden");let o=Number(t.dataset.params);e=`\n\t\t\t\t\t<form id='unit2-form' method='POST'>\n\t\t\t\t\t\t<div class='method'>\n\t\t\t\t\t\t\t<span class="label">${a}</span>\n\t\t\t\t\t\t\t<div style="margin-bottom: 1.5rem;">\n\t\t\t\t\t\t\t\t<label for="function" class="label">Función: </label>\n\t\t\t\t\t\t\t\t<input type="text" name="function" id="function" class="input" placeholder="sin(x) - x"/>\n\t\t\t\t\t\t\t\t<label for="cifras" class="label">Cifras: </label>\n\t\t\t\t\t\t\t\t<input type="number" name="cifras" id="cifras" class="input input_method"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form> \n\t\t\t\t`,c.insertAdjacentHTML("afterbegin",e);let i=document.createElement("div");for(let t=0;t<o;t++){let e=document.createElement("label");e.setAttribute("for",`param${t+1}`),e.classList.add("label"),e.textContent=`param${t+1}: `;let n=document.createElement("input");n.setAttribute("type","number"),n.setAttribute("name",`param${t+1}`),n.setAttribute("id","params"),n.classList.add("input"),i.appendChild(e),i.appendChild(n)}document.querySelector(".method").appendChild(i);let s="<button type='submit' id='btn_unit2' class='btn btn-submit'><i class=\"fa-solid fa-check\"></i></button>";document.querySelector(".method").insertAdjacentHTML("beforeend",s);let r=document.querySelector("#function"),d=document.querySelector("#cifras"),f=document.querySelectorAll("#params");document.querySelector("#btn_unit2").addEventListener("click",(t=>{t.preventDefault(),p(),m();let e=[];f.forEach((t=>e.push(t.value))),"bairstow"!==l.toLowerCase()&&(e=e.sort((function(t,e){return t-e}))),b(`http://127.0.0.1:8000/ues/unidad${n}/${l.toLowerCase()}/`,{funcion:r.value,cifras:d.value,params:e}).then((t=>t.json())).then((t=>{t.error?(p(),Swal.fire({icon:"error",title:"Oops...",text:t.error})):y(t)}))}))}break;case"3":e=`\n\t\t\t\t<form id='unit3-form' method='POST'>\n\t\t\t\t\t<div class='method fontvar'>\n\t\t\t\t\t\t<span class='label'>${a}</span>\n\t\t\t\t\t\t<div style="margin-top: 2rem;">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<label for="poly" class="label">Polinomio: </label>\n\t\t\t\t\t\t\t\t<input type="text" name="poly" id="poly" class="input" placeholder="x^2 - 5*x + 4"/>\n\t\t\t\t\t\t\t\t<label for="interpolar" class="label">Interpolar: </label>\n\t\t\t\t\t\t\t\t<input type="text" name="interpolar" id="interpolar" class="input"/>\n\t\t\t\t\t\t\t\t<label for="makeTable" class="label">Ingresar los datos en una Tabla </label>\n\t\t\t\t\t\t\t\t<input type="checkbox" name="makeTable" id="makeTable"/>\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<table class="polynomial-table">\n\t\t\t\t\t\t\t\t<tbody class="body-table">\n\t\t\t\t\t\t\t\t\t<tr class="ptr">\n\t\t\t\t\t\t\t\t\t\t<td class="ptc init">x</td>\n\t\t\t\t\t\t\t\t\t\t<td class="ptc"><input type="text" class="axis"/></td>\n\t\t\t\t\t\t\t\t\t\t<td class="ptc"><input type="text" class="axis"/></td>\n\t\t\t\t\t\t\t\t\t\t<td class="ptc"><button type="button" class="add-col"><i class="fa-solid fa-plus"></i></button></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t`,c.insertAdjacentHTML("afterbegin",e);let r=document.querySelector(".body-table"),f=document.querySelector(".add-col"),v='<td class="ptc"><input type="text" class="axis"/></td>';f.addEventListener("click",(function(){if(this.parentElement.insertAdjacentHTML("beforebegin",v),r.childNodes.length-2>1){let t='<td class="ptc"><input type="text" class="epsilon"/></td>';if(document.querySelectorAll(".ptr")[1].insertAdjacentHTML("beforeend",t),"Hermite"==l){let t='<td class="ptc"><input type="text" class="diffepsilon"></td>';document.querySelectorAll(".ptr")[2].insertAdjacentHTML("beforeend",t)}}})),document.querySelector("#makeTable").addEventListener("change",(function(){if(this.checked){document.querySelector("#poly").value="",document.querySelector("#poly").disabled=!0;let t=document.querySelector(".ptr").childNodes.length-7,e=document.createElement("tr");e.setAttribute("class","ptr");let n=document.createElement("td");n.setAttribute("class","ptc init"),n.textContent="y",e.appendChild(n);for(let n=0;n<t;n++){let t=document.createElement("td");t.setAttribute("class","ptc");let n=document.createElement("input");n.setAttribute("type","text"),n.setAttribute("class","epsilon"),t.appendChild(n),e.appendChild(t)}if(r.appendChild(e),"Hermite"==l){let e=document.createElement("tr");e.setAttribute("class","ptr");let n=document.createElement("td");n.setAttribute("class","ptc init"),n.textContent="y'",e.appendChild(n);for(let n=0;n<t;n++){let t=document.createElement("td");t.setAttribute("class","ptc");let n=document.createElement("input");n.setAttribute("type","text"),n.setAttribute("class","diffepsilon"),t.appendChild(n),e.appendChild(t)}r.appendChild(e)}}else if(document.querySelector("#poly").disabled=!1,"Hermite"==l)r.removeChild(document.querySelectorAll(".ptr")[2]),r.removeChild(document.querySelectorAll(".ptr")[1]);else{let t=r.lastChild;r.removeChild(t)}}));let h="<button type='submit' id='btn_unit3' class='btn btn-submit'><i class=\"fa-solid fa-check\"></i></button>";document.querySelector(".method").insertAdjacentHTML("beforeend",h),document.querySelector("#btn_unit3").addEventListener("click",(t=>{t.preventDefault(),p(),m();let e=document.querySelector("#poly")?.value,a=[],o=[],i=document.querySelectorAll(".axis"),s=document.querySelectorAll(".epsilon"),r=document.querySelector("#interpolar").value;i.forEach((t=>a.push(t.value))),s&&s.forEach((t=>o.push(t.value)));let c={};if("Hermite"==l){let t=[];document.querySelectorAll(".diffepsilon").forEach((e=>t.push(e.value))),c={polinomio:e,interpolar:r,xi:a,fi:o,dy:t}}else c={polinomio:e,interpolar:r,xi:a,fi:o};b(`http://127.0.0.1:8000/ues/unidad${n}/${l.toLowerCase()}/`,c).then((t=>t.json())).then((t=>{t.error?(p(),Swal.fire({icon:"error",title:"Oops...",text:t.error})):(console.log(t),y(t))}))}));break;case"4":if(l&&(e=`\n\t\t\t\t\t<form id='unit4-form' method='POST'>\n\t\t\t\t\t\t<div class='method fontvar'>\n\t\t\t\t\t\t\t<span class='label'>${a}</span>\n\t\t\t\t\t\t\t<div style='margin-top: 2rem;'>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<label for='function' class='label'>Función: </label>\n\t\t\t\t\t\t\t\t\t<input type="text" name="function" id="function" class="input" placeholder="cos(x)"/>\n\t\t\t\t\t\t\t\t\t${"Derivacion"==l||"Richardson"==l?"<label for='spc' class='label'>h: </label>":""}\n\t\t\t\t\t\t\t\t\t${"Derivacion"==l||"Richardson"==l?"<input type='text' name='spc' id='spc' class='input'/>":""}\n\t\t\t\t\t\t\t\t\t${"Derivacion"==l||"Richardson"==l?"<label for='value' class='label'>Valor: </label>":""}\n\t\t\t\t\t\t\t\t\t${"Derivacion"==l||"Richardson"==l?"<input type='text' name='value' id='value' class='input'/>":""}\n\t\t\t\t\t\t\t\t\t${"Integracion"==l||"Rosemberg"==l?"<label for='a' class='label'>a: </label>":""}\n\t\t\t\t\t\t\t\t\t${"Integracion"==l||"Rosemberg"==l?"<input type='text' name='a' id='a' class='input'>":""}\n\t\t\t\t\t\t\t\t\t${"Integracion"==l||"Rosemberg"==l?"<label for='b' class='label'>b: </label>":""}\n\t\t\t\t\t\t\t\t\t${"Integracion"==l||"Rosemberg"==l?"<input type='text' name='b' id='b' class='input'>":""}\n\t\t\t\t\t\t\t\t\t${"Richardson"==l||"Rosemberg"==l?"":'<label for="makeTable" class="label">Ingresar los datos en una Tabla </label>'}\n\t\t\t\t\t\t\t\t\t${"Richardson"==l||"Rosemberg"==l?"":'<input type="checkbox" name="makeTable" id="makeTable"/>'}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<table class="polynomial-table hidden">\n\t\t\t\t\t\t\t\t\t<tbody class="body-table">\n\t\t\t\t\t\t\t\t\t\t<tr class="ptr">\n\t\t\t\t\t\t\t\t\t\t\t<td class="ptc init">x</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class="ptc"><input type="text" class="axis"/></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class="ptc"><input type="text" class="axis"/></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class="ptc"><button type="button" class="add-col"><i class="fa-solid fa-plus"></i></button></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr class='ptr'>\n\t\t\t\t\t\t\t\t\t\t<td class="ptc init">y</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class="ptc"><input type="text" class="epsilon"/></td>\n\t\t\t\t\t\t\t\t\t\t\t<td class="ptc"><input type="text" class="epsilon"/></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t<div class='options'>\n\t\t\t\t\t\t\t\t\t<div class='select-group' style="display: ${"Derivacion"==l||"Richardson"==l?"block":"none"}">\n\t\t\t\t\t\t\t\t\t\t<label for='order' class='label'>Orden: </label>\n\t\t\t\t\t\t\t\t\t\t<div class='select-box'>\n\t\t\t\t\t\t\t\t\t\t\t<select name='order' id='order' class='select-menu'>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value='1'>Primer Derivada</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value='2'>Segunda Derivada</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value='3'>Tercer Derivada</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value='4'>Cuarta Derivada</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class='select-group' style="display: ${"Derivacion"==l||"Richardson"==l?"block":"none"}">\n\t\t\t\t\t\t\t\t\t\t<label for='metodo' class='label'>Método: </label>\n\t\t\t\t\t\t\t\t\t\t<div class='select-box'>\n\t\t\t\t\t\t\t\t\t\t\t<select name='metodo' id='metodo' class='select-menu'>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value='1'>Hacia adelante</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value='2'>Hacia atrás</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value='3'>Centrada</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value='4'>Tres puntos</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value='5'>Cinco puntos</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class='select-group' style="display: ${"Integracion"==l||"Rosemberg"==l?"block":"none"}">\n\t\t\t\t\t\t\t\t\t\t<label for='metodo' class='label'>Método: </label>\n\t\t\t\t\t\t\t\t\t\t<div class='select-box'>\n\t\t\t\t\t\t\t\t\t\t\t<select name='metodo' id='metodo' class='select-menu'>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value='1'>Trapecio Compuesto</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value='2'>Simpson 1/3</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value='3'>Simpson 3/8</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class='select-group' style="display: ${"Derivacion"==l||"Richardson"==l?"block":"none"}">\n\t\t\t\t\t\t\t\t\t\t<label for='mode' class='label'>Modo: </label>\n\t\t\t\t\t\t\t\t\t\t<div class='select-box'>\n\t\t\t\t\t\t\t\t\t\t\t<select name='mode' id='mode' class='select-menu'>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value='1'>Primer diferencia</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value='2'>Segunda diferencia</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t${"Richardson"==l||"Rosemberg"==l?"<label for='level' class='label'>Nivel: </label>":""}\n\t\t\t\t\t\t\t\t\t\t${"Richardson"==l||"Rosemberg"==l?"<input type='text' name='level' id='level' class='input' placeholder='2'>":""}\n\t\t\t\t\t\t\t\t\t\t${"Integracion"==l?"<label for='invervals' class='label'>Subintervalos: </label>":""}\n\t\t\t\t\t\t\t\t\t\t${"Integracion"==l?"<input type='text' name='intervals' id='intervals' class='input' placeholder='1'>":""}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<button type='submit' id='btn_unit4' class='btn btn-submit'><i class="fa-solid fa-check"></i></button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t`),c.insertAdjacentHTML("afterbegin",e),"Derivacion"==l||"Integracion"==l){let t=document.querySelector("#makeTable"),e=document.querySelector(".polynomial-table"),n=document.querySelector("#function"),a=document.querySelector("#spc");t.addEventListener("change",(function(){this.checked?(e.classList.remove("hidden"),n.value="",n.disabled=!0,"Derivacion"==l&&(a.value="",a.disabled=!0)):(e.classList.add("hidden"),n.disabled=!1,"Derivacion"==l&&(a.disabled=!1))}));let o=document.querySelector(".body-table"),i=document.querySelector(".add-col"),s='<td class="ptc"><input type="text" class="axis"/></td>';i.addEventListener("click",(function(){this.parentElement.insertAdjacentHTML("beforebegin",s),o.childNodes[3].insertAdjacentHTML("beforeend",'<td class="ptc"><input type="text" class="epsilon"/></td>')}))}document.querySelector("#btn_unit4").addEventListener("click",(t=>{t.preventDefault(),p(),m();let e=document.querySelector("#makeTable"),a=document.querySelector("#function")?document.querySelector("#function").value:"",o=document.querySelector("#metodo").value,i=[],s=[];if(e&&e?.checked){let t=document.querySelectorAll(".axis"),e=document.querySelectorAll(".epsilon");t&&t.forEach((t=>i.push(t.value))),e&&e.forEach((t=>s.push(t.value)))}if("Derivacion"==l||"Richardson"==l){let t,e=document.querySelector("#spc")?document.querySelector("#spc").value:"",r=document.querySelector("#value").value,c=document.querySelector("#order").value,d=document.querySelector("#mode").value;t="Derivacion"==l?{funcion:a,metodo:o,valor:r,espaciado:e,orden:c,modo:d,x:i,y:s}:{funcion:a,metodo:o,valor:r,espaciado:e,orden:c,modo:d,nivel:document.querySelector("#level").value,x:i,y:s},b(`http://127.0.0.1:8000/ues/unidad${n}/${l.toLowerCase()}/`,t).then((t=>t.json())).then((t=>{t.error?(p(),Swal.fire({icon:"error",title:"Oops...",text:t.error})):y(t)}))}else if("Integracion"==l||"Rosemberg"==l){let t,e=document.querySelector("#a").value,r=document.querySelector("#b").value;t="Integracion"==l?{funcion:a,metodo:o,n:document.querySelector("#intervals").value,a:e,b:r,x:i,y:s}:{funcion:a,metodo:o,a:e,b:r,nivel:document.querySelector("#level").value},b(`http://127.0.0.1:8000/ues/unidad${n}/${l.toLowerCase()}/`,t).then((t=>t.json())).then((t=>{t.error?(p(),Swal.fire({icon:"error",title:"Oops...",custonClass:"sweet-class",text:t.error})):y(t)}))}}));break;case"5":if(e=`\n\t\t\t\t<form id='unit5-form' method='POST'>\n\t\t\t\t\t<div class='method fontvar'>\n\t\t\t\t\t\t<span class='label'>${a}</span>\n\t\t\t\t\t\t<div style='margin-top: 2rem;'>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<label for='function' class='label'>Ecuación: </label>\n\t\t\t\t\t\t\t\t<input type="text" name="function" id="function" class="input" placeholder="y - x^2 + x + 1"/>\n\t\t\t\t\t\t\t\t<label for='xi' class='label'>x<sub>i</sub></label>\n\t\t\t\t\t\t\t\t<input type='text' name='xi' id='xi' class='input'>\n\t\t\t\t\t\t\t\t<label for='yi' class='label'>y<sub>i</sub></label>\n\t\t\t\t\t\t\t\t<input type='text' name='yi' id='yi' class='input'>\n\t\t\t\t\t\t\t\t${"Taylor"==l?'<label for="makeTable" class="label">Ingresar EDOs manualmente </label>':""}\n\t\t\t\t\t\t\t\t${"Taylor"==l?'<input type="checkbox" name="makeTable" id="makeTable"/>':""}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<table class="edos-table hidden">\n\t\t\t\t\t\t\t\t<tbody class="edos-body">\n\t\t\t\t\t\t\t\t\t<tr class="ptr">\n\t\t\t\t\t\t\t\t\t\t<td class="ptc init">y''</td>\n\t\t\t\t\t\t\t\t\t\t<td class="edos-function"><input type="text" class="ndiff"></td>\n\t\t\t\t\t\t\t\t\t\t<td class="ptc"><button type="button" class="add-col"><i class="fa-solid fa-plus"></i></button></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t<div style='margin-top: 4rem;>\n\t\t\t\t\t\t\t\t<label for="value" class='label'>valor: </label>\n\t\t\t\t\t\t\t\t<input type='text' name='value' id='value' class='input'>\n\t\t\t\t\t\t\t\t<label for='h' class='label'>h: </label>\n\t\t\t\t\t\t\t\t<input type='text' name='h' id='h' class='input'>\n\t\t\t\t\t\t\t\t<label for='n' class='label'>n: </label>\n\t\t\t\t\t\t\t\t<input type='text' name='n' id='n' class='input'>\n\t\t\t\t\t\t\t\t${"Taylor"==l||"RungeKutta"==l?"<labe for='grade' class='label'>Grado: </label>":""}\n\t\t\t\t\t\t\t\t${"Taylor"==l||"RungeKutta"==l?"<input type='text' name='grade' id='grade' class='input'>":""}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button type='submit' id='btn_unit5' class='btn btn-submit'><i class="fa-solid fa-check"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t`,c.insertAdjacentHTML("afterbegin",e),"Taylor"==l){let t=document.querySelector("#makeTable"),e=document.querySelector(".edos-table");t.addEventListener("change",(()=>{e.classList.toggle("hidden")}))}let g=document.querySelector(".edos-body");document.querySelector(".add-col").addEventListener("click",(function(){const t=`\n\t\t\t\t\t<tr class="ptr">\n\t\t\t\t\t\t<td class="ptc init">y<sup>${document.querySelectorAll(".ptr").length+2}</sup></td>\n\t\t\t\t\t\t<td class="edos-function"><input type="text" class="ndiff"></td>\n\t\t\t\t\t\t<td class="ptc"><button type="button" class="del-col"><i class="fa-solid fa-trash-can"></i></button></td>\n\t\t\t\t\t</tr>\n\t\t\t\t`;g.insertAdjacentHTML("beforeend",t)})),g.addEventListener("click",(function(t){t.target.parentElement.classList.contains("del-col")&&g.removeChild(t.target.parentElement.parentElement.parentElement)})),document.querySelector("#btn_unit5").addEventListener("click",(function(t){t.preventDefault(),p(),m();let e,a=document.querySelector("#function").value,o=document.querySelector("#xi").value,i=document.querySelector("#yi").value,s=document.querySelector("#value").value,r=document.querySelector("#h").value,c=document.querySelector("#n").value;if("Taylor"==l){let t=document.querySelectorAll(".ndiff"),n=document.querySelector("#grade").value,l=document.querySelector("#makeTable"),d=[];t&&l.checked&&t.forEach((t=>d.push(t.value))),e={ecuation:a,xi:o,yi:i,value:s,h:r,n:c,grade:n,ndiffs:d}}else e="RungeKutta"==l?{ecuation:a,xi:o,yi:i,value:s,h:r,n:c,grade:document.querySelector("#grade").value}:{ecuation:a,xi:o,yi:i,value:s,h:r,n:c};console.log(`http://127.0.0.1:8000/ues/unidad${n}/${l.toLowerCase()}/`),b(`http://127.0.0.1:8000/ues/unidad${n}/${l.toLowerCase()}/`,e).then((t=>t.json())).then((t=>{t.error?(p(),Swal.fire({icon:"error",title:"Oops...",custonClass:"sweet-class",text:t.error})):y(t)}))}))}}(e))}))}));
//# sourceMappingURL=index.02b95395.js.map
