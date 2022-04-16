package io.github.julianobrl.eniac20221fp.objects;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Userdata {
	public String objectId;
    public String username;
    public String email;
    public ProfilePicture profilePicture;
    public Date createdAt;
    public Date updatedAt;
    
    @JsonProperty("ACL") 
    public Object aCL;
    
    public String sessionToken;

	public String getObjectId() {
		return objectId;
	}

	public void setObjectId(String objectId) {
		this.objectId = objectId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public ProfilePicture getProfilePicture() {
		return profilePicture;
	}

	public void setProfilePicture(ProfilePicture profilePicture) {
		this.profilePicture = profilePicture;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	public Object getaCL() {
		return aCL;
	}

	public void setaCL(Object aCL) {
		this.aCL = aCL;
	}

	public String getSessionToken() {
		return sessionToken;
	}

	public void setSessionToken(String sessionToken) {
		this.sessionToken = sessionToken;
	}
    
    
    
}
