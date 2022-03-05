document.addEventListener("DOMContentLoaded", function() {
	var input = document.getElementById('input');
	input.addEventListener('change', function () {
		console.log(input.files[0]);
		readXlsxFile(input.files[0]).then(function (data) {
			console.log(data);
			var table = document.getElementById('table');
			var th1 = document.createElement('th');
			var th2 = document.createElement('th');
			var th3 = document.createElement('th');
			th1.textContent='Numero';
			th2.textContent='Nome';
			th3.textContent='Controllo';
			table.appendChild(th1);
			table.appendChild(th2);
			table.appendChild(th3);
			for (var i = 0; i < 1084; i++) {
				var tr = document.createElement('tr');
				if ((i%2)==1)
				{
					tr.style.backgroundColor='#76b576';
				}
				else
				{
					tr.style.backgroundColor='#a1ffa1';
				}
				for (var j = 0; j < 3; j++) {
					var td = document.createElement('td');
					td.id = data[i][j];
					if (j==2)
					{

						var check = document.createElement('input');
						check.className='checkbtn';
						check.type='checkbox';
						if(data[i][j]==true)
						{
							check.checked='true';
						}
						td.className='prova';
						td.appendChild(check);
						
					}
					else
					{
						td.textContent = data[i][j];
						if (j==0)
						{
							td.className='prova';
						}
						
					}
					
					
					
					tr.appendChild(td);
				}
				table.appendChild(tr);
			}
			var prova = data[1][0];
			console.log(prova);
			console.log(input.files[0].name);
		});

	});
	document.getElementById('btnexcel').addEventListener('click', function(){
		var table2excel = new Table2Excel();
  		table2excel.export(document.querySelectorAll("table"));
	})
	
});


