package biblioteca;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Portatil {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String estado;
	private String caracteristicas;
	
	public Portatil (){}
	
	public Portatil(String estado, String caracteristicas) {
		this.estado = estado;
		this.caracteristicas = caracteristicas;
	}

	public long getID() {
		return this.id;
	}

	public void setID(long iD) {
		this.id = iD;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getCaracteristicas() {
		return caracteristicas;
	}

	public void setCaracteristicas(String caracteristicas) {
		this.caracteristicas = caracteristicas;
	}
	
}
