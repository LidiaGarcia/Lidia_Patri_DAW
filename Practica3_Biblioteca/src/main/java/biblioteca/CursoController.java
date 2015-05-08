package biblioteca;

import java.util.List;

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
	public ResponseEntity<Curso> addCurso(@RequestBody Curso curso){
		cursos_repo.save(curso);
		return new ResponseEntity<>(curso, HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/{id}", method= RequestMethod.DELETE)
	public void deleteCurso(@PathVariable long id){
		cursos_repo.delete(id);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Curso getCurso(@PathVariable long id){
		return cursos_repo.findOne(id);
	}
	
	@RequestMapping(value = "/{id}", method=RequestMethod.PUT)
	public void modificar(@PathVariable long id, @RequestBody Curso curso){
		cursos_repo.setNombre(id,curso.getNombre());
		cursos_repo.setDescripcion(id,curso.getDescripcion());
		cursos_repo.setFecha(id,curso.getFecha());
		cursos_repo.setHora(id,curso.getHora());
		cursos_repo.setDuracion(id,curso.getDuracion());
		cursos_repo.setAforo(id,curso.getAforo());	
	}
	@RequestMapping(value = "/{id}/inscrito/{idPersona}", method=RequestMethod.POST)
	public void addPersonaCurso(@PathVariable long id, @PathVariable long idPersona){
		Persona persona = personas_repo.findOne(idPersona);
		Curso curso = cursos_repo.findById(id);
		curso.addInscrito(persona);
		cursos_repo.save(curso);
	}
	
}