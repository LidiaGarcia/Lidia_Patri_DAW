angular.module("app").controller("MicuentaController", MicuentaController);

MicuentaController.$inject = ["globalService","$location"];

function MicuentaController(globalService, $location) {

	var vm = this;
	vm.hour=globalService.getHour();
	vm.date=globalService.getDate();
	vm.dayweek=globalService.getDayWeek();
	
	//View model properties
	vm.islog=globalService.islog();
	vm.persona=globalService.getPersona();
	
	
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