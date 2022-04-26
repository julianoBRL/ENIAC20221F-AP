package io.github.julianobrl.eniac20221fp.services;

import java.io.IOException;

import javax.swing.JOptionPane;

import com.fasterxml.jackson.databind.ObjectMapper;

import io.github.julianobrl.easyevents.EventManager;
import io.github.julianobrl.easyevents.Listener;
import io.github.julianobrl.eniac20221fp.components.JStyledOptionMessage;
import io.github.julianobrl.eniac20221fp.http.HttpCaller;
import io.github.julianobrl.eniac20221fp.http.HttpMethod;
import io.github.julianobrl.eniac20221fp.objects.LoginObject;
import io.github.julianobrl.eniac20221fp.objects.RegisterObject;
import io.github.julianobrl.eniac20221fp.objects.Userdata;
import io.github.julianobrl.eniac20221fp.storages.AutheticationContext;
import io.github.julianobrl.eniac20221fp.views.Router;
import io.github.julianobrl.events.exeptions.EventNameExists;
import io.github.julianobrl.events.exeptions.EventNotExists;

public class AuthenticationService {
	
	static ObjectMapper mapper = new ObjectMapper();
	
	public static void initialize() throws EventNotExists, EventNameExists {
		
		EventManager.registerEvent("Login", LoginObject.class);
		EventManager.registerEvent("Register", RegisterObject.class);
		EventManager.registerEvent("Logoff", Object.class);
		
		EventManager.registerListener("Login", new Listener() {
			
			public void EventOccurred(Object evt) {				
				try {
					Userdata userdata = mapper.readValue(
								HttpCaller.call(HttpMethod.POST,"login", null, (LoginObject) evt), 
								Userdata.class
							);
					AutheticationContext.getInstance().authnticate(userdata);
					Router.goToHome();
				} catch (IOException e) {
					e.printStackTrace();
					JStyledOptionMessage.create("Error", "Invalid Username/Password", JOptionPane.PLAIN_MESSAGE);
				}
			}
			
		});
		
		EventManager.registerListener("Register", new Listener() {
			
			public void EventOccurred(Object evt) {
				try {
					RegisterObject register = (RegisterObject) evt;
					HttpCaller.call(HttpMethod.POST,"users", null,register);
					EventManager.callEvent("Login", new LoginObject(register.getUsername(), register.getPassword()));
				} catch (IOException e) {
					JStyledOptionMessage.create("Error", "Unable to register!", JOptionPane.PLAIN_MESSAGE);
				} catch (EventNotExists e) {
					JStyledOptionMessage.create("Error", "Successful registred but unable to login!!", JOptionPane.PLAIN_MESSAGE);
				}
			}
			
		});
		
		
	}
	
}
