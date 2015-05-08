package biblioteca;


import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;

@Entity
public class Curso {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String nombre;
	private String descripcion;
	@JsonSerialize(using = LocalDateSerializer.class)
	@JsonDeserialize(using = LocalDateDeserializer.class)
	private LocalDate fecha;
	private LocalTime hora;
	private int duracion;
	private int aforo;
	@ManyToMany
	private List<Persona> listaInscritos;
		
	public Curso(){}

	public Curso(String nombre, String descripcion, LocalDate fecha,
			LocalTime hora, int duracion, int aforo) {
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.fecha = fecha;
		this.hora = hora;
		this.duracion = duracion;
		this.aforo = aforo;
		this.listaInscritos = new ArrayList<Persona>();
	}

	public long getID() {
		return this.id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public LocalDate getFecha() {
		return fecha;
	}

	public void setFecha(int anio, int mes, int dia) {
		this.fecha=LocalDate.of(anio, mes, dia);
	}

	public LocalTime getHora() {
		return hora;
	}

	public void setHora(int hora, int min) {
		this.hora = LocalTime.of(hora, min);
	}

	public int getDuracion() {
		return duracion;
	}

	public void setDuracion(int duracion) {
		this.duracion = duracion;
	}

	public int getAforo() {
		return aforo;
	}

	public void setAforo(int aforo) {
		this.aforo = aforo;
	}

	public List<Persona> getListaInscritos() {
		return listaInscritos;
	}

	public boolean addInscrito(Persona persona){
		return this.listaInscritos.add(persona);
	}
	
	public boolean remove(Persona persona){
		return this.listaInscritos.remove(persona);
	}

	@Override
	public boolean equals(Object obj) {
		return (((Curso)obj).getID()==this.getID());
	}
	
}