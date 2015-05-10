angular.module("app").controller("DayController", DayController);

DayController.$inject = ["globalService","$location"];

function DayController(globalService, $location) {

	var vm = this;
	vm.cursos= globalService.getCursosDia();
	vm.reservasSala = globalService.getReservasSalaDia();
	vm.reservasPortatil = globalService.getReservasPortatilDia();
	
	
	vm.reservasSalaDia = function(){
		var disponibles=0;
		for (var i = 0; i < vm.reservasSala.length; i++){
			if(!vm.reservaSala[i].confirmada){
				diponibles+=1;
			}
		}
		return disponibles;
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
};