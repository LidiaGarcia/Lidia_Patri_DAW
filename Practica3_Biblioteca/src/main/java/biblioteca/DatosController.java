package biblioteca;

import java.time.LocalDate;
import java.time.LocalTime;

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
		
		Persona p1 = new Persona("Lidia","Garcia","lidia@urjc.es","1234",true,true);
		personas_repo.save(p1);
		Persona p2 = new Persona("Patri","Cahue","patri@urjc.es","1234",true,false);
		personas_repo.save(p2);
		Persona p3 = new Persona("Sandra","Gonzalez","sandra@urjc.es","1234",true,false);
		personas_repo.save(p3);
		Persona p4 = new Persona("Lucia","Perez","lucia@urjc.es","1234",true,false);
		personas_repo.save(p4);
//		Persona p5 = new Persona("Juan","Fernandez","juan@urjc.es","1234",true,false);
//		personas_repo.save(p5);
		Persona p6 = new Persona("a","a","a","a",true,true);
		personas_repo.save(p6);
		Persona p7 = new Persona("b","b","b","b",true,false);
		personas_repo.save(p7);
		
		
		Sala s1 = new Sala("Sala 1",false,"grande","bueno");
		salas_repo.save(s1);
		Sala s2 = new Sala("Sala 2",true,"pequeña","sillas en mal estado");
		salas_repo.save(s2);
		Sala s3 = new Sala("Sala 3",false,"mediana","good");
		salas_repo.save(s3);
		Sala s4 = new Sala("Sala 4",true,"grande","excelente");
		salas_repo.save(s4);
		Sala s5 = new Sala("Sala 5",false,"grande","bueno");
		salas_repo.save(s5);
		
		Portatil por1 = new Portatil("bueno", "hp 13 pulgadas");
		portatiles_repo.save(por1);
		Portatil por2 = new Portatil("sin bateria", "MacBook Air");
		portatiles_repo.save(por2);
		Portatil por3 = new Portatil("bueno", "Acer 15p");
		portatiles_repo.save(por3);
		Portatil por4 = new Portatil("pantalla arañada", "Dell");
		portatiles_repo.save(por4);
		Portatil por5 = new Portatil("bueno", "hp 15 500GB");
		portatiles_repo.save(por5);
		
		Curso c1 = new Curso ("Curso 1","Curso sobre el tabaco", LocalDate.of(2015, 5, 10), LocalTime.of(12,00),120,100);
		cursos_repo.save(c1);
		Curso c2 = new Curso ("Curso 2","Curso sobre el presatamo automatico", LocalDate.of(2015, 5, 11), LocalTime.of(10,00),60,40);
		cursos_repo.save(c2);
		Curso c3 = new Curso ("Curso 3","Curso sobre ordenadores", LocalDate.of(2015, 5, 12), LocalTime.of(16,00),30,30);
		cursos_repo.save(c3);
		Curso c4 = new Curso ("Curso 4","Curso sobre el reciclaje", LocalDate.of(2015, 5, 13), LocalTime.of(18,00),50,120);
		cursos_repo.save(c4);
		Curso c5 = new Curso ("Curso 5","Curso sobre la pintura", LocalDate.of(2015, 5, 14), LocalTime.of(9,00),60,90);
		cursos_repo.save(c5);
		
		ReservaSala rs1 = new ReservaSala(s1,p1, LocalDate.of(2015, 5, 23), LocalTime.of(14,00),false);
		reserva_salas_repo.save(rs1);
		ReservaSala rs2 = new ReservaSala(s1,p2, LocalDate.of(2015, 5, 24), LocalTime.of(11,00),false);
		reserva_salas_repo.save(rs2);
		ReservaSala rs3 = new ReservaSala(s4,p1, LocalDate.of(2015, 5, 25), LocalTime.of(18,00),false);
		reserva_salas_repo.save(rs3);
		ReservaSala rs4 = new ReservaSala(s2,p4, LocalDate.of(2015, 5, 24), LocalTime.of(16,00),false);
		reserva_salas_repo.save(rs4);
		ReservaSala rs5 = new ReservaSala(s3,p2, LocalDate.of(2015, 5, 25), LocalTime.of(9,00),false);
		reserva_salas_repo.save(rs5);
		ReservaSala rs6 = new ReservaSala(s3,p4, LocalDate.of(2015, 5, 24), LocalTime.of(18,00),false);
		reserva_salas_repo.save(rs6);
	
		ReservaPortatil rsp1 = new ReservaPortatil(por1,p2,LocalDate.of(2015, 5, 20),LocalTime.of(10,00),false);
		reserva_portatil_repo.save(rsp1);
		ReservaPortatil rsp2 = new ReservaPortatil(por2,p3,LocalDate.of(2015, 5, 22),LocalTime.of(12,00),false);
		reserva_portatil_repo.save(rsp2);
		ReservaPortatil rsp3 = new ReservaPortatil(por3,p2,LocalDate.of(2015, 5, 21),LocalTime.of(9,00),false);
		reserva_portatil_repo.save(rsp3);
		ReservaPortatil rsp4 = new ReservaPortatil(por2,p4,LocalDate.of(2015, 5, 20),LocalTime.of(18,00),false);
		reserva_portatil_repo.save(rsp4);
		ReservaPortatil rsp5 = new ReservaPortatil(por1,p1,LocalDate.of(2015, 5, 21),LocalTime.of(16,00),false);
		reserva_portatil_repo.save(rsp5);
		
	
	}
}	