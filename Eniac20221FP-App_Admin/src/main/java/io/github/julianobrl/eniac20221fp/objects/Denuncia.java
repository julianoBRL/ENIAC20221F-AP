package io.github.julianobrl.eniac20221fp.objects;

import java.util.Date;

public class Denuncia {
	private String objectId;
	private String titulo;
	private String descricao;
	private By by;
	private Date createdAt;
	private Date updatedAt;
	private Location location;
	private ProfilePicture image;
	
	public String getObjectId() {
		return objectId;
	}
	public void setObjectId(String objectId) {
		this.objectId = objectId;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public By getBy() {
		return by;
	}
	public void setBy(By by) {
		this.by = by;
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
	public Location getLocation() {
		return location;
	}
	public void setLocation(Location location) {
		this.location = location;
	}
	public ProfilePicture getImage() {
		return image;
	}
	public void setImage(ProfilePicture image) {
		this.image = image;
	}
	
	
}
