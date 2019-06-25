package uk.co.nationwide.project.business;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import uk.co.nationwide.project.domain.Upload;
import uk.co.nationwide.project.persistence.UploadRepository;


@Service
public class UploadService implements IUploadService {
	
	@Autowired
	private UploadRepository uploadRepository;
	
	public List<Upload> getUpload() {
		return uploadRepository.findAll();
	}

	public void deleteUpload(Long id) {
		uploadRepository.deleteById(id);
		
	}

	public Upload addUpload(Upload uploadName) {
		return uploadRepository.save(uploadName);
	}

	public Optional<Upload> findById(long id) {
		return uploadRepository.findById(id);
	}
}
