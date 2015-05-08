angular.module("app").controller("SalasController", SalasController);

SalasController.$inject = ["globalService","$location","$routeParams"];

function SalasController(globalService, $location, $routeParams) {

	var vm = this;
	
	//View model properties

	vm.personas = globalService.getPersonas();	
	vm.salas=globalService.getSalas();
	vm.hours=[9,10,11,12,13,14,15,16,17,18,19,20];
	vm.check=false;
	//vm.date=globalService.getDate().$promise.then(function(date){
	//	vm.reservas=globalService.getReservaSala(vm.salas[0],vm.date);
	//});
	
	//Controller actions
	
	vm.reload = function(){
		var reservas = globalService.getReservaSala(vm.salas[0],vm.date);
		vm.isReser = true;
	}
	
//	vm.isReser = function(sala,hour){
//		
//		//vm.check=false;
//		/*for (reser in vm.reservas){
//			console.log(reser.horaEntrada[0]);
//			if(reser.horaEntrada[0]===hour){
//				vm.check=true;
//			}
//		}*/
//		return vm.hours;
//	}
	
	
	/*vm.getNameReser = function(sala,hour){
		vm.reservas=globalService.getReservaSala(sala,vm.date);
		for (reser in vm.reservas){
			if(reser.horaEntrada[0]===hour){
				vm.personaReserva=reser.persona;
			}
		}
		//return vm.personaReserva.name;
		return "";
	}*/
	
//		$location.path("/");
		
};