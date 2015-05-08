package biblioteca;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Sala {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id; 
	private String nombre;
	private boolean compartida;
	private String tamanio;
	private String estado;
	
	public Sala(){}
	public Sala(String nombre, boolean compartida, String tamanio, String estado) {
		this.nombre = nombre;
		this.compartida = compartida;
		this.tamanio = tamanio;
		this.estado = estado;
	}
	public long getID() {
		return id;
	}
	public void setID(long iD) {
		id = iD;
	}
	public boolean getCompartida() {
		return compartida;
	}
	public void setCompartida(boolean compartida) {
		this.compartida = compartida;
	}
	public String getTamanio() {
		return tamanio;
	}
	public void setTamanio(String tamanio) {
		this.tamanio = tamanio;
	}
	public String getEstado() {
		return estado;
	}
	public void setEstado(String estado) {
		this.estado = estado;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
}
