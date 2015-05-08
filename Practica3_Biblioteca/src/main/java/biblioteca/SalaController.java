package biblioteca;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/salas")
public class SalaController {
	
	@Autowired
	private SalasRepo salas_repo;

	@RequestMapping(method=RequestMethod.GET)
	public List<Sala> getSalas(){
		return salas_repo.findAll();
	}
	@RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<Sala> addCurso(@RequestBody Sala sala, HttpSession sesion){
		if(((sesion!=null)&&(sesion.getAttribute("admin") != null))&&((Boolean)sesion.getAttribute("admin"))){
			salas_repo.save(sala);
			return new ResponseEntity<>(sala, HttpStatus.CREATED);
		}else{
			return null;
		}
	}
	
	@RequestMapping(value = "/{id}", method= RequestMethod.DELETE)
	public void deleteSala(@PathVariable long id,HttpSession sesion){
		if(((sesion!=null)&&(sesion.getAttribute("admin") != null))&&((Boolean)sesion.getAttribute("admin"))){
			salas_repo.delete(id);
		}
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Sala getCurso(@PathVariable long id){
		return salas_repo.findOne(id);
	}
	
	@RequestMapping(value = "/{id}", method=RequestMethod.PUT)
	public void modificar(@PathVariable long id, @RequestBody Sala sala, HttpSession sesion){
		if(((sesion!=null)&&(sesion.getAttribute("admin") != null))&&((Boolean)sesion.getAttribute("admin"))){
			salas_repo.setNombre(id,sala.getNombre());
			salas_repo.setCompartida(id,sala.getCompartida());
			salas_repo.setTamanio(id,sala.getTamanio());
			salas_repo.setEstado(id,sala.getEstado());
		}
	}
	
}
