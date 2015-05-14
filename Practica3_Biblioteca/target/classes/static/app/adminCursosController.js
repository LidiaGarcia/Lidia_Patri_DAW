angular.module("app").controller("adminCursosController", adminCursosController);

adminCursosController.$inject = ["globalService","$location"];

function adminCursosController(globalService, $location) {
	
	var vm = this;
	vm.cursos= globalService.getCursos();
	vm.miscursos = globalService.getMisCursos();
	vm.miscursos=globalService.miscursos;
	vm.carga=false;
	vm.checkAdd={};
	vm.checkAdd.add=true;
	vm.curso={};
	vm.cursomodificar=globalService.cursomodificar;
	vm.curso.fecha=[];
	vm.curso.hora=[];
	vm.islog=globalService.islog();
	
	vm.reload = function(){
		globalService.reload();
		vm.islog=globalService.islog();
		setTimeout(function(){
			vm.miscursos = globalService.miscursos;
			vm.cursos = globalService.cursos;}
		,1000);
		setTimeout(function(){
			
			vm.carga=true;}
		,2050);
		
	}
	vm.modificar = function(curso){
		vm.cursomodificar=globalService.setCursoModificar(curso);
		vm.reload();
		$location.path('/modifyCurso');
	}
	vm.modifyCurso = function(curso){
		globalService.modifyCurso(curso);
		vm.cursomodificar={};
		globalService.setCursoModificar(vm.cursomodificar);
		vm.reload();
		$location.path('/cursos');
	}
	vm.newCurso = function(curso){
		globalService.newCurso(curso);
		vm.curso={};
		vm.reload();
		$location.path('/cursos');
	}
	vm.deleteCurso = function(curso){
		globalService.deleteCurso(curso);
		vm.curso={};
		vm.reload();
		$location.path('/cursos');
	}
	vm.inscripcion = function(curso){	
		var inscrito = false;	
		setTimeout(function(){			
			
			for(index=0;index<vm.miscursos.length;index++){
				if(curso.id==vm.miscursos[index].id){
					inscrito=true;
				}	
			}	
			if(!inscrito){
				globalService.inscripcion(curso);
				inscrito=false;
			}else{
				globalService.showAlert("Ya estabas inscrito en este curso");
			}
		},100);
		setTimeout(function(){
			vm.reload();
		},300);
		setTimeout(function(){
			$location.path("/inscripcioncurso")
		},500);
	
		
	}
	vm.removeInscripcion = function(curso){
		globalService.removeInscripcion(curso);
		vm.reload();
		$location.path('/miscursos');
	}
		vm.reload();

	
}