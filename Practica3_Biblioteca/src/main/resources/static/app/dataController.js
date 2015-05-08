angular.module("app").controller("DataController", DataController);

DataController.$inject = ["globalService","$location","$routeParams"];

function DataController(globalService, $location, $routeParams) {

	var vm = this;
	vm.persona = globalService.getPersona();
	
	vm.pass = function(pass) {
		globalService.pass(pass,vm.persona.id);
		$location.path("/personalData");
	};
	
};