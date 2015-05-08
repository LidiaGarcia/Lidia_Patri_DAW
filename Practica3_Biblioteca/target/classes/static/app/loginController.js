angular.module("app").controller("LoginController", LoginController);

LoginController.$inject = ["globalService","$location","$routeParams"];

function LoginController(globalService, $location, $routeParams) {

	var vm = this;
	
	//View model properties
	vm.personas = globalService.getPersonas();
	vm.persona=globalService.getPersona();
	vm.mail="";
	vm.maillog="";
	vm.pass="";
	vm.passlog="";
	vm.islog=globalService.islog();
	
	//Controller actions
	vm.login = function() {
		globalService.login(vm.maillog,vm.passlog);
		setTimeout(function(){$location.path("/");},200);
	};
	vm.logout = function() {
		globalService.logout();
		$location.path("/loginregistro");
	};
	vm.signup = function(){
		globalService.signup(vm.mail,vm.pass);
		$location.path("/");
	}
};