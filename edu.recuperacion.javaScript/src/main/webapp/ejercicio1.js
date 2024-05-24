
function renovacionDni(){
	
	do{
		var edad=prompt("Introduzca su edad");
	}while(!Number(edad));
	
	var nombre=prompt("Introduzca su nombre");
	
	do{
		var numDni=prompt("Introduzca su numero del dni");
		
	}while(!Number(numDni) || numDni.length!=8);
	
	var fechaActual=new Date();
	var letrasDni=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C'
	,'K','E'];
	
	var resto=numDni%23;
	
	var dniCompleto=numDni+letrasDni[resto];
	
	console.log(dniCompleto);
	
	if(edad<5){
		fechaActual.setFullYear(fechaActual.getFullYear()+2);
	}else if(edad>=5&&edad<30){
		fechaActual.setFullYear(fechaActual.getFullYear()+5);
	}else if(edad>=30&&edad<70){
		fechaActual.setFullYear(fechaActual.getFullYear()+10);
	}else{
		
	}
}


