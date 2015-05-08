angular.module("app").controller("LoginController", LoginController);

LoginController.$inject = ["globalService","$location","$routeParams"];

function LoginController(globalService, $location, $routeParams) {

	var vm = this;
	vm.personas = globalService.getPersonas();
	
	//View model properties
	vm.persona=globalService.getPersona();
	vm.mail="";
	vm.maillog="";
	vm.pass="";
	vm.passlog="";
	vm.islog=globalService.islog();
	
	//Controller actions
	vm.login = function() {
		globalService.login(vm.maillog,vm.passlog);
		$location.path("/");
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