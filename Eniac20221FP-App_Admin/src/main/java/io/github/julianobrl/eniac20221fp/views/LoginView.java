package io.github.julianobrl.eniac20221fp.views;

import java.awt.Color;
import java.awt.Font;
import java.awt.GridBagConstraints;
import java.awt.Insets;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.FocusEvent;
import java.awt.event.FocusListener;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;

import javax.swing.Icon;
import javax.swing.JButton;
import javax.swing.JLabel;

import io.github.julianobrl.easyevents.EventManager;
import io.github.julianobrl.eniac20221fp.components.JRoundTextField;
import io.github.julianobrl.eniac20221fp.components.JRoundedPasswordField;
import io.github.julianobrl.eniac20221fp.components.JStyledPanel;
import io.github.julianobrl.eniac20221fp.components.Theme;
import io.github.julianobrl.eniac20221fp.objects.LoginObject;
import jiconfont.icons.font_awesome.FontAwesome;
import jiconfont.swing.IconFontSwing;

@SuppressWarnings("serial")
public class LoginView extends JStyledPanel implements KeyListener{
	
	private JRoundTextField username;
	private JRoundedPasswordField password;
	
	public LoginView() {
		
		this.addKeyListener(this);

		GridBagConstraints c = new GridBagConstraints();
		
		c.gridx = 0;
		c.gridy = 0;
		c.gridwidth = 3;
		c.weightx = 1;
		c.insets = new Insets(10,10,5,10);
		JLabel title = new JLabel("Wellcome!");
		title.setFont(new Font("Ariel", Font.BOLD, 20));
		title.setForeground(Theme.WHITE);
		add(title,c);
		
		c.gridx = 0;
		c.gridy = 1;
		c.insets = new Insets(0,0,10,0);
		JLabel subtitle = new JLabel("Wellcome back you've been missed.");
		subtitle.setForeground(Theme.WHITE);
		add(subtitle,c);
		
		c.gridx = 0;
		c.gridy = 2;
		c.insets = new Insets(5,5,5,5);
		username = new JRoundTextField(20);
		username.setBackground(Theme.BACKGROUND);
		username.setForeground(Color.GRAY);
		username.setText("Username");
		username.addFocusListener(new FocusListener() {
			
			public void focusLost(FocusEvent e) {
				if (username.getText().isEmpty()) {
		        	username.setForeground(Color.GRAY);
		        	username.setText("Username");
		        }
			}
			
			public void focusGained(FocusEvent e) {
				if (username.getText().equals("Username")) {
		        	username.setText("");
		        	username.setForeground(Theme.WHITE);
		        }
			}
		});
		add(username,c);
		
		c.gridx = 0;
		c.gridy = 3;
		c.insets = new Insets(5,0,3,0);
		password = new JRoundedPasswordField(20);
		password.setBackground(Theme.BACKGROUND);
		password.setForeground(Color.GRAY);
		password.setText("Password");
		password.addFocusListener(new FocusListener() {
			
			public void focusLost(FocusEvent e) {
				if (String.valueOf(password.getPassword()).isEmpty()) {
					password.setForeground(Color.GRAY);
					password.setText("Password");
		        }
			}
			
			public void focusGained(FocusEvent e) {
				if (String.valueOf(password.getPassword()).equals("Password")) {
					password.setText("");
					password.setForeground(Theme.WHITE);
		        }
			}
		});
		add(password,c);

		c.gridx = 0;
		c.gridy = 4;
		c.anchor = GridBagConstraints.EAST;
		c.insets = new Insets(0,0,0,50);
		JLabel forgetPassword = new JLabel("Forget password");
		forgetPassword.setForeground(Theme.COLOR3);
		add(forgetPassword,c);
		
		c.gridx = 0;
		c.gridy = 5;
		c.insets = new Insets(15,0,20,0);
		c.anchor = GridBagConstraints.CENTER;
		JButton signinButton = new JButton("Sign in");
		signinButton.setBackground(Theme.COLOR2);
		signinButton.setForeground(Theme.WHITE);
		signinButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {login();}
		});
		add(signinButton,c);
		
		c.gridx = 0;
		c.gridy = 6;
		c.insets = new Insets(0,0,10,0);
		JLabel orcontinuewith = new JLabel("Or continue with:");
		orcontinuewith.setForeground(Theme.WHITE);
		add(orcontinuewith,c);
		
		c.gridx = 0;
		c.gridy = 7;
		c.gridwidth= 1;
		Icon iconGithub = IconFontSwing.buildIcon(FontAwesome.GITHUB, 40, Theme.WHITE);
        JLabel iconGithubLabel = new JLabel(iconGithub);
		add(iconGithubLabel,c);
		
		
		c.gridx = 1;
		c.gridy = 7;
		Icon iconFacebook = IconFontSwing.buildIcon(FontAwesome.FACEBOOK, 40, Theme.WHITE);
        JLabel iconFacebookLabel = new JLabel(iconFacebook);
		add(iconFacebookLabel,c);
		
		c.gridx = 2;
		c.gridy = 7;
		Icon iconGoogle = IconFontSwing.buildIcon(FontAwesome.GOOGLE, 40, Theme.WHITE);
        JLabel iconGoogleLabel = new JLabel(iconGoogle);
		add(iconGoogleLabel,c);
		
		c.gridx = 1;
		c.gridy = 8;
		c.insets = new Insets(10,0,0,0);
        JLabel registernow = new JLabel("Register now");
        registernow.setForeground(Theme.COLOR3);
        registernow.addMouseListener(new MouseAdapter(){  
            public void mouseClicked(MouseEvent e){  
               Router.goToRegister();
            }  
        });
		add(registernow,c);
		
	}
	
	private void login() {
		try {
			EventManager.callEvent("Login", new LoginObject(username.getText(), String.valueOf(password.getPassword())));
		} catch (Exception e1) {
			System.out.println("Error on login event!!");
			e1.printStackTrace();
		}
	}

	public void keyTyped(KeyEvent e) {

		System.out.println("keytyped");
	}

	public void keyPressed(KeyEvent e) {
		System.out.println("keypresses");
		if (e.getKeyCode() == KeyEvent.VK_ENTER) {
		    login();
		}
	}

	public void keyReleased(KeyEvent e) {
		System.out.println("key released");
	}
	
}
