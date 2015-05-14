angular.module("app").controller("PortatilesController", PortatilesController);

PortatilesController.$inject = ["globalService","$location","$timeout" ];

function PortatilesController(globalService, $location, $timeout) {
	
	var vm = this;
	
	vm.portatil={};
	vm.portatilmodificar=globalService.portatilmodificar;
	vm.personas = globalService.getPersonas();
	vm.portatiles= globalService.getPortatiles();
	vm.hours=["9","10","11","12","13","14","15","16","17","18","19","20"];
	vm.date=globalService.getDate();
	vm.date2=globalService.date2;
	vm.reservas=globalService.allReserPortatiles();
	vm.allReservasPortatiles=[];
	vm.check=[];
	vm.personaReserva=[];
	vm.reservaTotal=new Array();
	vm.checkTotal=new Array();
	vm.confirmTotal=new Array();
	vm.verPortatil=true;
	vm.islog=globalService.islog();
	vm.persona=globalService.getPersona();
	vm.carga=false;
	vm.nombre="";
	vm.tamanio="";
	vm.estado="";
	vm.compartida="";
	vm.misPortatiles=globalService.getMisPortatiles();
	vm.fechaAnterior=false;
	
	setTimeout(function(){
		vm.fechaAnterior=globalService.fechaAnterior(vm.date2);}
	,100);
	
	vm.reload = function (){
		globalService.reload();		
		vm.misPortatiles=globalService.misportatiles;
		vm.portatiles =globalService.portatiles;
		vm.personas = globalService.personas;
		vm.reservas=globalService.allReserPortatiles();
		setTimeout(function(){
			vm.fechaAnterior=globalService.fechaanterior;
			vm.persona=globalService.getPersona();
			vm.date2=globalService.date2;
			vm.reservas=globalService.allReserPortatiles();}
		,1000);
		setTimeout(function(){
			vm.persona=globalService.persona;
			vm.allReservasPortatiles=globalService.allReservasPortatiles;
			vm.isReser();
			vm.carga=true;}
		,2050);
		
		
	}
	
	
	vm.modificar = function(portatil){
		vm.portatilmodificar=globalService.setPortatilModificar(portatil);
		vm.reload();

			$location.path('/modifyPortatil');
	
	}
	vm.modifyPortatil = function(portatil){
		globalService.modifyPortatil(portatil);
		vm.portatilmodificar={};
		globalService.setPortatilModificar(vm.portatilmodificar);
		vm.reload();
			$location.path('/portatiles');
		
		
	}
	vm.newPortatil = function(portatil){
		globalService.newPortatil(portatil);
		vm.portatil={};
		vm.reload();
		$location.path('/portatiles');
	}
	vm.deletePortatil = function(portatil){
		var reservada = true;	
		vm.allReservasPortatiles=globalService.allReservasPortatiles;
		setTimeout(function(){			
			
			for(index=0;index<vm.allReservasPortatiles.length;index++){
				if(vm.allReservasPortatiles[index].portatil.id==portatil.id){
					reservada=false;
				}	
			}	
			if(reservada){
				globalService.deletePortatil(portatil);
				vm.portatil={};
				reservada=false;
			}else{
				globalService.showAlert("No se puede eliminar un portátil con reservas");
			}
		},1000);
		setTimeout(function(){
			vm.reload();
		},1200);
		setTimeout(function(){
			$location.path('/portatiles');
		},1600);
		
	}
	
	vm.removeReservaPortatil = function(reserva){
		globalService.removeReservaPortatil(reserva);
		setTimeout(function(){
			vm.reload();
		},500);
		setTimeout(function(){
			$location.path("/misportatiles")
		},1000);
	}
	
	vm.isReser = function(){
		vm.verPortatil=true;
		vm.check=[];
		vm.confirm=[];
		vm.personaReserva=[];
		for(var index=0; index < vm.portatiles.length; index++){
			vm.check=[];
			vm.personaReserva=[];
			vm.confirm=[];
			for (var j = 0; j < vm.hours.length; j++){
				var check2 = false;
				var persoRes ={};
				var confirm2=false;
				for (var i = 0; i < vm.reservas[index].length; i++) {				
					if((vm.reservas[index][i].horaEntrada[0]==vm.hours[j])&&(vm.reservas[index][i].portatil.id)){
						check2=true;
						persoRes=(vm.reservas[index][i].persona);
						confirm2 = vm.reservas[index][i].confirmado;
					}	
				}
				vm.personaReserva.push(persoRes);
				vm.check.push(check2);	
				vm.confirm.push(confirm2);
			}	
			vm.reservaTotal[index]=vm.personaReserva;
			vm.checkTotal[index]=vm.check;
			vm.confirmTotal[index]=vm.confirm;
		}
	}
	
	vm.confirmar = function (i,persona,hour){
		for(var k=0; k < vm.reservas[i].length; k++){
			if(vm.reservas[i][k].persona.id===persona.id && vm.reservas[i][k].horaEntrada[0]==hour){
				globalService.confirmarReservaPortatil(vm.reservas[i][k].id);
			}
		}
		
		setTimeout(function(){	
			vm.reload();
			$location.path("/controlportatiles");
		},500);
		
	}
	
	vm.reservar = function (i,hora){
		vm.persona=globalService.getPersona();		
		setTimeout(function(){
			var reserva = {}
			reserva.portatil =vm.portatiles[i];
			reserva.persona = {};
			reserva.persona = vm.persona;
			reserva.fecha = vm.date2;
			reserva.horaEntrada=[];
			reserva.horaEntrada[0] = parseInt(hora);
			reserva.horaEntrada[1]=0;
			reserva.confirmada =false;
			globalService.reservarPortatil(reserva);
			}
		,2000);
		setTimeout(function(){
			vm.reload();
		},2100);
		setTimeout(function(){
			vm.isReser();
			$location.path("/reservaportatil")
		},3000);
		
	}
	
	vm.nextDay = function(){
		globalService.nextDay();
		setTimeout(function(){
			vm.reload();
		},100);
		setTimeout(function(){
			vm.isReser();
			$location.path("/reservaportatil")
		},650);
	}
	
	vm.previusDay = function(){
		globalService.previusDay();
		setTimeout(function(){
			vm.reload();
		},100);
		setTimeout(function(){
			vm.isReser();
			$location.path("/reservaportatil")
		},650);
	}

	
	setTimeout(function(){
		vm.reload();}
	,500);
}