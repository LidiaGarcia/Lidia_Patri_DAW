angular.module("app").controller("MicuentaController", MicuentaController);

MicuentaController.$inject = ["globalService","$location","$routeParams"];

function MicuentaController(globalService, $location, $routeParams) {

	var vm = this;
	vm.hour=globalService.getHour();
	vm.date=globalService.getDate();
	vm.dayweek=globalService.getDayWeek();
	
	//View model properties
	vm.islog=globalService.islog();
	vm.persona=globalService.getPersona();
	vm.isadmin=globalService.isadmin();
	
	
	
	//Controller actions
	
	vm.print = function(){
		console.log(vm.hour);
		console.log(vm.hour[0]);
		console.log(vm.date);
		console.log(vm.dayweek);
		console.log("funciona");
		console.log(vm.islog);
		
	}
};