package io.github.julianobrl.eniac20221fp.components;

import java.awt.GridBagLayout;

import javax.swing.JPanel;

@SuppressWarnings("serial")
public class JStyledPanel extends JPanel{
		
	public JStyledPanel() {
		setBackground(Theme.BACKGROUND);
		setLayout(new GridBagLayout());
	}
	
}
