angular.module("app").controller("adminCursosController", adminCursosController);

adminCursosController.$inject = ["globalService","$location","$routeParams"];

function adminCursosController(globalService, $location, $routeParams) {
	
	var vm = this;
	vm.cursos= globalService.getCursos();
	vm.curso={};
	vm.cursomodificar=globalService.cursomodificar;
	vm.curso.fecha=[];
	vm.curso.hora=[];
	
	
	vm.modificar = function(curso){
		vm.cursomodificar=globalService.setCursoModificar(curso);
		console.log("id",vm.curso.id);
		console.log("nombre",vm.curso.nombre);
		$location.path('/modifyCurso');
	}
	vm.modifyCurso = function(curso){
		console.log("id en admincursoscontrrolelr",curso.id);
		globalService.modifyCurso(curso);
		vm.cursomodificar={};
		globalService.setCursoModificar(vm.cursomodificar);
		$location.path('/admincursos');
	}
	vm.newCurso = function(curso){
		globalService.newCurso(curso);
		vm.curso={};
		$location.path('/admincursos');
	}
	vm.deleteCurso = function(curso){
		globalService.deleteCurso(curso);
		vm.curso={};
		$location.path('/admincursos');
	}
	vm.inscripcion = function(curso){
		globalService.inscripcion(curso);
		$location.path('/inscripcioncurso');
	}
}