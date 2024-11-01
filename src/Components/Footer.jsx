import React from 'react';
import PropTypes from 'prop-types';

import devdottoIcon from '../images/socials/devdotto-svgrepo-com (1).svg';
import envelopeIcon from '../images/socials/envelope-svgrepo-com.svg';
import githubIcon from '../images/socials/github-svgrepo-com.svg';
import instagramIcon from '../images/socials/instagram-167-svgrepo-com.svg';
import linkedinIcon from '../images/socials/linkedin-logo-svgrepo-com.svg';
import mediumIcon from '../images/socials/medium-svgrepo-com.svg';
import twitterIcon from '../images/socials/twitter-svgrepo-com.svg';
import youtubeIcon from '../images/socials/youtube-play-svgrepo-com.svg';

const Footer = (props) => {
  const {
    devdotTo,
    email,
    name,
    github,
    instagram,
    linkedIn,
    medium,
    twitter,
    youTube,
    primaryColor,
  } = props;

  return (
    <section
      id="footer"
      className="flex flex-col justify-center items-center p-10 gap-6 mt-8"
      style={{ background: `${primaryColor}` }}
    >
      <div className="flex justify-center items-center gap-6 flex-wrap">
        {email && (
          <a href={`mailto:${email}`} className="social-icon">
            <img src={envelopeIcon} alt="email" className="h-8 w-8 hover:scale-110 transition-transform duration-200" />
          </a>
        )}
        {devdotTo && (
          <a href={`https://dev.to/${devdotTo}`} target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={devdottoIcon} alt="Dev.to" className="h-8 w-8 hover:scale-110 transition-transform duration-200" />
          </a>
        )}
        {github && (
          <a href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={githubIcon} alt="GitHub" className="h-8 w-8 hover:scale-110 transition-transform duration-200" />
          </a>
        )}
        {instagram && (
          <a href={`https://instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={instagramIcon} alt="Instagram" className="h-8 w-8 hover:scale-110 transition-transform duration-200" />
          </a>
        )}
        {linkedIn && (
          <a href={`https://linkedin.com/${linkedIn}`} target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={linkedinIcon} alt="LinkedIn" className="h-8 w-8 hover:scale-110 transition-transform duration-200" />
          </a>
        )}
        {youTube && (
          <a href={`https://youtube.com/${youTube}`} target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={youtubeIcon} alt="YouTube" className="h-8 w-8 hover:scale-110 transition-transform duration-200" />
          </a>
        )}
        {twitter && (
          <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={twitterIcon} alt="Twitter" className="h-8 w-8 hover:scale-110 transition-transform duration-200" />
          </a>
        )}
        {medium && (
          <a href={`https://medium.com/${medium}`} target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={mediumIcon} alt="Medium" className="h-8 w-8 hover:scale-110 transition-transform duration-200" />
          </a>
        )}
      </div>

      <div className="text-center text-white text-opacity-75">
        <p>Created by: {name}</p>
      </div>
    </section>
  );
};

Footer.defaultProps = {
  name: '',
};

Footer.propTypes = {
  devdotTo: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string.isRequired,
  github: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
  medium: PropTypes.string,
  twitter: PropTypes.string,
  youTube: PropTypes.string,
  primaryColor: PropTypes.string.isRequired,
};

export default Footer;
