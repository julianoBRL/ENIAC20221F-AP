package io.github.julianobrl.eniac20221fp.components;

import java.awt.Color;
import java.awt.Component;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.GridBagConstraints;
import java.awt.Insets;

import javax.swing.BorderFactory;
import javax.swing.Box;
import javax.swing.BoxLayout;
import javax.swing.JLabel;

import io.github.julianobrl.eniac20221fp.objects.Denuncia;

@SuppressWarnings("serial")
public class JDenunciaView extends JStyledPanel {
	
	public JDenunciaView(Denuncia denuncia) {


		add(Box.createRigidArea(new Dimension(20, 0)));
		
		setLayout(new BoxLayout(this, BoxLayout.Y_AXIS));
		
		setBorder(BorderFactory.createMatteBorder(1, 0, 1, 0, Color.GRAY));
		
		GridBagConstraints c = new GridBagConstraints();
		
		c.anchor= GridBagConstraints.WEST; 
		c.insets= new Insets(10,10,5,10);
		JLabel titulo = new JLabel(denuncia.getTitulo());
		titulo.setForeground(Theme.WHITE);
		titulo.setFont(new Font("Ariel", Font.BOLD, 20));
		add(titulo,c);
		
		c.anchor= GridBagConstraints.WEST; 
		c.insets= new Insets(10,10,5,10);
		JLabel descricao = new JLabel(denuncia.getDescricao());
		descricao.setForeground(Theme.WHITE);
		descricao.setFont(new Font("Ariel", Font.PLAIN, 17));
		add(descricao,c);
		
		c.gridx=0;
		c.gridy=2;
		JLabel createdAt = new JLabel(denuncia.getCreatedAt().toString());
		createdAt.setForeground(Theme.COLOR2);
		createdAt.setFont(new Font("Ariel", Font.BOLD, 15));
		add(createdAt,c);

		setAlignmentX(Component.LEFT_ALIGNMENT);
	    setPreferredSize(new Dimension(400, this.getPreferredSize().height));
	    setMaximumSize(new Dimension(400, this.getPreferredSize().height));
		
	}
}
