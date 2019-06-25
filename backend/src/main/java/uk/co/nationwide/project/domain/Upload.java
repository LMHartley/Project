package uk.co.nationwide.project.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Upload {
	
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String uploadName;
	
	public Upload() 
	{
		
	}
	
	public Upload(Long id, String uploadName, String surName) 
	{
		this.id = id;
		this.uploadName = uploadName;
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUploadName() {
		return uploadName;
	}

	public void setUploadName(String uploadName) {
		this.uploadName = uploadName;
	}

	@Override
	public String toString() {
		return "Upload: [id=" + id + ", uploadName=" + uploadName + "]";
	}
}
