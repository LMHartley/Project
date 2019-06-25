package uk.co.nationwide.project.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import uk.co.nationwide.project.business.IUploadService;
import uk.co.nationwide.project.constants.Constants;
import uk.co.nationwide.project.domain.Upload;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UploadController {

	@Autowired
	private IUploadService uploadService;

	@GetMapping(path = Constants.UPLOAD)
	public ResponseEntity<List<Upload>> getUploadName() {
		return ResponseEntity.ok(uploadService.getUpload());
	}
	
	@RequestMapping(value = Constants.UPLOAD, method = RequestMethod.POST)
	public ResponseEntity<Upload> postUpload(@RequestBody Upload uploadName) {
		return ResponseEntity.ok(uploadService.addUpload(uploadName));
	}

	@RequestMapping(value = Constants.UPLOAD_WITH_PARAM, method = RequestMethod.DELETE)
	public ResponseEntity<List<Upload>> deleteUploadName(@PathVariable("id") long id) {
		if (!uploadService.findById(id).isPresent()) {
			return ResponseEntity.badRequest().build();
		}
		uploadService.deleteUpload(id);
		return ResponseEntity.ok(uploadService.getUpload());
	}



}