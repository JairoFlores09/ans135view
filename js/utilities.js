'use strict';

//const URL = "https://ans135proyect.herokuapp.com/ans/";
const URL = "http://127.0.0.1:8000/ans/";
const formContainer = document.querySelector('.form-container');
const requestContainer = document.querySelector('.request-containter');
const ggb_element = document.querySelector('#ggb-element');

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
	let tableSummary = document.querySelector(".summary");
	if(tableSummary){
		let parent = tableSummary.parentElement;
		parent.removeChild(tableSummary);
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
							<span>${name}(${name == 'Ln' ? '1 +': ''}<input type='number' step='0.01' name='x' id='x' class='input__method' require='true'/>)
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
				let result = get_data(`${URL}unidad${id}/${name.replace(' ', '').toLowerCase()}/`,
				 {'x': x.value, 'cifras': cifras.value})
				.then(response => response.json())
				.then(data => {
					if(data['error']){
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
					let params = [];
					allParams.forEach(param => params.push(param.value));
					let result = get_data(`${URL}unidad${id}/${name.toLowerCase()}/`,
						{
							'funcion': funct.value,
							'cifras': cifras.value,
							'params': params.sort(function(a,b){return a - b})
						}).
					then(response => response.json())
					.then(data => {
						if(data['error']){
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
							<div">
								<label for="poly" class="label">Polinomio: </label>
								<input type="text" name="poly" id="poly" class="input" placeholder="x^2 - 5*x + 4"/>
								<label for="makeTable" class="label">Ingresar los datos en una Tabla </label>
								<input type="checkbox" name="makeTable" id="makeTable"/>
							</div>							
							<table class="polynomial-table">
								<tbody class="body-table">
									<tr class="ptr">
										<td class="ptc init">x</td>
										<td class="ptc"><input type="text" class="axis"/></td>
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
					tableBody.lastChild.insertAdjacentHTML('beforeend', elem2);
				}
			});
			// funcionalidad para el checkbox
			let check = document.querySelector("#makeTable");
			check.addEventListener('change', function(){
				if(this.checked){
					document.querySelector("#poly").value = "";
					// Si el usuario ha seleccionado introducir los datos por medio de una tabla
					document.querySelector("#poly").disabled = true;
					let ncolumns = (document.querySelector(".ptr").childNodes.length)-8;
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
				}
				else{
					// Si el usuario va a ingresar la funcion polinomica
					document.querySelector("#poly").disabled = false;
					let child = tableBody.lastChild;
					tableBody.removeChild(child);
				}
			});
			//creacion del boton de enviar
			let button = `<button type='submit' id='btn_unit3' class='btn btn-submit'><i class="fa-solid fa-check"></i></button>`;
			document.querySelector(".method").insertAdjacentHTML('beforeend', button);
			//envio de la informacion al servidor y procesamiento de la respuesta
			//Accion para el boton de enviar
			document.querySelector("#btn_unit3").addEventListener('click', (e)=>{
				e.preventDefault();
				let polinomyal = document.querySelector('#poly')?.value;
				let xvalues = [];
				let yvalues = [];
				let ixvalues = document.querySelectorAll(".axis");
				let iyvalues = document.querySelectorAll(".epsilon");
				ixvalues.forEach(ixvalue => xvalues.push(ixvalue.value));
				if (iyvalues){
					iyvalues.forEach(iyvalue => yvalues.push(iyvalue.value));
				}
				console.log(polinomyal);
				console.log(xvalues);
				console.log(yvalues);
			});
			break;
	}
}