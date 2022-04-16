package io.github.julianobrl.eniac20221fp.http;

public enum HttpMethod {
	GET("GET"),
	POST("POST"),
	DELETE("DELETE"),
	PUT("PUT");
	
	String string;
	
	@Override
	public String toString() {
		return string;
	}

	HttpMethod(String string) {
		this.string=string;
	}
}
