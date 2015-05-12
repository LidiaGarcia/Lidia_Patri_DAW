angular.module("app").controller("DayController", DayController);

DayController.$inject = ["globalService","$location"];

function DayController(globalService, $location) {

	var vm = this;
	vm.cursos= globalService.getCursosDia();
	vm.salas= globalService.getSalas();
	vm.portatiles= globalService.getPortatiles();
	vm.reservasPortatil = globalService.getReservasPortatilDia();
	vm.reservasSala = globalService.getReservasSalaDia();
	vm.islog=globalService.islog();
	vm.carga=false;
	vm.disponiblesSala=0;
	vm.disponiblesPortatil=0;
	vm.numhoras=12;
	
	vm.reload = function (){
		globalService.reload();
		setTimeout(function(){
			vm.salas= globalService.salas;
			vm.portatiles= globalService.portatiles;
			vm.cursos= globalService.cursosHoy;		
			vm.reservasSala = globalService.reservasSalaHoy;
			vm.reservasPortatil = globalService.reservasPortatilHoy;
			}
		,1200);
		setTimeout(function(){
			vm.reservasPortatilDia();
			vm.reservasSalaDia();			
			vm.carga=true;
			}
		,1500);

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