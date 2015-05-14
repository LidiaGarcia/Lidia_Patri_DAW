angular.module("app").controller("DataController", DataController);

DataController.$inject = ["globalService","$location"];

function DataController(globalService, $location) {

	var vm = this;
	vm.persona = globalService.getPersona();
	vm.islog=globalService.islog();
	vm.correcta = false;
	
	vm.pass = function(pass2,pass1,pass0) {
		
		setTimeout(function(){ 
		vm.correcta = globalService.passCorrecta(pass0,vm.persona.id);},200);
		
		setTimeout(function(){			
			if(pass2!==pass1){
				globalService.showAlert("Las contraseñas no coinciden");
			}else{
				if(vm.correcta.passOk){
					globalService.pass(pass2,vm.persona.id);
					correcta=false;
				}else{
					globalService.showAlert("La contraseña introducida no es correcta");
				}
			}
		},300);
		setTimeout(function(){
		$location.path("/personalData");},200);
	};
	
	
};