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
	vm.reservaTotal=new Array();
	vm.checkTotal=new Array();
	vm.verSala=false;
	vm.islog=globalService.islog();
	vm.persona=globalService.persona;

	
	
	//Controller actions
	
	vm.reload = function(){
		globalService.reload();
		vm.reservas=globalService.allReser();
		vm.salas=globalService.getSalas();
		vm.personas = globalService.getPersonas();	
		vm.date=globalService.getDate();
		vm.reservas=globalService.allReser();
		vm.isReser();
	}

	
	vm.isReser = function(){
		vm.verSala=true;
		vm.check=[];
		vm.personaReserva=[];
		for(var index=0; index < vm.salas.length; index++){
			vm.check=[];
			vm.personaReserva=[];
			for (var j = 0; j < vm.hours.length; j++){
				var check2 = false;
				var persoRes ={};
				for (var i = 0; i < vm.reservas[index].length; i++) {				
					if((vm.reservas[index][i].horaEntrada[0]==vm.hours[j])&&(vm.reservas[index][i].sala.id)){
						check2=true;
						persoRes=(vm.reservas[index][i].persona);
						console.log(check2);
					}	
				}
				vm.personaReserva.push(persoRes);
				vm.check.push(check2);				
			}	
			vm.reservaTotal[index]=vm.personaReserva;
			vm.checkTotal[index]=vm.check;
		}
		console.log(vm.checkTotal);
		console.log(vm.reservaTotal);
	}
	

	vm.confirmar = function (i,persona,hour){
		for(var k=0; k < vm.reservas[i].length; k++){
			console.log(vm.reservas[i]);
			if(vm.reservas[i][k].persona.id===persona.id && vm.reservas[i][k].horaEntrada[0]==hour){
				console.log("dentro");
				globalService.confirmarReservaSala(vm.reservas[i][k].id);
			}
		}
	}	
};