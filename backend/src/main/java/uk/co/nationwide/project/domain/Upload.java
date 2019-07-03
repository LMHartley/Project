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
	private String uploadTitle;
	private String uploadDescription;
	private String uploadImage;
	
	public Upload() 
	{
		
	}
	
	public Upload(Long id, String uploadName, String uploadTitle, String uploadDescription, String uploadImage) 
	{
		this.id = id;
		this.uploadName = uploadName;
		this.uploadTitle = uploadTitle;
		this.uploadDescription = uploadDescription;
		this.uploadImage = "c:\\"+uploadImage;
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
	
	public String getUploadTitle() {
		return uploadTitle;
	}

	public void setUploadTitle(String uploadTitle) {
		this.uploadTitle = uploadTitle;
	}
	
	public String getUploadDescription() {
		return uploadDescription;
	}

	public void setUploadDescription(String uploadDescription) {
		this.uploadDescription = uploadDescription;
	}
	
	public String getUploadImage() {
		return uploadImage;
	}

	public void setUploadImage(String uploadImage) {
		this.uploadImage = uploadImage;
	}


	@Override
	public String toString() {
		return "Upload: [id=" + id + ", uploadName=" + uploadName + "uploadTitle" + uploadTitle + "uploadDescription" + uploadDescription + "uploadImage" + uploadImage + "]";
	}
}
