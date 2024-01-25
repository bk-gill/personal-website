import React, { useState } from "react";
import styles from "../styles/Modal.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FaGithub } from "react-icons/fa";

const Modal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % project.imageSrc.length
    );
  };

  const previousImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + project.imageSrc.length) % project.imageSrc.length
    );
  };

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modalTitle}>{project.title}</h2>{" "}
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.imageContainer}>
          {project.imageSrc.length > 1 && (
            <>
              <button className={styles.leftArrow} onClick={previousImage}>
                &larr;
              </button>
              <button className={styles.rightArrow} onClick={nextImage}>
                &rarr;
              </button>
            </>
          )}
          <LazyLoadImage
            src={project.imageSrc[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            effect="blur"
            className={styles.modalImage}
          />
        </div>
        <ul>
          {project.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {project.githubUrl && (
          <div className={styles.githubLink}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <FaGithub size={20} />
              <span>View on GitHub</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
