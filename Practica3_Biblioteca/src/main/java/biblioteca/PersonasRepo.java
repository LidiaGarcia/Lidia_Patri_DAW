package biblioteca;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface PersonasRepo extends JpaRepository<Persona, Long> {
	Persona findById(long id);

	
	@Modifying
	@Transactional
	@Query("update Persona p set p.alta = ?2 where p.id= ?1")
	void setAlta(long id, boolean b);
	
	@Modifying
	@Transactional
	@Query("update Persona p set p.admin = ?2 where p.id= ?1")
	void setAltaAdmin(long id, boolean b);
	
	@Modifying
	@Transactional
	@Query("update Persona p set p.pass = ?2 where p.id= ?1")
	void setPass(long id, String pass);
}