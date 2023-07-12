import CV from '../../../assets/cv/CV-Estanislao-Elias-Varela-Lucius-Frontend-Developer-ESP.pdf';

const CvButton = () => {
  return(
    <div className='resume-container'>
      <a href={ CV } className='cv-btn' target='_blank' rel='noopener noreferrer'>Resume</a>
    </div>
  );
};

export default CvButton;