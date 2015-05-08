angular.module("app").controller("adminPortatilesController", adminPortatilesController);

adminPortatilesController.$inject = ["globalService","$location","$routeParams"];

function adminPortatilesController(globalService, $location, $routeParams) {
	
	var vm = this;
	vm.portatiles= globalService.getPortatiles();
	vm.portatil={};
	vm.portatilmodificar=globalService.portatilmodificar;

	
	vm.modificar = function(portatil){
		vm.portatilmodificar=globalService.setPortatilModificar(portatil);
		$location.path('/modifyPortatil');
	}
	vm.modifyPortatil = function(portatil){
		globalService.modifyPortatil(portatil);
		vm.portatilmodificar={};
		globalService.setPortatilModificar(vm.portatilmodificar);
		$location.path('/adminportatiles');
	}
	vm.newPortatil = function(portatil){
		globalService.newPortatil(portatil);
		vm.portatil={};
		$location.path('/adminportatiles');
	}
	vm.deletePortatil = function(portatil){
		globalService.deletePortatil(portatil);
		vm.portatil={};
		$location.path('/adminportatiles');
	}
}