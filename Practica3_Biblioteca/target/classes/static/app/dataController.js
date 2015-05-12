angular.module("app").controller("DataController", DataController);

DataController.$inject = ["globalService","$location"];

function DataController(globalService, $location) {

	var vm = this;
	vm.persona = globalService.getPersona();
	
	vm.pass = function(pass) {
		globalService.pass(pass,vm.persona.id);
		$location.path("/personalData");
	};
	
};