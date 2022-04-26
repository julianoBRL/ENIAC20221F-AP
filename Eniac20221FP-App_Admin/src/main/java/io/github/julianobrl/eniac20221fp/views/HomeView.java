package io.github.julianobrl.eniac20221fp.views;

import java.awt.Component;
import java.awt.Dimension;

import javax.swing.BorderFactory;
import javax.swing.Box;
import javax.swing.BoxLayout;
import javax.swing.Icon;
import javax.swing.JLabel;
import javax.swing.JScrollPane;
import javax.swing.JTabbedPane;

import io.github.julianobrl.eniac20221fp.components.JDenunciaView;

//import java.awt.GridBagConstraints;

import io.github.julianobrl.eniac20221fp.components.JStyledPanel;
import io.github.julianobrl.eniac20221fp.components.Theme;
import io.github.julianobrl.eniac20221fp.objects.Denuncia;
import io.github.julianobrl.eniac20221fp.objects.DenunciasResult;
import jiconfont.icons.font_awesome.FontAwesome;
import jiconfont.swing.IconFontSwing;

@SuppressWarnings("serial")
public class HomeView extends JStyledPanel{
	
	private JStyledPanel panel;
	private JScrollPane scroll;
	
	public HomeView() {

        setLayout (new BoxLayout (this, BoxLayout.Y_AXIS));
        
		
		add(Box.createRigidArea(new Dimension(0, 10)));
		
		panel = new JStyledPanel();
		scroll = new JScrollPane(panel);
        scroll.setBorder(BorderFactory.createEmptyBorder());
        
        panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));
        panel.setPreferredSize(new Dimension(300, 300));
        scroll.setAlignmentX(Component.CENTER_ALIGNMENT);
        add(scroll);
		
	}

	public void setDenuncias(DenunciasResult denuncias) {
		for (Denuncia denuncia : denuncias.getResults()) {
        	panel.add(new JDenunciaView(denuncia));
        	//panel.add(Box.createRigidArea(new Dimension(0, 5)));
		}
	}
	
}
