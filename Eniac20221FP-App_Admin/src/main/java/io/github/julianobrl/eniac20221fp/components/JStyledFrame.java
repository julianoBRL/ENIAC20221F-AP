package io.github.julianobrl.eniac20221fp.components;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Enumeration;
import java.util.List;

import javax.swing.JFrame;
import javax.swing.JRootPane;
import javax.swing.SwingUtilities;
import javax.swing.UIDefaults;
import javax.swing.UIManager;
import javax.swing.plaf.ColorUIResource;

import com.formdev.flatlaf.FlatLightLaf;

@SuppressWarnings("serial")
public class JStyledFrame extends JFrame{
	
	public JStyledFrame() {
		setResizable(false);
		setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
		getRootPane().setWindowDecorationStyle(JRootPane.FRAME);		
		
        try {
        	UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
        	UIManager.put("OptionPane.background", Theme.BACKGROUND);
        	UIManager.put("Panel.background", Theme.BACKGROUND);
        	UIManager.put("OptionPane.messageForeground", Theme.WHITE);
        	FlatLightLaf.setup();
        	JFrame.setDefaultLookAndFeelDecorated(true);
        	getContentPane().setBackground(Theme.BACKGROUND);
			UIManager.put("Panel.background",new ColorUIResource(255,0,0));
        	getRootPane().putClientProperty("JRootPane.titleBarBackground", Theme.BACKGROUND);
        	getRootPane().putClientProperty("JRootPane.titleBarForeground", Theme.WHITE);
        } catch (Exception e) {
          e.printStackTrace();
        }
        
        SwingUtilities.updateComponentTreeUI(this);
	}
	
	@SuppressWarnings("unused")
	private void listUIManagerkeys() {
		UIDefaults uiDefaults = UIManager.getDefaults();
		Enumeration<Object> keys = uiDefaults.keys();
		List<String> allUIManagerConfigs=  new ArrayList<String>();

		for(;keys.hasMoreElements();){
		    Object key = keys.nextElement();
		    String value = String.valueOf(key);
		    allUIManagerConfigs.add(value);
		}

		Collections.sort(allUIManagerConfigs);

		for(String keyName:allUIManagerConfigs){
		    System.out.println(keyName);
		}
	}

}
