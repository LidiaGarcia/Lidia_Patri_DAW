angular.module("app").controller("DayController", DayController);

DayController.$inject = ["globalService","$location"];

function DayController(globalService, $location) {

	var vm = this;
	vm.cursos= globalService.getCursosDia();
	console.log(vm.cursos);
	vm.salas= globalService.getSalas();
	vm.reservasSala = globalService.getReservasSalaDia();
	vm.reservasPortatil = globalService.getReservasPortatilDia();
	vm.islog=globalService.islog();
	vm.carga=false;
	vm.disponibles=0;
	vm.numhoras=12;
	
	vm.reload = function (){
		globalService.reload();
		setTimeout(function(){
			vm.cursos= globalService.getCursosDia();		
			vm.salas= globalService.getSalas();
			vm.reservasSala = globalService.reservasSalaHoy;
			vm.reservasPortatil = globalService.getReservasPortatilDia();
			
			}
		,2000);
		setTimeout(function(){
			console.log(vm.reservasSala);
			vm.reservasSalaDia();
			vm.carga=true;
			}
		,3000);

	}
	vm.reservasSalaDia = function(){
	
		vm.disponibles = vm.salas.length*vm.numhoras - vm.reservasSala.length;
	}
	vm.reservasPortatilDia = function(){
		var disponibles=0;
		for (var i = 0; i < vm.reservasPortatil.length; i++){
			if(!vm.reservasPortatil[i].confirmado){
				diponibles+=1;
			}
		}
		return disponibles;
	}
	
	setTimeout(function(){
		vm.reload();}
	,200);
};