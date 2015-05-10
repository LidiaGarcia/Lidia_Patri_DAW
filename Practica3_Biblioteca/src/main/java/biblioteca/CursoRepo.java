package biblioteca;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface CursoRepo extends JpaRepository<Curso, Long> {
	Curso findById(long id);
	
	@Modifying
	@Transactional
	@Query("update Curso p set p.nombre = ?2 where p.id= ?1")
	void setNombre(long id, String nombre);

	@Modifying
	@Transactional
	@Query("update Curso p set p.descripcion = ?2 where p.id= ?1")
	void setDescripcion(long id, String descripcion);

	@Modifying
	@Transactional
	@Query("update Curso p set p.fecha = ?2 where p.id= ?1")
	void setFecha(long id, LocalDate fecha);
	
	@Modifying
	@Transactional
	@Query("update Curso p set p.hora = ?2 where p.id= ?1")
	void setHora(long id, LocalTime hora);
	
	@Modifying
	@Transactional
	@Query("update Curso p set p.duracion = ?2 where p.id= ?1")
	void setDuracion(long id, int duracion);
	
	@Modifying
	@Transactional
	@Query("update Curso p set p.aforo = ?2 where p.id= ?1")
	void setAforo(long id, int aforo);
	
	@Modifying
	@Transactional
	@Query("update Curso p set p.listaInscritos = ?2 where p.id= ?1")
	void setInscritos(long id, List<Persona> personas);
	
	
	@Query("SELECT DISTINCT p FROM Curso p WHERE p.fecha=?1")
	List<Curso> findAllHoy(LocalDate fecha);
}