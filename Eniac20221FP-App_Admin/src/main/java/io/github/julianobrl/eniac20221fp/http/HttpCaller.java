package io.github.julianobrl.eniac20221fp.http;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Map;
import java.util.stream.Collectors;

import com.fasterxml.jackson.databind.ObjectMapper;

import io.github.julianobrl.eniac20221fp.storages.Properties;

public class HttpCaller {
	
	static ObjectMapper mapper = new ObjectMapper();
	
	public static String call(HttpMethod method,String endpoint,Map<String, String> headers,Object... data) throws IOException {
		
	String urlBuilder = Properties.URL;
	
	if(endpoint != null) {
		urlBuilder+="/"+endpoint;
	}
	
	String result = null;
	HttpURLConnection con = null;
		
	   URL url = new URL(urlBuilder);
	   con = (HttpURLConnection) url.openConnection();
	   con.setRequestProperty("Accept", "*/*");
	   con.setRequestProperty("Content-Type", "application/json");
	   con.setRequestProperty("X-Parse-Application-Id", Properties.APP_ID);
	   con.setRequestProperty("X-Parse-REST-API-Key", Properties.REST_API_KEY);
	   if(headers != null) {
		   for (Map.Entry<String, String> entry : headers.entrySet()) {
			    con.setRequestProperty(entry.getKey(),entry.getValue());
			}
	   }
	   con.setDoOutput((method.equals(HttpMethod.POST) && data != null));
	   con.setRequestMethod(method.toString());
	
	   if(con.getDoOutput()) {
	       OutputStream os = con.getOutputStream();
	       OutputStreamWriter osw = new OutputStreamWriter(os, "UTF-8"); 
	       String output =  mapper.writeValueAsString(
			   (data.length == 0)?  "":
					   (data.length > 1)? data: data[0]);
	       osw.write(output);
	       osw.flush();
	       osw.close();
	       os.close();
	   }
	
	   con.connect();
	   result = new BufferedReader(new InputStreamReader(con.getInputStream()))
	       .lines().collect(Collectors.joining("\n"));
	   
	return result;
	}

}
