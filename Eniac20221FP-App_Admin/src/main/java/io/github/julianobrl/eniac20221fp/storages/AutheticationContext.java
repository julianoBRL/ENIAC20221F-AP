package io.github.julianobrl.eniac20221fp.storages;

import io.github.julianobrl.eniac20221fp.objects.Userdata;

public class AutheticationContext {
	private static AutheticationContext instance;
	
	private boolean authenticated = false;
	private Userdata userData;
	
	public void authnticate(Userdata userData) {
		authenticated = true;
		this.userData = userData;
	}
	
	public void unauthnticate() {
		authenticated = false;
		this.userData = null;
	}
	
	public boolean isAuthenticated() {
		return authenticated & userData != null;
	}
	
	public Userdata getUserdata() {return userData;}
	
	public static AutheticationContext getInstance() {
		if(instance == null)
			instance = new AutheticationContext();
		return instance;
	}
	
}
