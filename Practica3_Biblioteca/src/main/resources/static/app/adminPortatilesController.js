angular.module("app").controller("adminPortatilesController", adminPortatilesController);

adminPortatilesController.$inject = ["globalService","$location","$routeParams"];

function adminPortatilesController(globalService, $location, $routeParams) {
	
	var vm = this;
	vm.portatiles= globalService.getPortatiles();
	vm.portatil={};
	vm.portatilmodificar=globalService.portatilmodificar;
	vm.allReservasPortatiles=globalService.allReservas;
	vm.carga=false;
	
	vm.reload = function (){
		globalService.reload();
		vm.portatiles =globalService.portatiles
		setTimeout(function(){
			vm.allReservasPortatiles=globalService.allReservas;
			vm.carga=true;}
		,1000);
		
	}
	
	
	vm.modificar = function(portatil){
		vm.portatilmodificar=globalService.setPortatilModificar(portatil);
		vm.reload();
		setTimeout(function(){
			$location.path('/modifyPortatil');}
		,500);
	}
	vm.modifyPortatil = function(portatil){
		globalService.modifyPortatil(portatil);
		vm.portatilmodificar={};
		globalService.setPortatilModificar(vm.portatilmodificar);
		vm.reload();
		setTimeout(function(){
			$location.path('/adminportatiles');}
		,500);
		
	}
	vm.newPortatil = function(portatil){
		globalService.newPortatil(portatil);
		vm.portatil={};
		vm.reload();
		setTimeout(function(){
			$location.path('/adminportatiles');}
		,500);
	}
	vm.deletePortatil = function(portatil){
		globalService.deletePortatil(portatil);
		vm.portatil={};
		vm.reload();
		setTimeout(function(){
			$location.path('/adminportatiles');}
		,500);
	}
	
	setTimeout(function(){
		vm.reload();}
	,500);
}