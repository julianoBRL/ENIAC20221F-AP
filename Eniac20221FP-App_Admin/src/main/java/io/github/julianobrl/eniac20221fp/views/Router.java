package io.github.julianobrl.eniac20221fp.views;

import io.github.julianobrl.eniac20221fp.Main;
import io.github.julianobrl.eniac20221fp.components.JStyledFrame;
import io.github.julianobrl.eniac20221fp.services.DenunciasService;
import io.github.julianobrl.eniac20221fp.storages.AutheticationContext;

public class Router {
	
	static LoginView loginView;
	static RegisterView registerView;
	static HomeView homeView;
	
	public static void initialize() {
		homeView = new HomeView();
		loginView = new LoginView();
		registerView = new RegisterView();
		
		if(AutheticationContext.getInstance().isAuthenticated()) {
			goToHome();
		}else {
			goToLogin();
		}
	}
	
	public static void goToRegister() {
		JStyledFrame frame = Main.getMainFrame();
		frame.setSize(400,600);
		frame.setContentPane(registerView);
		refreshFrame(frame);
	}
	
	public static void goToLogin() {
		JStyledFrame frame = Main.getMainFrame();
		frame.setSize(400,600);
		frame.setContentPane(loginView);
		refreshFrame(frame);
	}
	
	public static void goToHome() {
		JStyledFrame frame = Main.getMainFrame();
		homeView.setDenuncias(DenunciasService.findDenuncias());
		frame.setContentPane(homeView);
		frame.setSize(400,600);
		refreshFrame(frame);
		
	}
	
	private static void refreshFrame(JStyledFrame frame) {
		frame.revalidate();
		frame.repaint();
	}
	
}
