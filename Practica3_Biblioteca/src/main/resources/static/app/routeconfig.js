angular.module("app").config(RouteConfig);

RouteConfig.$inject = [ '$routeProvider' ];

function RouteConfig($routeProvider) {

	$routeProvider.when('/', { templateUrl : "templates/vistadia.html" , controller: LoginController});
	$routeProvider.when('/micuenta', { templateUrl : "templates/micuenta.html" , controller: LoginController});
	$routeProvider.when('/loginregistro', { templateUrl : "templates/loginregistro.html" , controller: LoginController});
	$routeProvider.when('/personalData', { templateUrl : "templates/personalData.html" });
	
	$routeProvider.when('/cursos', { templateUrl : "templates/cursos.html"});
	$routeProvider.when('/salas', { templateUrl : "templates/salas.html"});
	$routeProvider.when('/portatiles', { templateUrl : "templates/portatiles.html"});
	$routeProvider.when('/controlsalas', { templateUrl : "templates/controlsalas.html"});
	$routeProvider.when('/controlportatiles', { templateUrl : "templates/controlportatiles.html"});
	
	$routeProvider.when('/newCurso', { templateUrl : "templates/newCurso.html"});
	$routeProvider.when('/modifyCurso', { templateUrl : "templates/modifyCurso.html"});
	$routeProvider.when('/newSala', { templateUrl : "templates/newSala.html"});
	$routeProvider.when('/modifySala', { templateUrl : "templates/modifySala.html"});
	$routeProvider.when('/newPortatil', { templateUrl : "templates/newPortatil.html"});
	$routeProvider.when('/modifyPortatil', { templateUrl : "templates/modifyPortatil.html"});
	
	$routeProvider.when('/inscripcioncurso', { templateUrl : "templates/inscripcioncurso.html"});
	$routeProvider.when('/missalas', { templateUrl : "templates/missalas.html"});
	$routeProvider.when('/miscursos', { templateUrl : "templates/miscursos.html"});
	$routeProvider.when('/misportatiles', { templateUrl : "templates/misportatiles.html"});
	
	$routeProvider.when('/vistadia', {templateUrl : "templates/vistadia.html"});
	
	$routeProvider.when('/reservasala', {templateUrl : "templates/reservasala.html"});
	$routeProvider.when('/reservaportatil', {templateUrl : "templates/reservaportatil.html"});
	
	
		
}