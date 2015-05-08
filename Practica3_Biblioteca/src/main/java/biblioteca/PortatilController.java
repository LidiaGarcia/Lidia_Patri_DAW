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
@RequestMapping("/portatiles")
public class PortatilController {

	@Autowired
	private PortatilesRepo portatiles_repo;	
	
	@RequestMapping(method=RequestMethod.GET)
	public List<Portatil> getPortatil(){
		return portatiles_repo.findAll();
	}
	@RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<Portatil> addPortatil(@RequestBody Portatil portatil,HttpSession sesion){
		if(((sesion!=null)&&(sesion.getAttribute("admin") != null))&&((Boolean)sesion.getAttribute("admin"))){
			portatiles_repo.save(portatil);
			return new ResponseEntity<>(portatil, HttpStatus.CREATED);
		}else{
			return null;
		}
	}
	
	@RequestMapping(value = "/{id}", method= RequestMethod.DELETE)
	public void deletePortatiles(@PathVariable long id, HttpSession sesion){
		if(((sesion!=null)&&(sesion.getAttribute("admin") != null))&&((Boolean)sesion.getAttribute("admin"))){
			portatiles_repo.delete(id);
		}
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Portatil getPortatiles(@PathVariable long id){
		return portatiles_repo.findOne(id);
	}
	
	@RequestMapping(value = "/{id}", method=RequestMethod.PUT)
	public void modificar(@PathVariable long id, @RequestBody Portatil portatil,HttpSession sesion){
		if(((sesion!=null)&&(sesion.getAttribute("admin") != null))&&((Boolean)sesion.getAttribute("admin"))){
			portatiles_repo.setEstado(id,portatil.getEstado());
			portatiles_repo.setCaracteristicas(id,portatil.getCaracteristicas());
		}
	}
}
