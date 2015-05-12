angular.module("app").controller("DayController", DayController);

DayController.$inject = ["globalService","$location"];

function DayController(globalService, $location) {

	var vm = this;
	vm.cursos= globalService.getCursosDia();
	vm.salas= globalService.getSalas();
	vm.portatiles= globalService.getPortatiles();
	vm.reservasSala = globalService.getReservasSalaDia();
	vm.reservasPortatil = globalService.getReservasPortatilDia();
	vm.islog=globalService.islog();
	vm.carga=false;
	vm.disponiblesSala=0;
	vm.disponiblesPortatil=0;
	vm.numhoras=12;
	
	vm.reload = function (){
		globalService.reload();
		setTimeout(function(){
			vm.cursos= globalService.cursosHoy;		
			vm.salas= globalService.getSalas();
			vm.portatiles= globalService.getPortatiles();
			vm.reservasSala = globalService.reservasSalaHoy;
			vm.reservasPortatil = globalService.reservasPortatilHoy;
			
			}
		,2000);
		setTimeout(function(){
			vm.reservasSalaDia();
			vm.reservasPortatilDia();
			vm.carga=true;
			}
		,2500);

	}
	vm.reservasSalaDia = function(){
	
		vm.disponiblesSala = vm.salas.length*vm.numhoras - vm.reservasSala.length;
	}
	vm.reservasPortatilDia = function(){
		vm.disponiblesPortatil = vm.portatiles.length*vm.numhoras - vm.reservasPortatil.length;
	}
	
	setTimeout(function(){
		vm.reload();}
	,500);
};