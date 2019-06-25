package uk.co.nationwide.project.business;

import java.util.List;
import java.util.Optional;
import uk.co.nationwide.project.domain.Upload;

public interface IUploadService {

	List<Upload> getUpload();

	void deleteUpload(Long id);

	Upload addUpload(Upload uploadName);

	Optional<Upload> findById(long id);

}