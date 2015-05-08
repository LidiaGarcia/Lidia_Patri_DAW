package biblioteca;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface ReservaPortatilRepo extends JpaRepository<ReservaPortatil, Long> {
	
	ReservaPortatil findById(long id);
	
	@Query("SELECT DISTINCT p FROM ReservaPortatil p WHERE p.persona.id= ?1")
	List<ReservaPortatil> findByIdPersona(long id);
	@Query("SELECT DISTINCT p FROM ReservaPortatil p WHERE p.portatil.id= ?1 AND p.fecha=?2")
	List<ReservaPortatil> findByIdPortatilyFecha(long id, LocalDate fecha);
	
	@Modifying
	@Transactional
	@Query("update ReservaPortatil p set p.confirmado = true where p.id= ?1")
	void setConfirm(long id);
}