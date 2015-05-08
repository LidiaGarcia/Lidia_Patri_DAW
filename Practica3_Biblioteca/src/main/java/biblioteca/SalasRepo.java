package biblioteca;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface SalasRepo extends JpaRepository<Sala, Long> {
	Sala findById(long id);
	@Modifying
	@Transactional
	@Query("update Sala p set p.nombre = ?2 where p.id= ?1")
	void setNombre(long id, String nombre);

	@Modifying
	@Transactional
	@Query("update Sala p set p.compartida = ?2 where p.id= ?1")
	void setCompartida(long id, boolean compartida);
	
	@Modifying
	@Transactional
	@Query("update Sala p set p.tamanio = ?2 where p.id= ?1")
	void setTamanio(long id, String tamanio);

	@Modifying
	@Transactional
	@Query("update Sala p set p.estado = ?2 where p.id= ?1")
	void setEstado(long id, String estado);
}