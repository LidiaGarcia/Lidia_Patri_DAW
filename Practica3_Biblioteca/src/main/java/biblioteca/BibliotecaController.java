package biblioteca;

import java.time.LocalDate;
import java.time.LocalTime;

import org.springframework.web.bind.annotation.PathVariable;
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
	public static class DayBefore {
		public boolean dayBefore;
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
	
	@RequestMapping(value="/date/{a}-{b}-{c}/{day}", method = RequestMethod.GET)
	public LocalDate oneMoreDayDate(@PathVariable int day, @PathVariable int a, @PathVariable int b, @PathVariable int c){		
		return LocalDate.of(a,b,c).minusDays(day);
	}
	
	@RequestMapping(value="/date/before/{d}-{e}-{f}", method = RequestMethod.GET)
	public DayBefore isDateBefore(@PathVariable int d, @PathVariable int e, @PathVariable int f){
		DayBefore day = new DayBefore();
		day.dayBefore = (LocalDate.of(d,e,f)).isBefore(today.now());
		return day;
		
	}
	
}