package io.github.julianobrl.eniac20221fp;

import io.github.julianobrl.eniac20221fp.components.JStyledFrame;
import io.github.julianobrl.eniac20221fp.services.AuthenticationService;
import io.github.julianobrl.eniac20221fp.views.Router;
import jiconfont.icons.font_awesome.FontAwesome;
import jiconfont.swing.IconFontSwing;

public class Main {
	
	static JStyledFrame frame;
	
	public static void main(String[] args) throws Exception {
		AuthenticationService.initialize();
		
		IconFontSwing.register(FontAwesome.getIconFont());
		frame = new JStyledFrame();
		
		Router.initialize();
		
		frame.setVisible(true);
		
	}
	
	public static JStyledFrame getMainFrame() {
		return frame;
	}
	
}
