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
	vm.miscursos=[];
	vm.portatiles=[];
	vm.portatil={};
	vm.portatilmodificar={};
	vm.date={};
	vm.date2={};
	vm.reservasSalaHoy=[];
	vm.reservasPortatilHoy=[];
	vm.allReservas=[];

	//vm.fecha=[2015, 5, 24];
	
	
	//resources
	var BibliotecaHoraResource = $resource('/hour');
	var BibliotecaDateResource = $resource('/date');	
	var BibliotecaDiaSemanaResource = $resource('/dayWeek');
	var BibliotecaChangeDateResource = $resource('/date/:fecha/:day',{},
			{query:{method:'GET',params:{fecha: '@fecha',day: '@day'},isArray:true}});

	var ReservasSalaResource = $resource('/reservas/sala/:id/:fecha',{},
		{query:{method:'GET',params:{id: '@id',fecha: '@fecha'},isArray:true}});
	
	var ReservaSalaResource= $resource('/reservas/sala', {},
			{save:{method:'POST'}});
	var ReservasSalaHoyResource= $resource('/reservas/sala/hoy');
	
	
	var ReservasPortatilHoyResource= $resource('/reservas/portatil/hoy');
	var ConfirmarReservasSalaResource = $resource('/reservas/sala/:id',
			{id: '@id'},
			{'update': {method:'PUT'}}
			);
	
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
	var CursoEliminarInscripResource = $resource('/cursos/:id/removeinscrito',
			{id: '@id'},
			{eliminarinscripcion: {method: 'POST'}}
	);
	var MisCursosResource = $resource('/cursos/miscursos');
	
	var CursosHoyResource = $resource('/cursos/hoy');
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

	

	function reload(){
		CursosResource.query(function(newcursos){
			vm.cursos.length = 0;
			vm.cursos.push.apply(vm.cursos, newcursos);
			vm.salas.length=0;
			vm.salas.push.apply(vm.salas, newcursos);
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
		return CursoInscripResource.inscripcion({id:$id},function(){});
		
	}
	vm.getMisCursos = function(){
		vm.miscursos = MisCursosResource.query();
		return vm.miscursos;
	}
	vm.removeInscripcion = function(curso){
		$id=curso.id;
		CursoEliminarInscripResource.eliminarinscripcion({id:$id},function(){alert("Se ha borrado tu inscripción al curso correctamente")})
	}
	
	vm.getCursosDia = function(){
		return CursosHoyResource.query();
	}
	//salas
	vm.getSalas = function(){
		vm.salas=SalasResource.query();
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
		SalasResource.save(newSala,function() {alert("Nueva sala añadida")
		});
	}
	
	vm.deleteSala = function (sala){
		$id=sala.id;
		SalasResource.deleteSala({id:$id},function(){alert(sala.nombre+" eliminada")});	
	}
	
	vm.modifySala = function (sala){
		$id=sala.id;
		SalasModifyResource.update({id:$id},sala,function(){alert(sala.nombre+" modificada")});
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
		PortatilesResource.save(newPortatil,function() {alert("Nuevo portatil añadido")
		});
	}
	
	vm.deletePortatil = function (portatil){
		$id=portatil.id;
		PortatilesResource.deletePortatil({id:$id},function(){alert("Portatil "+portatil.id+" eliminado")});	
	}
	
	vm.modifyPortatil = function (portatil){
		$id=portatil.id;
		PortatilesModifyResource.update({id:$id},portatil,function(){alert("Portatil "+portatil.id+" modificado")});
	}
	
	

	//fechas y horas
	vm.getHour = function(){
		return BibliotecaHoraResource.query();
	}
	
	vm.getDate = function(){
		vm.date=BibliotecaDateResource.query();
		vm.date2=vm.date;
		return BibliotecaDateResource.query();
	}
	
	vm.getDayWeek = function(){
		return BibliotecaDiaSemanaResource.get();
	}
	vm.getOtherDate = function(date,suma){
		var days =-1;
		if (!suma){ days=1}
		var dayWeek =vm.getDayWeek();
		setTimeout(function(){
			if (dayWeek===5&&suma) {
				days = -3;
			}else if(dayWeek===1&&!suma){
				days = 3;
			}	
		}
		,500);
		$day=parseInt(days);
		
		return BibliotecaChangeDateResource.query({fecha:$fecha},{day:$day});
	}
	vm.nextDay = function(){
		vm.date2=vm.getOtherDate(vm.date2,true);	
	}
	vm.previusDay = function(){
		vm.date2=vm.getOtherDate(vm.date2,false);	
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
		vm.persona=SesionPersResource.get();
	}
	
	vm.logout = function() {
		vm.persona={};
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
			PassResource.update({id:$id},pass);

	}
	//reservas
	vm.getReservaSala = function(sala,date){
		$id=sala.id;
		$fecha=date[0]+"-"+ date[1]+"-"+date[2];
		return ReservasSalaResource.query({id:$id},{fecha:$fecha});				
	}
	
	vm.allReser = function(){
		var reser =[];
		var sal=vm.getSalas();
		setTimeout(function(){
			for (var i = 0; i < sal.length; i++) {
				var reservasr = vm.getReservaSala(sal[i],vm.date2);
				reser.push(reservasr);
			}	
		}
		,500);
		
		return reser;
	}
	
	vm.confirmarReservaSala = function(id){
		$id=id;
		ConfirmarReservasSalaResource.update({id:$id},function(){alert("Sala confirmada")});
	}
	
	vm.reservar = function(reserva){
		ReservaSalaResource.save(reserva,function(){alert('Has reservado una sala')});
	}
	
	vm.getReservasSalaDia = function(){
		setTimeout(function(){
			vm.reservasSalaHoy=ReservasSalaHoyResource.query();		
		},1500);
	}
	
	vm.getReservasPortatilDia = function(){
		setTimeout(function(){
			vm.reservasPortatilHoy=ReservasPortatilHoyResource.query();		
		},2000);

	}
	//otros
	vm.reload = function(){
		vm.allReservas=ReservaSalaResource.query();
		vm.personas=vm.getPersonas();
		vm.salas=vm.getSalas();
		vm.portatiles=vm.getPortatiles();
		vm.cursos=vm.getCursos();
		vm.miscursos=vm.getMisCursos();
		vm.reservasSalaHoy=vm.getReservasSalaDia();
		vm.reservasPortatilHoy=vm.getReservasPortatilDia();
	}
	//reloud
	function autoreload(){
		vm.reload();
		$timeout(autoreload, 1000);
	}
	
	autoreload();
	
}