package biblioteca;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import biblioteca.BibliotecaController.DayWeek;


@RestController
@RequestMapping("/sesion")
public class SesionController {
	
	
	public static class DatosSesion {
		public String mail;
		public String pass;
	}
	
	@Autowired
	private PersonasRepo personas_repo;
	
	//private HttpSession sesion;
	
	
	@RequestMapping(method = RequestMethod.GET)
	public List<Boolean> givemPerson(HttpSession sesion){
		List<Boolean> lista =new ArrayList<Boolean>();
		if(sesion.getAttribute("login")!=null){
			lista.add((Boolean)sesion.getAttribute("login"));
			lista.add((Boolean)sesion.getAttribute("admin"));
		}else{
			lista.add(false);
			lista.add(false);
		}
		return lista;
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public void giveyouPerson(@RequestBody DatosSesion datos, HttpSession sesion){
		for (Persona pers: personas_repo.findAll()) {
			if (pers.getCorreo().equalsIgnoreCase(datos.mail) && pers.getPass().equalsIgnoreCase(datos.pass)) {
					if(pers.isAlta()){
						if(pers.isAdmin()){
							sesion.setAttribute("admin",true);
						}else{
							sesion.setAttribute("admin",false);
						}
						sesion.setAttribute("login",true);
						sesion.setAttribute("persona",pers);
					}				
			}
		}		
	}
	
	@RequestMapping(method = RequestMethod.DELETE)
	public void giveoffPerson(HttpSession sesion){
		sesion.setAttribute("login",false);
		sesion.setAttribute("admin",false);
		sesion.setAttribute("persona",null);	
	}
	
	@RequestMapping(value="/persona",method = RequestMethod.GET)
	public Persona givemeOnePerson(HttpSession sesion){
		if((sesion!=null)&&(sesion.getAttribute("persona") != null)){
			Persona pers = ((Persona)sesion.getAttribute("persona"));
			pers.setPass("");
			sesion.setAttribute("persona", pers);
			return (Persona) sesion.getAttribute("persona");
		} else {		
			return null;
		}
	}	
}