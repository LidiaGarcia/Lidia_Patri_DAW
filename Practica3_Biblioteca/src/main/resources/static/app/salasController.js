angular.module("app").controller("SalasController", SalasController);

SalasController.$inject = ["globalService","$location","$routeParams"];

function SalasController(globalService, $location, $routeParams) {

	var vm = this;
	
	//View model properties

	vm.personas = globalService.getPersonas();	
	vm.salas=globalService.getSalas();
	vm.hours=[9,10,11,12,13,14,15,16,17,18,19,20];
	vm.date=globalService.getDate();
	vm.reservas=globalService.allReser();
	vm.check=[];
	vm.verSala=false;
	//vm.date=globalService.getDate().$promise.then(function(date){
	//	vm.reservas=globalService.getReservaSala(vm.salas[0],vm.date);
	//});
	
	//Controller actions
	
	vm.reload = function(){
		globalService.reload();
		vm.reservas=globalService.allReser();
		vm.salas=globalService.getSalas();
		vm.personas = globalService.getPersonas();	
		vm.date=globalService.getDate();
		vm.reservas=globalService.allReser();
	}
	vm.allReser = function(){
		var reser =[];
		for(sala in vm.salas){
			reser.push(globalService.getReservaSala(sala,vm.date));
		}	
		return reser;
	}
	
	vm.isReser = function(index){
		vm.verSala=true;
		vm.check=false;
		for(hour in vm.hours){
			var check2 = false;
			for (reser in vm.reservas[index]){
				if(reser.horaEntrada[0]===hour){
					check2=true;
				}
			}
			vm.check.push(check2);
		}
		//return vm.check;
	}
	
	vm.isReserDate = function(sala,hour,date){
		vm.reservas=globalService.getReservaSala(sala,date);
		//vm.check=false;
		/*for (reser in vm.reservas){
			console.log(reser.horaEntrada[0]);
			if(reser.horaEntrada[0]===hour){
				vm.check=true;
			}
		}*/
		return vm.hours;
	}
	
	
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