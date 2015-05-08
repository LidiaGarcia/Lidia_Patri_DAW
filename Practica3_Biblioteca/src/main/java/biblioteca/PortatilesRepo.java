package biblioteca;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface PortatilesRepo extends JpaRepository<Portatil, Long> {
	Portatil findById(long id);
	
	@Modifying
	@Transactional
	@Query("update Portatil p set p.estado = ?2 where p.id= ?1")
	void setEstado(long id, String estado);

	@Modifying
	@Transactional
	@Query("update Portatil p set p.caracteristicas = ?2 where p.id= ?1")
	void setCaracteristicas(long id, String caracteristicas);
}