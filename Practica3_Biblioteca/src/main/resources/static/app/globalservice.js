angular.module("app").service("globalService", GlobalService);

GlobalService.$inject = [ "$resource", "$timeout" ];

function GlobalService($resource,$timeout) {
	
	//Variables
	var vm =this;
	vm.personas=[];
	vm.persona={};
	vm.salas=[];
	vm.sala={};
	vm.salamodificar={};
	vm.cursos=[];
	vm.curso={};
	vm.cursomodificar={};
	vm.portatiles=[];
	vm.portatil={};
	vm.portatilmodificar={};

	vm.fecha=('2015-04-25');
	
	//resources
	var BibliotecaHoraResource = $resource('/hour');
	var BibliotecaDateResource = $resource('/date');	
	var BibliotecaDiaSemanaResource = $resource('/dayWeek');	

	var ReservasSalaResource = $resource('/reservas/sala/:id/:fecha',{},{
	    query:{method:'GET',params:{id: '@id',fecha: '@fecha'},isArray:true}});
	
	//salas
	var SalasResource = $resource('/salas/:id',
			{id: '@id'},
			{deleteSala: {method: 'DELETE'}},
			{save: {method: 'POST'}}
	);
	var SalasModifyResource = $resource('/salas/:id',
			{id: '@id'},
			{'update': {method: 'PUT'}}
	);
	
	//personas
	var PersonasResource = $resource('/personas');

	
	//cursos
	var CursosResource = $resource('/cursos/:id',
			{id: '@id'},
			{deleteCurso: {method: 'DELETE'}},
			{save: {method: 'POST'}}
			
	);
	var CursosModifyResource = $resource('/cursos/:id',
		{id: '@id'},
		{'update': {method: 'PUT'}}
	);
	var CursoInscripResource = $resource('/cursos/:id/inscrito',
			{id: '@id'},
			{inscripcion: {method: 'POST'}}
	);
	
	//portatiles
	var PortatilesResource = $resource('/portatiles/:id',
			{id: '@id'},
			{deletePortatil: {method: 'DELETE'}},
			{save: {method: 'POST'}}
	);
	
	var PortatilesModifyResource = $resource('/portatiles/:id',
		{id: '@id'},
		{'update': {method: 'PUT'}}
	);
	
	var SignupResource = $resource('/personas/darAlta/:id',
			{id: '@id'},
			{ 'update': {method: 'PUT'}}
	);
	var PassResource = $resource ('/personas/misdatos/cambiarpass/:id',
			{id: '@id'},
			{'update': {method: 'PUT'}}
	);
	
	//sesion
	var SesionResource = $resource('/sesion',{save: {method: 'POST'},remove: {method: 'DELETE'}});
	var SesionPersResource = $resource('/sesion/persona');

	
	//Funciones

	//reloud
	function autoreload(){
		reload();
		$timeout(autoreload, 1000);
	}
	
	autoreload();

	function reload(){
		CursosResource.query(function(newcursos){
			vm.cursos.length = 0;
			vm.cursos.push.apply(vm.cursos, newcursos);
		});
	}

	
	//cursos
	vm.getCursos = function(){
		return CursosResource.query();
	}
	

	vm.setCursoModificar = function(curso){
		vm.cursomodificar=curso;
		return vm.cursomodificar;
	}
	
	vm.newCurso = function (newCurso){
		CursosResource.save(newCurso,function() {
		});
	}
	
	vm.deleteCurso = function (curso){
		$id=curso.id;
		CursosResource.deleteCurso({id:$id},function(){alert("curso eliminado")});	
	}
	
	vm.modifyCurso = function (curso){
		$id=curso.id;
		CursosModifyResource.update({id:$id},curso,function(){alert("curso modificado")});
	}
	
	vm.inscripcion = function(curso){
		$id=curso.id;
		CursoInscripResource.inscripcion({id:$id},function(){alert("Te has inscrito correctamente")})
	}
	//salas
	vm.getSalas = function(){
		return SalasResource.query();
		
	}
	
	vm.setSalaModificar = function(sala){
		vm.salamodificar.id=sala.id;
		vm.salamodificar.nombre=sala.nombre;
		vm.salamodificar.estado=sala.estado;
		vm.salamodificar.tamanio=sala.tamanio;
		if (sala.compartida===true){
			vm.salamodificar.compartida="si";
		}
		else{
			vm.salamodificar.compartida="no";
		}
		return vm.salamodificar;
	}
	
	vm.newSala = function (newSala){
		SalasResource.save(newSala,function() {
		});
	}
	
	vm.deleteSala = function (sala){
		$id=sala.id;
		SalasResource.deleteSala({id:$id},function(){alert("sala eliminada")});	
	}
	
	vm.modifySala = function (sala){
		console.log(sala.id);
		
		console.log(sala.nombre);
		console.log(sala.compartida);
		console.log(sala.estado);
		console.log(sala.tamanio);
		$id=sala.id;
		SalasModifyResource.update({id:$id},sala,function(){alert("sala modificada")});
	}
	
	//portatiles
	vm.getPortatiles = function(){
		return PortatilesResource.query();
	}
	
	vm.setPortatilModificar = function(portatil){
		vm.portatilmodificar=portatil;
		return vm.portatilmodificar;
	}
	
	vm.newPortatil = function (newPortatil){
		PortatilesResource.save(newPortatil,function() {
		});
	}
	
	vm.deletePortatil = function (portatil){
		$id=portatil.id;
		PortatilesResource.deletePortatil({id:$id},function(){alert("portatil eliminado")});	
	}
	
	vm.modifyPortatil = function (portatil){
		$id=portatil.id;
		PortatilesModifyResource.update({id:$id},portatil,function(){alert("portatil modificado")});
	}
	
	//reservas
	vm.getReservaSala = function(sala,date){
		if(islog()){
			return ReservasSalaResource.query({id:1},{fecha:vm.fecha});				
		}else{
			return null;
		}
		//$id=sala.id;
		//$fecha=vm.fecha
		//$fecha=date[0]+'-'+ date[1]+'-'+daget te[2];
		//console.log($fecha);
		//return null;
	}
	

	//fechas y horas
	vm.getHour = function(){
		return BibliotecaHoraResource.query();
	}
	
	vm.getDate = function(){
		return BibliotecaDateResource.query();
	}
	
	vm.getDayWeek = function(){
		return BibliotecaDiaSemanaResource.get();
	}
	
	//sesion
	vm.islog = function(){
		return SesionResource.query();
	}
	
	vm.getPersonas = function(){
		vm.personas=PersonasResource.query();		
		return 	vm.personas;
	}
	
	vm.getPersona = function(){
		return SesionPersResource.get();				
	}
	vm.login = function(mail, pass) {
		vm.datos={};
		vm.datos.mail=mail;
		vm.datos.pass=pass;
		SesionResource.save(vm.datos,function() {});
	}
	
	vm.logout = function() {
		SesionResource.remove(function() {});
	}
	vm.signup = function(mail,pass){

		for (var i = 0; i < vm.personas.length; i++) {
			if ((vm.personas[i].correo === mail)&&(vm.personas[i].pass === pass)) {
				vm.persona = vm.personas[i];
				$id=vm.persona.id;
				SignupResource.update({id:$id},true);			
			}
		}
		
	}

	vm.pass = function(pass,idpers){
			$id=idpers;
			console.log(SesionPersResource.get(),$id);
			PassResource.update({id:$id},pass);

	}
}