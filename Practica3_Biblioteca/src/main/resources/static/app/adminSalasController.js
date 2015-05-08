angular.module("app").controller("adminSalasController", adminSalasController);

adminSalasController.$inject = ["globalService","$location","$routeParams"];

function adminSalasController(globalService, $location, $routeParams) {
	
	var vm = this;
	vm.salas= globalService.getSalas();
	vm.sala={
		nombre:"",
		tamanio:"",
		estado:"mediana",
		compartida:false
	};
	
	vm.salamodificar={
			id:globalService.salamodificar.id,
			nombre:globalService.salamodificar.nombre,
			tamanio:globalService.salamodificar.tamanio,
			estado:globalService.salamodificar.estado,
			compartida:globalService.salamodificar.compartida
		};
	vm.nombre="";
	vm.tamanio="";
	vm.estado="";
	vm.compartida="";
	
	
	
	vm.modificar = function(sala){
		vm.salamodificar=globalService.setSalaModificar(sala);
		
		$location.path('/modifySala');
	}
	vm.modifySala = function(sala){

		if(sala.compartida==="si"){
			sala.compartida=true;
		}
		else{
			vm.salamodificar.compartida=false;
		}
		globalService.modifySala(sala);
		vm.salamodificar={};
		globalService.setSalaModificar(vm.salamodificar);
		$location.path('/adminsalas');
	}
	vm.newSala = function(){
		vm.sala.nombre=vm.nombre;
		if (vm.tamanio !==""){
			vm.sala.tamanio=vm.tamanio;
		}
		else{
			vm.sala.tamanio="mediana";
		}
		vm.sala.estado=vm.estado;
		if(vm.compartida==="si"){
			vm.sala.compartida=true;
		}
		else{
			vm.sala.compartida=false;
		}
		globalService.newSala(vm.sala);
		vm.sala={};
		$location.path('/adminsalas');
	}
	vm.deleteSala = function(sala){
		globalService.deleteSala(sala);
		vm.sala={};
		$location.path('/adminsalas');
	}
}