package biblioteca;

import java.time.LocalDate;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/reservas")
public class ReservasController {
	@Autowired
	private PersonasRepo personas_repo;
	@Autowired
	private SalasRepo salas_repo;
	@Autowired
	private PortatilesRepo portatiles_repo;
	@Autowired
	private ReservaSalaRepo reserva_salas_repo;
	@Autowired
	private ReservaPortatilRepo reserva_portatil_repo;
	
	
	//salas
	
	//crear una reserva de sala
	@RequestMapping(value = "/sala", method=RequestMethod.POST)
	public ResponseEntity<ReservaSala> reservarSala(@RequestBody ReservaSala reservaSala, HttpSession sesion){
		if((sesion!=null)&&((sesion.getAttribute("admin") != null)&&((!(Boolean)sesion.getAttribute("admin"))&&((Boolean)sesion.getAttribute("login"))))){
			reserva_salas_repo.save(reservaSala);
			return new ResponseEntity<>(reservaSala, HttpStatus.CREATED);
		}else{
			return null;
		}
	}
	
	//lista Reservas de salas
	@RequestMapping(value = "/sala", method = RequestMethod.GET)
	public List<ReservaSala> getSalasReservadas(){
		return reserva_salas_repo.findAll();
	}
	//Reservas de salas hoy
	@RequestMapping(value = "/sala/hoy", method = RequestMethod.GET)
	public List<ReservaSala> getReservasSalaHoy(){
		return reserva_salas_repo.findAllHoy(LocalDate.now());
	}
	//lista Reservas de salas por una persona
	@RequestMapping(value = "/sala/persona/{id}", method = RequestMethod.GET)
	public List<ReservaSala> getSalasDePersona(@PathVariable long id, HttpSession sesion){
		if((sesion!=null)&&((sesion.getAttribute("login") != null)&&((Boolean)sesion.getAttribute("login")))){
			return reserva_salas_repo.findByIdPersona(id);
		}else{
			return null;
		}
	}
	
	//ReservaS de una sala en una fecha, el id es el id de la sala
	@RequestMapping(value = "/sala/{id}/{a}-{b}-{c}", method = RequestMethod.GET)
	public List<ReservaSala> getReservasSalaDia(@PathVariable long id, @PathVariable int a, @PathVariable int b, @PathVariable int c){
		
		return reserva_salas_repo.findByIdSalayFecha(id, LocalDate.of(a,b,c));
	}
	
	//confirmar una reserva sala donde se le pasa el id de la reserva
	
	@RequestMapping(value = "/sala/{id}", method = RequestMethod.PUT)
	public void confirmarSala(@PathVariable long id,HttpSession sesion){
		if((sesion!=null)&&((sesion.getAttribute("admin") != null)&&((Boolean)sesion.getAttribute("admin")))){
			reserva_salas_repo.setConfirm(id);
		}
	}
	
	//portatiles
	
	//crear una reserva de portatil
	@RequestMapping(value = "/portatil", method=RequestMethod.POST)
	public ResponseEntity<ReservaPortatil> reservarPortatil(@RequestBody ReservaPortatil reservaPortatil, HttpSession sesion){
		if((sesion!=null)&&((sesion.getAttribute("admin") != null)&&((!(Boolean)sesion.getAttribute("admin"))&&((Boolean)sesion.getAttribute("login"))))){
			reserva_portatil_repo.save(reservaPortatil);
			return new ResponseEntity<>(reservaPortatil, HttpStatus.CREATED);
		}else{
			return null;
		}
	}
	//Reservas de salas hoy
	@RequestMapping(value = "/portatil/hoy", method = RequestMethod.GET)
	public List<ReservaPortatil> getReservasPortatilHoy(){
		return reserva_portatil_repo.findAllHoy(LocalDate.now());
	}
	//lista Reservas de portatiles
	@RequestMapping(value = "/portatil", method = RequestMethod.GET)
	public List<ReservaPortatil> getPortatilesReservados(){
		return reserva_portatil_repo.findAll();
	}
	
	//lista Reservas de portatiles por una persona
	@RequestMapping(value = "/portatil/persona/{id}", method = RequestMethod.GET)
	public List<ReservaPortatil> getPortatilesDePersona(@PathVariable long id,HttpSession sesion){
		if((sesion!=null)&&((sesion.getAttribute("login") != null)&&((Boolean)sesion.getAttribute("login")))){
			return reserva_portatil_repo.findByIdPersona(id);
		}else{
			return null;
		}
	}
	
	//ReservaS de un portatil en una fecha, el id es el id del portatil
	@RequestMapping(value = "/portatil/{id}/{d}-{e}-{f}", method = RequestMethod.GET)
	public List<ReservaPortatil> getReservasPortatilDia(@PathVariable long id,  @PathVariable int d, @PathVariable int e, @PathVariable int f){
		return reserva_portatil_repo.findByIdPortatilyFecha(id, LocalDate.of(d,e,f));
	}
	
	
	
	//confirmar una reserva portatil donde se le pasa el id de la reserva
	@RequestMapping(value = "/portatil/{id}", method = RequestMethod.PUT)
	public void confirmarPortatil(@PathVariable long id, HttpSession sesion){
		//if(((sesion!=null)&&(sesion.getAttribute("admin") != null))&&((Boolean)sesion.getAttribute("admin"))){
			reserva_portatil_repo.setConfirm(id);
		//}
	}
}