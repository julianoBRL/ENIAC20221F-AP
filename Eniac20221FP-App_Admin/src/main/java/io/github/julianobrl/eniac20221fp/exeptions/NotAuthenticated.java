package io.github.julianobrl.eniac20221fp.exeptions;

@SuppressWarnings("serial")
public class NotAuthenticated extends Exception { 
    public NotAuthenticated(String errorMessage) {
        super(errorMessage);
    }
}
