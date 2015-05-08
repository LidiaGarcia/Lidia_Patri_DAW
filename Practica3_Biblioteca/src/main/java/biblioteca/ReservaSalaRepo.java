package biblioteca;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;


public interface ReservaSalaRepo extends JpaRepository<ReservaSala, Long> {
	ReservaSala findById(long id);
	
	
	@Query("SELECT DISTINCT p FROM ReservaSala p WHERE p.persona.id= ?1")
	List<ReservaSala> findByIdPersona(long id);
	
	@Query("SELECT DISTINCT p FROM ReservaSala p WHERE p.sala.id= ?1 AND p.fecha=?2")
	List<ReservaSala> findByIdSalayFecha(long id, LocalDate fecha);
	
	@Modifying
	@Transactional
	@Query("update ReservaSala p set p.confirmada = true where p.id= ?1")
	void setConfirm(long id);

}