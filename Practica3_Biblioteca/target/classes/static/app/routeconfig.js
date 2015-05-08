angular.module("app").config(RouteConfig);

RouteConfig.$inject = [ '$routeProvider' ];

function RouteConfig($routeProvider) {

	$routeProvider.when('/', { templateUrl : "templates/micuenta.html" , controller: LoginController});
	$routeProvider.when('/micuenta', { templateUrl : "templates/micuenta.html" , controller: LoginController});
	$routeProvider.when('/loginregistro', { templateUrl : "templates/loginregistro.html" , controller: LoginController});
	$routeProvider.when('/personalData', { templateUrl : "templates/personalData.html" });
	
	$routeProvider.when('/admincursos', { templateUrl : "templates/admincursos.html"});
	$routeProvider.when('/adminsalas', { templateUrl : "templates/adminsalas.html"});
	$routeProvider.when('/adminportatiles', { templateUrl : "templates/adminportatiles.html"});
	$routeProvider.when('/newCurso', { templateUrl : "templates/newCurso.html"});
	$routeProvider.when('/modifyCurso', { templateUrl : "templates/modifyCurso.html"});
	$routeProvider.when('/newSala', { templateUrl : "templates/newSala.html"});
	$routeProvider.when('/modifySala', { templateUrl : "templates/modifySala.html"});
	$routeProvider.when('/newPortatil', { templateUrl : "templates/newPortatil.html"});
	$routeProvider.when('/modifyPortatil', { templateUrl : "templates/modifyPortatil.html"});
	
	$routeProvider.when('/inscripcioncurso', { templateUrl : "templates/inscripcioncurso.html"});
}