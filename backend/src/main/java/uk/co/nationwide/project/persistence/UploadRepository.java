package uk.co.nationwide.project.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import uk.co.nationwide.project.domain.*;

@Repository
public interface UploadRepository extends JpaRepository<Upload, Long> {
	
}
