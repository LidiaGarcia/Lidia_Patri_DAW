package biblioteca;

import java.util.ArrayList;
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
@RequestMapping("/cursos")
public class CursoController {
	
	@Autowired
	private CursoRepo cursos_repo;
	@Autowired
	private PersonasRepo personas_repo;

	@RequestMapping(method=RequestMethod.GET)
	public List<Curso> getCursos(){
		return cursos_repo.findAll();
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<Curso> addCurso(@RequestBody Curso curso, HttpSession sesion){
		if(((sesion!=null)&&(sesion.getAttribute("admin") != null))&&((Boolean)sesion.getAttribute("admin"))){	
			cursos_repo.save(curso);
			return new ResponseEntity<>(curso, HttpStatus.CREATED);
		}else{
			return null;
		}	
	}
	
	@RequestMapping(value = "/{id}", method= RequestMethod.DELETE)
	public void deleteCurso(@PathVariable long id, HttpSession sesion){
		if(((sesion!=null)&&(sesion.getAttribute("admin") != null))&&((Boolean)sesion.getAttribute("admin"))){		
			cursos_repo.delete(id);
		}
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Curso getCurso(@PathVariable long id){
		return cursos_repo.findOne(id);
	}
	
	@RequestMapping(value = "/{id}", method=RequestMethod.PUT)
	public void modificar(@PathVariable long id, @RequestBody Curso curso, HttpSession sesion){
		if(((sesion!=null)&&(sesion.getAttribute("admin") != null))&&((Boolean)sesion.getAttribute("admin"))){
			cursos_repo.setNombre(id,curso.getNombre());
			cursos_repo.setDescripcion(id,curso.getDescripcion());
			cursos_repo.setFecha(id,curso.getFecha());
			cursos_repo.setHora(id,curso.getHora());
			cursos_repo.setDuracion(id,curso.getDuracion());
			cursos_repo.setAforo(id,curso.getAforo());	

		}
	}
	@RequestMapping(value = "/{id}/inscrito", method=RequestMethod.POST)
	public void addPersonaCurso(@PathVariable long id, HttpSession sesion){
		if(((sesion!=null)&&(sesion.getAttribute("login") != null))&&((Boolean)sesion.getAttribute("login"))){
			Curso curso = cursos_repo.findById(id);
			curso.addInscrito(((Persona)sesion.getAttribute("persona")));
			cursos_repo.save(curso);
		}
	}
	@RequestMapping(value = "/{id}/removeinscrito", method=RequestMethod.POST)
	public void removePersonaCurso(@PathVariable long id, HttpSession sesion){
		if(((sesion!=null)&&(sesion.getAttribute("login") != null))&&((Boolean)sesion.getAttribute("login"))){
			Curso curso = cursos_repo.findById(id);
			curso.remove(((Persona)sesion.getAttribute("persona")));
			cursos_repo.save(curso);
		}
	}
	
	@RequestMapping(value = "/miscursos",method=RequestMethod.GET)
	public List<Curso> getmyCursos(HttpSession sesion){
		List<Curso> cursos=new ArrayList<Curso>();
		if(((sesion!=null)&&(sesion.getAttribute("login") != null))&&((Boolean)sesion.getAttribute("login"))){
			for(Curso curso: cursos_repo.findAll()){
				Persona pers=(Persona)sesion.getAttribute("persona");
				for (Persona p : curso.getListaInscritos()){
					if(p.getID()==pers.getID()){
						cursos.add(curso);
					}
				}
			}
		}
		
		return cursos;
	}
	
}
