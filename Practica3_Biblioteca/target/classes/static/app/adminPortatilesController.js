angular.module("app").controller("adminPortatilesController", adminPortatilesController);

adminPortatilesController.$inject = ["globalService","$location","$routeParams"];

function adminPortatilesController(globalService, $location, $routeParams) {
	
	var vm = this;
	vm.portatiles= globalService.getPortatiles();
	vm.portatil={};
	vm.portatilmodificar=globalService.portatilmodificar;
	vm.allReservasPortatiles=globalService.allReservasPortatiles;
	vm.carga=false;
	
	vm.reload = function (){
		globalService.reload();
		vm.portatiles =globalService.portatiles
		setTimeout(function(){
			vm.allReservasPortatiles=globalService.allReservas;
			vm.carga=true;}
		,1000);
		
	}
	
	
	vm.modificar = function(portatil){
		vm.portatilmodificar=globalService.setPortatilModificar(portatil);
		vm.reload();
		setTimeout(function(){
			$location.path('/modifyPortatil');}
		,500);
	}
	vm.modifyPortatil = function(portatil){
		globalService.modifyPortatil(portatil);
		vm.portatilmodificar={};
		globalService.setPortatilModificar(vm.portatilmodificar);
		vm.reload();
		setTimeout(function(){
			$location.path('/adminportatiles');}
		,500);
		
	}
	vm.newPortatil = function(portatil){
		globalService.newPortatil(portatil);
		vm.portatil={};
		vm.reload();
		setTimeout(function(){
			$location.path('/adminportatiles');}
		,500);
	}
	vm.deletePortatil = function(portatil){
		var reservada = true;	
		vm.allReservasPortatiles=globalService.allReservasPortatiles;
		setTimeout(function(){			
			
			for(index=0;index<vm.allReservasPortatiles.length;index++){
				console.log(vm.allReservasPortatiles[index]);
				if(vm.allReservasPortatiles[index].portatil.id==portatil.id){
					reservada=false;
				}	
			}	
			if(reservada){
				globalService.deletePortatil(portatil);
				vm.portatil={};
				reservada=false;
			}else{
				alert("No se puede eliminar un portátil con reservas");
			}
		},1000);
		setTimeout(function(){
			vm.reload();
		},1200);
		setTimeout(function(){
			$location.path('/adminportatiles');
		},1600);
		
	}
	
	setTimeout(function(){
		vm.reload();}
	,500);
}