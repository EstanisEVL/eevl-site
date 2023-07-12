import profileImg from '../../../assets/img/Estanislao-Elias-Varela-Lucius-Frontend-Developer.jpg';

const ProfilePic = () => {
  return(
    <div className='aboutSection-styledPic'>
      <div className='styledPic-container'>
        <div className='img-container'>
          <div>
            <img alt='presentation' aria-hidden='true' src="data:image/svg+xml;charset=utf-8,%3Csvg height='500' width='500' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"/>
          </div>
          <div aria-hidden='true' data-placeholder-image>
          </div>
          <picture>
            <source type='image/avif' srcSet={ profileImg }></source>
            <source type='image/webp' srcSet={ profileImg }></source>
            <img alt='profile pic' src={profileImg} />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default ProfilePic;