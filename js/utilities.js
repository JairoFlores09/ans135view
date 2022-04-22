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
	switch(id){
		//================= UNIDAD 1 ====================
		case '1':
			let interval = element.dataset.interval;
			const html =`
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
				let description = element.textContent;
				const html = `
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
	}
}