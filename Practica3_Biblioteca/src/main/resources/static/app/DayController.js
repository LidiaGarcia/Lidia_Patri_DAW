angular.module("app").controller("DayController", DayController);

DayController.$inject = ["globalService","$location"];

function DayController(globalService, $location) {

	var vm = this;
	vm.cursos= globalService.getCursosDia();
	console.log(vm.cursos);
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
			vm.cursos= globalService.getCursosDia();		
			vm.salas= globalService.getSalas();
			vm.portatiles= globalService.getPortatiles();
			vm.reservasSala = globalService.reservasSalaHoy;
			vm.reservasPortatil = globalService.getReservasPortatilDia();
			
			}
		,2000);
		setTimeout(function(){
			vm.reservasSalaDia();
			vm.carga=true;
			}
		,3000);

	}
	vm.reservasSalaDia = function(){
	
		vm.disponiblesSala = vm.salas.length*vm.numhoras - vm.reservasSala.length;
	}
	vm.reservasPortatilDia = function(){
		console.log(vm.portatiles.lenght);
		vm.disponiblesPortatil = vm.portatiles.length*vm.numhoras - vm.reservasPortatil.length;
	}
	
	setTimeout(function(){
		vm.reload();}
	,200);
};