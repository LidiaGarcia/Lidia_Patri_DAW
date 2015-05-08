angular.module("app").controller("SalasController", SalasController);

SalasController.$inject = ["globalService","$location","$routeParams"];

function SalasController(globalService, $location, $routeParams) {

	var vm = this;
	
	//View model properties

	vm.personas = globalService.getPersonas();	
	vm.salas=globalService.getSalas();
	vm.hours=["9","10","11","12","13","14","15","16","17","18","19","20"];
	vm.date=globalService.getDate();
	vm.reservas=globalService.allReser();
	vm.check=[];
	vm.personaReserva=[];
	vm.verSala=false;

	
	//Controller actions
	
	vm.reload = function(){
		globalService.reload();
		vm.reservas=globalService.allReser();
		vm.salas=globalService.getSalas();
		vm.personas = globalService.getPersonas();	
		vm.date=globalService.getDate();
		vm.reservas=globalService.allReser();
	}

	
	vm.isReser = function(index){
		vm.verSala=true;
		vm.check=[];
		vm.personaReserva=[];
		for (var j = 0; j < vm.hours.length; j++) {
			var check2 = false;
			var persoRes ={};
			console.log(vm.reservas[index]);
			for (var i = 0; i < vm.reservas[index].length; i++) {
				console.log(vm.reservas[index][i]);
				console.log(vm.hours[j]);
				console.log(vm.reservas[index][i].horaEntrada[0]);
				if(vm.reservas[index][i].horaEntrada[0]==vm.hours[j]){
					check2=true;
					persoRes=(vm.reservas[index][i].persona);
					console.log(check2);
				}	
			}
			vm.personaReserva.push(persoRes);
			vm.check.push(check2);
		}
		console.log(vm.check);
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