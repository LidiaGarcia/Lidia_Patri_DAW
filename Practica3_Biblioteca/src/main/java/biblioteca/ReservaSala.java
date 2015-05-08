package biblioteca;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;

@Entity
public class ReservaSala {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	@OneToOne
	private Sala sala;
	@OneToOne
	private Persona persona;
	@JsonSerialize(using = LocalDateSerializer.class)
	@JsonDeserialize(using = LocalDateDeserializer.class)
	private LocalDate fecha;
	private LocalTime horaEntrada;
	private LocalTime horaSalida;
	private boolean confirmada;
	
	public ReservaSala(){}
	public ReservaSala(Sala sala, Persona persona, LocalDate fecha, LocalTime horaEntrada, LocalTime horaSalida, boolean confirmada) {
		this.sala = sala;
		this.persona = persona;
		this.fecha = fecha;
		this.horaEntrada = horaEntrada;
		this.horaSalida = horaSalida;
		this.confirmada = confirmada;
	}
	
	public long getID(){
		return id;
	}
	public Sala getSala() {
		return sala;
	}
	public void setSala(Sala sala) {
		this.sala = sala;
	}
	public Persona getPersona() {
		return persona;
	}
	public void setPersona(Persona persona) {
		this.persona = persona;
	}
	public LocalTime getHoraEntrada() {
		return this.horaEntrada;
	}
	public void setHoraEntrada(int hora, int min) {
		this.horaEntrada = LocalTime.of(hora, min);
	}
	public LocalTime getHoraSalida() {
		return this.horaSalida;
	}
	public void setHoraSalida(int hora, int min) {
		this.horaSalida = LocalTime.of(hora, min);
	}
	public boolean isConfirmada() {
		return this.confirmada;
	}
	public void setConfirmada(boolean confirmada) {
		this.confirmada = confirmada;
	}
	public LocalDate getFecha() {
		return fecha;
	}
	public void setFecha(int anio, int mes, int dia) {
		this.fecha = LocalDate.of(anio, mes, dia);
	}
	
}
