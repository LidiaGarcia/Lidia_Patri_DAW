package biblioteca;

import java.time.LocalDate;
import java.time.LocalTime;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;

@RestController
@RequestMapping("")
public class BibliotecaController {
	
	public static class DayWeek {
		public int dayWeek;
	}

	@JsonSerialize(using = LocalDateSerializer.class)
	@JsonDeserialize(using = LocalDateDeserializer.class)
	private LocalDate today;
	private LocalTime now;
	
	@RequestMapping(value="/hour", method = RequestMethod.GET)
	public LocalTime givemeHour(){
		return now.now();
	}
	
	@RequestMapping(value="/dayWeek", method = RequestMethod.GET)
	public DayWeek givemeDaysemana(){
		DayWeek dayWeek = new DayWeek();
		dayWeek.dayWeek = today.now().getDayOfWeek().getValue(); 
		return dayWeek;
	}
	
	@RequestMapping(value="/date", method = RequestMethod.GET)
	public LocalDate givemeDate(){		
		return today.now();
	}

}