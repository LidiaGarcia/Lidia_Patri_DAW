package biblioteca;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;

@Controller
public class DatosController implements CommandLineRunner {

	@Autowired
	private PersonasRepo personas_repo;
	@Autowired
	private SalasRepo salas_repo;
	@Autowired
	private ReservaSalaRepo reserva_salas_repo;
	@Autowired
	private PortatilesRepo portatiles_repo;
	@Autowired
	private ReservaPortatilRepo reserva_portatil_repo;
	@Autowired
	private CursoRepo cursos_repo;

	//enviroment carga ficheros y obtener datos --loadfile="ruta"
	@Override
	public void run(String... args) throws Exception {
		/*
		Persona p1 = new Persona("lidia","garcia","lidia.l@ajsdc.com","sldjbf",true,true);
		Sala s1 = new Sala("Sala 1",false,"grande","good");
		personas_repo.save(p1);
		Persona p2 = new Persona("patri","garcgia","lidia.l@ajsdc.com","sldjbf",true,false);
		personas_repo.save(p2);
		salas_repo.save(s1);
		ReservaSala rs1 = new ReservaSala(s1,p1, LocalDate.of(2015, 4, 23), LocalTime.of(14,43) , LocalTime.of(16,43),true);
		reserva_salas_repo.save(rs1);
		ReservaSala rs2 = new ReservaSala(s1,p2, LocalDate.of(2015, 4, 24), LocalTime.of(11,00) , LocalTime.of(16,00),false);
		reserva_salas_repo.save(rs2);
		/*ReservaSala rs = reserva_salas_repo.findById(1);
		System.out.println(rs.getFecha().getDayOfWeek());
		System.out.println(rs.getHoraEntrada());
		System.out.println(personas_repo.findById(rs.getPersona().getID()).getNombre());
		
		Portatil por1= new Portatil("good","hp");
		portatiles_repo.save(por1);
		ReservaPortatil reservapor = new ReservaPortatil(por1,p2,LocalDate.of(2015, 4, 20),LocalTime.of(10,43) , LocalTime.of(11,43),true);
		reserva_portatil_repo.save(reservapor);
		Curso c1 = new Curso ("Curso bonito"," hcgvjbk.lnkml", LocalDate.of(2015, 4, 23), LocalTime.of(14,43),123,100);
		cursos_repo.save(c1);
		c1.addInscrito(p2);
		*/
	}
}	