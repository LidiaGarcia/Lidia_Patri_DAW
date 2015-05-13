angular.module("app").controller("MicuentaController", MicuentaController);

MicuentaController.$inject = ["globalService","$location"];

function MicuentaController(globalService, $location) {

	var vm = this;
	
	//View model properties
	vm.islog=globalService.islog();
	vm.persona=globalService.getPersona();
};