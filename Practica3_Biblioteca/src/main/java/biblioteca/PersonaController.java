package biblioteca;

import java.time.LocalDate;
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

import biblioteca.BibliotecaController.DayBefore;

@RestController
@RequestMapping("/personas")
public class PersonaController {

	public static class PassOk{
		public boolean passOk;
	}
	
	
	@Autowired
	private PersonasRepo personas_repo;
	
	@RequestMapping(method=RequestMethod.GET)
	public List<Persona> getPersonas(HttpSession sesion){
		return personas_repo.findAll();	
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<Persona> addPersona(@RequestBody Persona persona, HttpSession sesion){
		if((sesion!=null)&&((sesion.getAttribute("admin") != null)&&((Boolean)sesion.getAttribute("admin")))){
			personas_repo.save(persona);
			return new ResponseEntity<>(persona, HttpStatus.CREATED);
		}else{
			return null;
		}	
	}
	@RequestMapping(value = "/darAlta/{id}", method=RequestMethod.PUT)
	public void darAlta(@PathVariable long id,@RequestBody boolean b){
			personas_repo.setAlta(id,b);
	}
	
	
	@RequestMapping(value = "/misdatos/cambiarpass/{id}", method=RequestMethod.PUT)
	public void cambioPass(@PathVariable long id, @RequestBody String pass, HttpSession sesion){
		if((sesion!=null)&&((sesion.getAttribute("login") != null)&&((Boolean)sesion.getAttribute("login")))){
			personas_repo.setPass(id,pass);
		}
	}
	@RequestMapping(value = "/misdatos/passOK/{id}/{pass}", method=RequestMethod.GET)
	public PassOk passOK(@PathVariable long id, @PathVariable String pass ,HttpSession sesion){
		PassOk passOk = new PassOk();
		passOk.passOk = false;
		if((sesion!=null)&&((sesion.getAttribute("login") != null)&&((Boolean)sesion.getAttribute("login")))){			
			Persona persona=personas_repo.findById(id);
			if(persona.getPass().equals(pass)){
			passOk.passOk=true;}
		}
		return passOk;
	}
	
	
	/*
	//hace falta?
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Persona getPersona(@PathVariable long id){
		return personas_repo.findOne(id);
	}
	en elcaso de que haga falta poner en getCorreo /buscar/{correo}*/
	
	
}
