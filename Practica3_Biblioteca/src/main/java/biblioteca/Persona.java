package biblioteca;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Persona implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String nombre;
	private String apellidos;
	private String correo;
	private String pass;
	private boolean alta; // booleano para saber si la persona esta dada de alta en el sistema o no
	private boolean admin; // booleano para saber si la persona es un administrador del sistema o no
	
	public Persona(){}
	public Persona(String nombre, String apellidos, String correo, String pass, boolean alta, boolean admin) {
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.correo = correo;
		this.pass = pass;
		this.alta = alta;
		this.admin = admin;
	}
	public long getID() {
		return id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getApellidos() {
		return apellidos;
	}
	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}
	public String getCorreo() {
		return correo;
	}
	public void setCorreo(String correo) {
		this.correo = correo;
	}
	public String getPass() {
		return pass;
	}
	public void setPass(String pass) {
		this.pass = pass;
	}
	public boolean isAlta() {
		return alta;
	}
	public void setAlta(boolean alta) {
		this.alta = alta;
	}
	public boolean isAdmin() {
		return admin;
	}
	public void setAdmin(boolean admin) {
		this.admin = admin;
	}
	
	@Override
	public String toString() {
	    return new StringBuffer(" Nombre : ").append(this.nombre).append(", Apellidos : ").append(this.apellidos).append(", Correo : ").append(this.correo).append(", Pass : ").append(this.pass).append(", Alta: ").append(this.alta).append(", Admin : ").append(this.admin).toString();
	    }

	
}
