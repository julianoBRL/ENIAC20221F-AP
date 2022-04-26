package io.github.julianobrl.eniac20221fp.services;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.swing.JOptionPane;

import com.fasterxml.jackson.databind.ObjectMapper;

import io.github.julianobrl.eniac20221fp.components.JStyledOptionMessage;
import io.github.julianobrl.eniac20221fp.http.HttpCaller;
import io.github.julianobrl.eniac20221fp.http.HttpMethod;
import io.github.julianobrl.eniac20221fp.objects.DenunciasResult;
import io.github.julianobrl.eniac20221fp.objects.Userdata;
import io.github.julianobrl.eniac20221fp.storages.AutheticationContext;

public class DenunciasService {
	
	static ObjectMapper mapper = new ObjectMapper();

	public static DenunciasResult findDenuncias() {
		
		Map<String,String> headers = new HashMap<String,String>();
		Userdata userdata = AutheticationContext.getInstance().getUserdata();
		headers.put("X-Parse-Session-Token", userdata.getSessionToken());
		
		try {
			return mapper.readValue(
							HttpCaller.call(HttpMethod.GET, "classes/Denuncias", headers), 
							DenunciasResult.class
						) ;
			
		} catch (IOException e) {
			JStyledOptionMessage.create("Error", "Unable to retrive data, restart the application!", JOptionPane.PLAIN_MESSAGE);
		}
		
		return null;
		
	}
	
}
