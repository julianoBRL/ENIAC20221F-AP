package io.github.julianobrl.eniac20221fp.components;

import javax.swing.JDialog;
import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.UIManager;
import javax.swing.plaf.ColorUIResource;

public class JStyledOptionMessage {
	public static void create(String title, String message, int type) {
		JOptionPane optionPane = new JOptionPane(message, type, JOptionPane.DEFAULT_OPTION, null, new Object[]{}, null);
		JDialog dialog = optionPane.createDialog(null, title);
		dialog.setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
		dialog.getRootPane().putClientProperty("JRootPane.titleBarBackground", Theme.BACKGROUND);
		dialog.getRootPane().putClientProperty("JRootPane.titleBarForeground", Theme.WHITE);
		dialog.getContentPane().setBackground(Theme.BACKGROUND);
		UIManager.put("Panel.background",new ColorUIResource(255,0,0));
		dialog.setVisible(true);
	}
}
