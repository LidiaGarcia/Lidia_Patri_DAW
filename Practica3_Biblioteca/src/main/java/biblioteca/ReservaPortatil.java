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
public class ReservaPortatil {
	
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		private long id;
		@OneToOne
		private Portatil portatil;
		@OneToOne
		private Persona persona;
		@JsonSerialize(using = LocalDateSerializer.class)
		@JsonDeserialize(using = LocalDateDeserializer.class)
		private LocalDate fecha;
		private LocalTime horaEntrada;
		private boolean confirmado;
		
		public ReservaPortatil(){}
		public ReservaPortatil(Portatil portatil, Persona persona, LocalDate fecha, LocalTime horaEntrada, boolean confirmado) {
			this.portatil = portatil;
			this.persona = persona;
			this.fecha = fecha;
			this.horaEntrada = horaEntrada;
			this.confirmado = confirmado;
		}
		
		public long getID(){
			return this.id;
		}
		
		public Portatil getPortatil() {
			return portatil;
		}
		public void setPortatil(Portatil portatil) {
			this.portatil = portatil;
		}
		public boolean isConfirmado() {
			return confirmado;
		}
		public void setConfirmado(boolean confirmado) {
			this.confirmado = confirmado;
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
		public LocalDate getFecha() {
			return fecha;
		}
		public void setFecha(int anio, int mes, int dia) {
			this.fecha = LocalDate.of(anio, mes, dia);
		}
				
}