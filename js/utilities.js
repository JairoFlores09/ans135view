'use strict';
import icons from "../img/icons.svg";
const URL = 'https://ans135proyect.herokuapp.com/ans/';
const formContainer = document.querySelector('.form-container');
const requestContainer = document.querySelector('.request-containter');
const ggb_element = document.querySelector('#ggb-element');

const clear = function(){
	let spinner = document.querySelector(".spinner");
	if(spinner){
		requestContainer.removeChild(spinner);
	}
}

const renderSpinner = function(){
	let tableSummary = document.querySelector(".summary");
	if(tableSummary){
		let parent = tableSummary.parentElement;
		parent.removeChild(tableSummary);
	}
	const markup = `
		<div class="spinner">
			<svg>
				<use href="${icons}#icon-loader"></use>
			</svg>
		</div>
	`;
	formContainer.parentElement.insertAdjacentHTML('beforeend', markup);
}

const get_data = function(url, data){
	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data)
	})
}

const resetTable = function(){
	let spinner = document.querySelector(".spinner");
	let tableSummary = document.querySelector(".summary");
	if(tableSummary){
		let parent = tableSummary.parentElement;
		parent.removeChild(tableSummary);
	}
	if(spinner){
		let parent = spinner.parentElement;
		parent.removeChild(spinner);
	}
}

const generate_table = function(response){
	resetTable();
	const keys = Object.keys(response);
	const directive = response[keys[0]];
	const table = document.createElement('table');
	const header = document.createElement('thead');
	const body = document.createElement('tbody');

	keys.forEach(key => {
		let head = document.createElement('th');
		head.appendChild(document.createTextNode(key));
		header.appendChild(head);
	});

	let counter = 0
	while(counter < directive.length){
		const row = document.createElement('tr');
		let cell = null;
		keys.forEach(key => {
			cell = document.createElement('td');
			cell.appendChild(document.createTextNode((response[key])[counter]));
			row.appendChild(cell);
			body.appendChild(row);
		});
		counter++;
	}
	table.appendChild(header);
	table.appendChild(body);
	table.classList.add('summary');
	formContainer.parentElement.appendChild(table);
}

export const requestData = function(element){
	formContainer.textContent = '';
	resetTable();
	requestContainer.classList.remove('hidden');
	if(!ggb_element.classList.contains('hidden')){
		ggb_element.classList.add('hidden');
	}
	let id = element.parentElement.dataset.id;
	let name = element.dataset.name;
	let description = element.textContent;
	let html;
	switch(id){
		//================= UNIDAD 1 ====================
		case '1':
			let interval = element.dataset.interval;
			html =`
				<form id='unit1-form' method='POST'>
					<div class='method'>
						<div>
							<span>${name == 'fraccion' ? "1 / 1 - ": name}(${name == 'Ln' ? '1 +': ''}<input type='number' step='0.01' name='x' id='x' class='input__method' require='true'/>)
							&nbsp; ${interval ? interval: ''}</span>
							<span>Cifras significativas: <input type='number' name='cifras' id='cifras' class='input__method' require='true'/></span>
						</div>
						<button type='submit' id='btn_unit1' class='btn btn-submit'><i class="fa-solid fa-check"></i></button>
					</div>
				</form> 
			`;
			formContainer.insertAdjacentHTML('afterbegin', html);
			let x = document.getElementById('x');
			let cifras = document.getElementById('cifras');
			x.focus();
			document.querySelector('#btn_unit1').addEventListener('click', (e)=>{
				e.preventDefault();
				clear()
				renderSpinner();
				let result = get_data(`${URL}unidad${id}/${name.replace(' ', '').toLowerCase()}/`,
				 {'x': x.value, 'cifras': cifras.value})
				.then(response => response.json())
				.then(data => {
					if(data['error']){
						clear();
						Swal.fire({
  						icon: 'error',
  						title: 'Oops...',
  						text: data['error'],
						});
					}else{
						generate_table(data);
					}
				})

			});
			break;
		//=================== UNIDAD 2 =====================
		case '2':
			if(name == "Gráfico"){
				requestContainer.classList.add("hidden");
				ggb_element.classList.remove("hidden");
			}
			else{
				ggb_element.classList.add("hidden");
				let nparams = Number(element.dataset.params);
				html = `
					<form id='unit2-form' method='POST'>
						<div class='method'>
							<span class="label">${description}</span>
							<div style="margin-bottom: 1.5rem;">
								<label for="function" class="label">Función: </label>
								<input type="text" name="function" id="function" class="input" placeholder="sin(x) - x"/>
								<label for="cifras" class="label">Cifras: </label>
								<input type="number" name="cifras" id="cifras" class="input input_method"/>
							</div>
						</div>
					</form> 
				`;
				formContainer.insertAdjacentHTML('afterbegin', html);
				let div = document.createElement('div');
				for (let i = 0; i < nparams; i++){
					let label = document.createElement('label');
					label.setAttribute('for',`param${i+1}`);
					label.classList.add("label");
					label.textContent = `param${i+1}: `;
					let input = document.createElement('input');
					input.setAttribute('type','number');
					input.setAttribute('name',`param${i+1}`);
					input.setAttribute('id',`params`);
					input.classList.add("input");
					div.appendChild(label);
					div.appendChild(input);
				}
				document.querySelector(".method").appendChild(div);
				let button = `<button type='submit' id='btn_unit2' class='btn btn-submit'><i class="fa-solid fa-check"></i></button>`;
				document.querySelector(".method").insertAdjacentHTML('beforeend', button);
				let funct = document.querySelector("#function");
				let cifras = document.querySelector("#cifras");
				let allParams = document.querySelectorAll("#params");
				document.querySelector("#btn_unit2").addEventListener('click', (e)=>{
					e.preventDefault();
					clear();
					renderSpinner();
					let params = [];
					allParams.forEach(param => params.push(param.value));
					if (name.toLowerCase() !== 'bairstow'){
						//El metodo de bairstow no requiere que los parametros viajen ordenados
						params = params.sort(function(a,b){return a - b});
					}
					let result = get_data(`${URL}unidad${id}/${name.toLowerCase()}/`,
						{
							'funcion': funct.value,
							'cifras': cifras.value,
							'params': params
						}).
					then(response => response.json())
					.then(data => {
						if(data['error']){
							clear();
							Swal.fire({
  							icon: 'error',
  							title: 'Oops...',
  							text: data['error'],
							});
						}else{
							generate_table(data);
						}			
					});
				});
			}
			break;
		case '3':
			//========================= UNIDAD 3 ==============================
			html = `
				<form id='unit3-form' method='POST'>
					<div class='method fontvar'>
						<span class='label'>${description}</span>
						<div style="margin-top: 2rem;">
							<div>
								<label for="poly" class="label">Polinomio: </label>
								<input type="text" name="poly" id="poly" class="input" placeholder="x^2 - 5*x + 4"/>
								<label for="interpolar" class="label">Interpolar: </label>
								<input type="text" name="interpolar" id="interpolar" class="input"/>
								<label for="makeTable" class="label">Ingresar los datos en una Tabla </label>
								<input type="checkbox" name="makeTable" id="makeTable"/>
							</div>							
							<table class="polynomial-table">
								<tbody class="body-table">
									<tr class="ptr">
										<td class="ptc init">x</td>
										<td class="ptc"><input type="text" class="axis"/></td>
										<td class="ptc"><input type="text" class="axis"/></td>
										<td class="ptc"><button type="button" class="add-col"><i class="fa-solid fa-plus"></i></button></td>
									</tr>
								</tbody>
							</table>
							
						</div>
					</div>
				</form>
			`;
			formContainer.insertAdjacentHTML('afterbegin', html);
			let tableBody = document.querySelector(".body-table");
			let btnAdd = document.querySelector(".add-col");
			let elem = `<td class="ptc"><input type="text" class="axis"/></td>`;
			btnAdd.addEventListener('click', function(){
				this.parentElement.insertAdjacentHTML('beforebegin', elem);
				if((tableBody.childNodes.length - 2) > 1){
					let elem2 = `<td class="ptc"><input type="text" class="epsilon"/></td>`;
					document.querySelectorAll(".ptr")[1].insertAdjacentHTML('beforeend', elem2);
					if(name == "Hermite"){
						let elem3 = `<td class="ptc"><input type="text" class="diffepsilon"></td>`;
						document.querySelectorAll(".ptr")[2].insertAdjacentHTML('beforeend', elem3);
					}
				}

			});
			// funcionalidad para el checkbox
			let check = document.querySelector("#makeTable");
			check.addEventListener('change', function(){
				if(this.checked){
					document.querySelector("#poly").value = "";
					// Si el usuario ha seleccionado introducir los datos por medio de una tabla
					document.querySelector("#poly").disabled = true;
					let ncolumns = (document.querySelector(".ptr").childNodes.length)-7;
					//se crea la fila
					let row = document.createElement('tr');
					row.setAttribute("class","ptr");
					// se crea el identificador de la fila
					let init = document.createElement("td");
					init.setAttribute("class","ptc init");
					init.textContent = "y";
					row.appendChild(init);
					for(let i = 0; i < ncolumns; i++){
						let td = document.createElement('td');
						td.setAttribute('class','ptc');
						let input = document.createElement('input');
						//se agregan los atributos para el input
						input.setAttribute('type','text');
						input.setAttribute('class','epsilon');
						td.appendChild(input);
						row.appendChild(td);
					}
					tableBody.appendChild(row);
					
					if(name == "Hermite"){

						let row2 = document.createElement('tr');
						row2.setAttribute("class","ptr");
						let init2 = document.createElement('td');
						init2.setAttribute("class","ptc init");
						init2.textContent = "y'";
						row2.appendChild(init2);
						for(let i = 0; i < ncolumns; i++){
							let td = document.createElement('td');
							td.setAttribute('class',"ptc");
							let input = document.createElement('input');
							input.setAttribute("type",'text');
							input.setAttribute('class','diffepsilon');
							td.appendChild(input);
							row2.appendChild(td);
						}
						tableBody.appendChild(row2);
					}
				}
				else{
					// Si el usuario va a ingresar la funcion polinomica
					document.querySelector("#poly").disabled = false;
					if(name == "Hermite"){
						tableBody.removeChild(document.querySelectorAll(".ptr")[2]);
						tableBody.removeChild(document.querySelectorAll(".ptr")[1]);
					}else{
						let child = tableBody.lastChild;
						tableBody.removeChild(child);
					}
				}
			});
			//creacion del boton de enviar
			let button = `<button type='submit' id='btn_unit3' class='btn btn-submit'><i class="fa-solid fa-check"></i></button>`;
			document.querySelector(".method").insertAdjacentHTML('beforeend', button);
			//envio de la informacion al servidor y procesamiento de la respuesta
			//Accion para el boton de enviar
			document.querySelector("#btn_unit3").addEventListener('click', (e)=>{
				e.preventDefault();
				clear();
				renderSpinner();
				let polinomyal = document.querySelector('#poly')?.value;
				let xvalues = [];
				let yvalues = [];
				let ixvalues = document.querySelectorAll(".axis");
				let iyvalues = document.querySelectorAll(".epsilon");
				let interpolar = document.querySelector("#interpolar").value;
				ixvalues.forEach(ixvalue => xvalues.push(ixvalue.value));
				if (iyvalues){
					iyvalues.forEach(iyvalue => yvalues.push(iyvalue.value));
				}
				let parametros = {};
				if(name == "Hermite"){
					let dyvalues = []
					let idyvalues = document.querySelectorAll(".diffepsilon");
					idyvalues.forEach(idyvalue => dyvalues.push(idyvalue.value));
					parametros = {
						'polinomio': polinomyal,
						'interpolar': interpolar,
						'xi': xvalues,
						'fi': yvalues,
						'dy': dyvalues
					};
				}
				else{
					parametros = {
						'polinomio': polinomyal,
						'interpolar': interpolar,
						'xi': xvalues,
						'fi': yvalues
					};
				}
				let result = get_data(`${URL}unidad${id}/${name.toLowerCase()}/`, parametros)
				.then(response => response.json())
				.then(data => {
					if(data['error']){
						clear();
						Swal.fire({
						  icon: 'error',
						  title: 'Oops...',
						  text: data['error'],
						});
					}else{
						console.log(data);
						generate_table(data);
					}
				});
			});
			break;
		//========================= UNIDAD 4 ==============================
		case '4':
			if(name){
				html = `
					<form id='unit4-form' method='POST'>
						<div class='method fontvar'>
							<span class='label'>${description}</span>
							<div style='margin-top: 2rem;'>
								<div>
									<label for='function' class='label'>Función: </label>
									<input type="text" name="function" id="function" class="input" placeholder="cos(x)"/>
									${name == 'Derivacion' || name == 'Richardson' ? "<label for='spc' class='label'>h: </label>" : ""}
									${name == 'Derivacion'  || name == 'Richardson' ?"<input type='text' name='spc' id='spc' class='input'/>" : ""}
									${name == 'Derivacion' || name == 'Richardson' ? "<label for='value' class='label'>Valor: </label>": ""}
									${name == 'Derivacion' || name == 'Richardson' ? "<input type='text' name='value' id='value' class='input'/>": ""}
									${name == "Integracion" || name == "Rosemberg" ? "<label for='a' class='label'>a: </label>":""}
									${name == "Integracion" || name == "Rosemberg" ? "<input type='text' name='a' id='a' class='input'>":""}
									${name == "Integracion" || name == "Rosemberg" ? "<label for='b' class='label'>b: </label>":""}
									${name == "Integracion" || name == "Rosemberg" ? "<input type='text' name='b' id='b' class='input'>": ""}
									${name == 'Richardson' || name == 'Rosemberg' ? '':'<label for="makeTable" class="label">Ingresar los datos en una Tabla </label>'}
									${name == 'Richardson' || name == 'Rosemberg' ? '':'<input type="checkbox" name="makeTable" id="makeTable"/>'}
								</div>
								<table class="polynomial-table hidden">
									<tbody class="body-table">
										<tr class="ptr">
											<td class="ptc init">x</td>
											<td class="ptc"><input type="text" class="axis"/></td>
											<td class="ptc"><input type="text" class="axis"/></td>
											<td class="ptc"><button type="button" class="add-col"><i class="fa-solid fa-plus"></i></button></td>
										</tr>
										<tr class='ptr'>
										<td class="ptc init">y</td>
											<td class="ptc"><input type="text" class="epsilon"/></td>
											<td class="ptc"><input type="text" class="epsilon"/></td>
										</tr>
									</tbody>
								</table>
								<div class='options'>
									<div class='select-group' style="display: ${name == "Derivacion" || name == "Richardson" ? 'block': 'none'}">
										<label for='order' class='label'>Orden: </label>
										<div class='select-box'>
											<select name='order' id='order' class='select-menu'>
												<option value='1'>Primer Derivada</option>
												<option value='2'>Segunda Derivada</option>
												<option value='3'>Tercer Derivada</option>
												<option value='4'>Cuarta Derivada</option>
											</select>
										</div>
									</div>
									<div class='select-group' style="display: ${name == "Derivacion" || name == "Richardson" ? 'block': 'none'}">
										<label for='metodo' class='label'>Método: </label>
										<div class='select-box'>
											<select name='metodo' id='metodo' class='select-menu'>
												<option value='1'>Hacia adelante</option>
												<option value='2'>Hacia atrás</option>
												<option value='3'>Centrada</option>
												<option value='4'>Tres puntos</option>
												<option value='5'>Cinco puntos</option>
											</select>
										</div>
									</div>
									<div class='select-group' style="display: ${name == "Integracion" || name == "Rosemberg" ? 'block': 'none'}">
										<label for='metodo' class='label'>Método: </label>
										<div class='select-box'>
											<select name='metodo' id='metodo' class='select-menu'>
												<option value='1'>Trapecio Compuesto</option>
												<option value='2'>Simpson 1/3</option>
												<option value='3'>Simpson 3/8</option>
											</select>
										</div>
									</div>
									<div class='select-group' style="display: ${name == "Derivacion" || name == "Richardson" ? 'block': 'none'}">
										<label for='mode' class='label'>Modo: </label>
										<div class='select-box'>
											<select name='mode' id='mode' class='select-menu'>
												<option value='1'>Primer diferencia</option>
												<option value='2'>Segunda diferencia</option>
											</select>
										</div>
									</div>
									<div>
										${name == 'Richardson' || name == "Rosemberg" ? "<label for='level' class='label'>Nivel: </label>" : ''}
										${name == 'Richardson' || name == "Rosemberg" ? "<input type='text' name='level' id='level' class='input' placeholder='2'>" : ''}
										${name == 'Integracion' ? "<label for='invervals' class='label'>Subintervalos: </label>": ""}
										${name == 'Integracion' ? "<input type='text' name='intervals' id='intervals' class='input' placeholder='1'>":""}
									</div>
								</div>
							</div>
							<button type='submit' id='btn_unit4' class='btn btn-submit'><i class="fa-solid fa-check"></i></button>
						</div>
					</form>
				`;
			}

			formContainer.insertAdjacentHTML('afterbegin', html);
			//Evento de tablas, solo es valida para la derivacion y la integracion
			if(name == "Derivacion" || name == "Integracion"){
				let check2 = document.querySelector('#makeTable');
				let table = document.querySelector('.polynomial-table');
				let funcion = document.querySelector('#function');
				let spc = document.querySelector('#spc');
				check2.addEventListener('change', function(){
					if(this.checked){
						table.classList.remove('hidden');
						funcion.value = '';
						funcion.disabled = true;
						if(name == "Derivacion"){
							spc.value = '';
							spc.disabled = true;
						}
	
					}else{
						table.classList.add('hidden');
						funcion.disabled = false;
						if(name == "Derivacion"){
							spc.disabled = false;
						}
					}
				});
				//agrega mas datos a la tabla
				let tableBody2 = document.querySelector('.body-table');
				let btnAdd2 = document.querySelector(".add-col");
				let elem2 = `<td class="ptc"><input type="text" class="axis"/></td>`;
				btnAdd2.addEventListener('click', function(){
					this.parentElement.insertAdjacentHTML('beforebegin', elem2);
					let elem3 = `<td class="ptc"><input type="text" class="epsilon"/></td>`;
					tableBody2.childNodes[3].insertAdjacentHTML('beforeend', elem3);
				});
			}

			//Envio de los datos del formulario
			document.querySelector('#btn_unit4').addEventListener('click', (e)=>{
				e.preventDefault();
				clear();
				renderSpinner();
				let check2 = document.querySelector('#makeTable');
				let funcion = (document.querySelector('#function')) ? document.querySelector('#function').value : "";
				let metodo = document.querySelector("#metodo").value;
				let xvalues = [];
				let yvalues = [];
				if(check2 && check2?.checked){
					let ixvalues = document.querySelectorAll(".axis");
					let iyvalues = document.querySelectorAll(".epsilon");
					if(ixvalues){
						ixvalues.forEach(ixvalue => xvalues.push(ixvalue.value));
					}
					if(iyvalues){
						iyvalues.forEach(iyvalues => yvalues.push(iyvalues.value));
					}
				}
				if(name == "Derivacion" || name == "Richardson"){
					let espaciado = (document.querySelector('#spc')) ? document.querySelector('#spc').value : "";
					let valor = document.querySelector("#value").value;
					let orden = document.querySelector("#order").value;
					let modo = document.querySelector("#mode").value;
					let parametros;
					if (name == 'Derivacion'){
						parametros = {
							'funcion': funcion,
							'metodo': metodo,
							'valor': valor,
							'espaciado': espaciado,
							'orden': orden,
							'modo': modo,
							'x': xvalues,
							'y': yvalues
						};
					}
					else{
						let nivel = document.querySelector("#level").value;
						parametros = {
							'funcion': funcion,
							'metodo': metodo,
							'valor': valor,
							'espaciado': espaciado,
							'orden': orden,
							'modo': modo,
							'nivel': nivel,
							'x': xvalues,
							'y': yvalues
						};
					}
					//Envia los datos da la derivada o Richardson
					let result = get_data(`${URL}unidad${id}/${name.toLowerCase()}/`, parametros)
					.then(response => response.json())
					.then(data => {
						if(data['error']){
							clear();
							Swal.fire({
							  icon: 'error',
							  title: 'Oops...',
							  text: data['error'],
							});
						}else{
							generate_table(data);
						}
					});
				}
				else if(name == "Integracion" || name == "Rosemberg"){
					let a = document.querySelector("#a").value;
					let b = document.querySelector("#b").value;
					let parametros;
					if(name == 'Integracion'){
						let subintervalos = document.querySelector("#intervals").value;
						parametros = {
							'funcion': funcion,
							'metodo': metodo,
							'n': subintervalos,
							'a': a,
							'b': b,
							'x': xvalues,
							'y': yvalues
						};
					}
					else{
						let nivel = document.querySelector("#level").value;
						parametros = {
							'funcion': funcion,
							'metodo': metodo,
							'a': a,
							'b': b,
							'nivel': nivel,
						};
					}
					//Envio del formulario para Integracion y Rosemberg
					let result = get_data(`${URL}unidad${id}/${name.toLowerCase()}/`, parametros)
					.then(response => response.json())
					.then(data => {
						if(data['error']){
							clear();
							Swal.fire({
							  icon: 'error',
							  title: 'Oops...',
							  custonClass: "sweet-class",
							  text: data['error'],
							});
						}else{
							generate_table(data);
						}
					});
				}
			});
			break;
	} // Fin del switch
} // Fin de la funcion requestData