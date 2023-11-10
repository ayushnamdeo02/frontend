import React, { Component } from 'react';
import axios from 'axios';
import './join.css';
import emailjs from 'emailjs-com';

class Join extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SubmitClicked: false
    };
    this.state = {
      fullName: '',
      emailid: '',
      role: 'volunteer',
      gender: '',
      dateOfBirth: '',
      contactNo: '',
      address: '',
      agreed: '',
      emailValid: true,
      mobileNumberValid: true,
      dateOfBirthValid: true,
      submitted: false,
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    if (!this.state.SubmitClicked) {
      this.setState({ SubmitClicked: true });
    const {
      agreed,
      fullName,
      role,
      gender,
      dateOfBirth,
      contactNo,
      address,
      emailid,
      emailValid,
      mobileNumberValid,
      dateOfBirthValid,
    } = this.state;

    if (agreed !== 'Yes') {
      alert('Please agree to the declaration before submitting.');
      return;
    }

    if (!emailValid || !mobileNumberValid || !dateOfBirthValid) {
      alert('Please enter valid details.');
      return;
    }

    const templateParams = {
      joinheedsfoundation: role,
      to_email: emailid,
      fullname: fullName,
      gender: gender,
      dob: dateOfBirth,
      contact: contactNo,
      address: address,
      // Add more template parameters here if needed
    };

    try {
      const response = await emailjs.send(
        'volunteer',
        'template_vol',
        templateParams,
        'kf4Jt-CYJzwGDc8vk'
      );
      console.log('Email sent successfully!', response);
    } catch (error) {
      console.error('Error sending email:', error);
    }

    const formData = {
      joinheedsfoundation: role,
      emailid: emailid,
      fullname: fullName,
      gender: gender,
      dob: dateOfBirth,
      contact: contactNo,
      address: address,
      submit: 'Yes',
    };

    try {
      const response1 = await axios.post('https://formsubmit.co/20945a60b240b0851fe221d0c34f887f', formData);

      if (response1.status === 200) {
        console.log('Email sent successfully!');
      } else {
        console.error('Email sending failed.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }

    try {
      const response = await axios.post(
        'https://sheetdb.io/api/v1/9hpyl1zaqyaku',
        formData
      );

      if (response.status === 201) {
        alert('Registration submitted successfully!');
        
        // Open a new window on submission
        window.open('https://chat.whatsapp.com/JSrX40coNHb7EHSn556Wda', '_blank');

        // Reset the form and state
        this.setState({
          fullName: '',
          role: 'volunteer',
          emailid: '',
          gender: '',
          dateOfBirth: '',
          contactNo: '',
          address: '',
          agreed: '',
          emailValid: true,
          mobileNumberValid: true,
          dateOfBirthValid: true,
          submitted: true,
        });
      } else {
        alert('Registration submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Registration submission failed. Please try again.');
    }
  };
};

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      if (name === 'emailid') {
        this.validateEmail(value);
      } else if (name === 'contactNo') {
        this.validateMobileNumber(value);
      } else if (name === 'dateOfBirth') {
        this.validateDateOfBirth(value);
      }
    });
  };

  validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    this.setState({ emailValid: isValid });
  };

  validateMobileNumber = (mobileNumber) => {
    const mobileNumberRegex = /^[0-9]{10}$/;
    const isValid = mobileNumberRegex.test(mobileNumber);
    this.setState({ mobileNumberValid: isValid });
  };

  validateDateOfBirth = (dateOfBirth) => {
    const today = new Date();
    const selectedDate = new Date(dateOfBirth);
    const isValid = selectedDate <= today;
    this.setState({ dateOfBirthValid: isValid });
  };

  render() {
    const {
        fullName,
        role,
        emailid,
        gender,
        dateOfBirth,
        contactNo,
        address,
        agreed,
        emailValid,
        mobileNumberValid,
        dateOfBirthValid,
      } = this.state;
    return (
      <div className="volunteer-container">
        <div className="title-volunteer">JOIN US</div>
        <div className='volunteer-detail-page'>
        <div className="impactpage">
        <div className= "impactheading">IMPACT</div>
        <ul className='impact_content'>
          <li className='li_content_impact'>
          <svg className='logo' xmlns="http://www.w3.org/2000/svg" data-name="line expand" viewBox="0 0 48 48" id="education"><path fill="#ffae00" d="M12.633 38.824H2.245c-.558 0-.745 0-.745-1.011V35.408a.75.75 0 0 0-1.5 0v2.405a2.142 2.142 0 0 0 2.245 2.511H12.633a.75.75 0 0 0 0-1.5zM.75 33.047a.75.75 0 0 0 .75-.75V7.505l22.7.039V20.049a.75.75 0 0 0 1.5 0V7.544A1.53 1.53 0 0 0 24.185 6H2.136l3.43-2.9h21.8a1.2 1.2 0 0 1 1.2 1.2V19.52a.75.75 0 0 0 1.5 0V4.3a2.7 2.7 0 0 0-2.7-2.7H5.292a.749.749 0 0 0-.484.177L.353 5.551a1.116 1.116 0 0 0-.242.377A.736.736 0 0 0 0 6.3v26A.75.75 0 0 0 .75 33.047z" class="color1a1a1a svgShape"></path><path fill="#ffae00" d="M27.142 19.781a.75.75 0 0 0 .75-.75V6.04a2.234 2.234 0 0 0-2.227-2.231L6.919 3.77h0a.75.75 0 0 0 0 1.5l18.747.039a.732.732 0 0 1 .73.731V19.031A.75.75 0 0 0 27.142 19.781zM37.472 34.059a.75.75 0 0 0-.75.75v6.236a.9.9 0 0 1-.1.421C36.2 42.271 34.2 44.9 26.2 44.9s-10-2.626-10.427-3.432a.9.9 0 0 1-.1-.42V35.127a.75.75 0 0 0-1.5 0v5.918a2.416 2.416 0 0 0 .268 1.119C15.115 43.437 17.6 46.4 26.2 46.4s11.084-2.96 11.753-4.232a2.4 2.4 0 0 0 .27-1.12V34.809A.75.75 0 0 0 37.472 34.059z" class="color1a1a1a svgShape"></path><path fill="#ffae00" d="M47.487,27.639,27.645,21.011a.732.732,0,0,0-.467,0L4.827,28.177A.751.751,0,0,0,4.816,29.6l20.9,7.064a.76.76,0,0,0,.24.04.751.751,0,0,0,.252-.044l15.341-5.478v3.6a2.522,2.522,0,0,0-1.793,2.406V38.7a2.528,2.528,0,0,0,5.056,0V37.186a2.524,2.524,0,0,0-1.763-2.4v-4.14L47.5,29.057a.75.75,0,0,0-.015-1.418ZM43.308,38.7a1.028,1.028,0,0,1-2.056,0V37.186a1.028,1.028,0,1,1,2.056,0ZM42.192,29.36,26.279,27.643a.75.75,0,1,0-.16,1.491l12.829,1.384-13,4.644L7.454,28.91l19.948-6.4,17.551,5.863Z" class="color1a1a1a svgShape"></path></svg>
          <div className='logo-desc-impact'>Help in educating the under Priviledged</div></li>
          <li className='li_content_impact'>
          <svg className='logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="Teaching"><path d="M8.373 14.917a3.277 3.277 0 0 0 3.273-3.274 3.279 3.279 0 0 0-3.273-3.276 3.28 3.28 0 0 0-3.275 3.276 3.278 3.278 0 0 0 3.275 3.274zm0-5.55a2.276 2.276 0 0 1 0 4.55 2.277 2.277 0 0 1-2.275-2.274 2.278 2.278 0 0 1 2.275-2.276zm13.018 3.173h4.027a.5.5 0 0 0 0-1h-4.027a.5.5 0 0 0 0 1z" fill="#ffae00" class="color000000 svgShape"></path><path d="M31.525 24.478h-.635V4.815a.5.5 0 0 0-.5-.5H1.611a.5.5 0 0 0-.5.5v19.663H.473a.5.5 0 0 0-.5.5v2.207a.5.5 0 0 0 .5.5h31.053a.5.5 0 0 0 .5-.5v-2.207a.5.5 0 0 0-.501-.5zM2.111 5.315H29.89v19.163H12.639v-4.426l2.909.979a.5.5 0 0 0 .493-.101l3.56-3.187 1.123-.198a.498.498 0 0 0 .411-.534l-.223-2.636a.5.5 0 0 0-.498-.458h-.281l.422-1.76a.5.5 0 0 0-.973-.233l-.402 1.674-.12-.082a.506.506 0 0 0-.461-.052.504.504 0 0 0-.306.349l-.306 1.271-2.771 2.234-3.062-2.161a.495.495 0 0 0-.288-.091H5.565c-.526 0-.845.23-1.02.423-.458.507-.396 1.258-.391 1.292v7.699H2.111V5.315zM.973 25.478h3.184v1.207H.973v-1.207zm4.183 1.207v-1.709l-.003-8.247c-.01-.101.003-.424.136-.57.023-.025.084-.093.307-.093h6.112l3.24 2.287a.5.5 0 0 0 .602-.02l3.197-2.577a.507.507 0 0 0 .173-.272l.177-.735.121.082c.008.005.018.003.024.008.044.026.088.052.14.064a.518.518 0 0 0 .116.014h.456l.146 1.723-.813.144a.503.503 0 0 0-.247.12l-3.448 3.088-3.293-1.108a.499.499 0 0 0-.659.473v7.329H5.156zm25.869 0H12.639v-1.207h18.387v1.207z" fill="#ffae00" class="color000000 svgShape"></path></svg>
          <div className='logo-desc-impact'>Gain New Teaching Skills</div></li>
          <li className='li_content_impact'>
          <svg className='logo' xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 512 512" id="Cv"><path d="M365.5,30.274a7,7,0,0,0-5.022-2.124h-176a37.041,37.041,0,0,0-37,37V98.387h-53a37.042,37.042,0,0,0-37,37V446.85a37.042,37.042,0,0,0,37,37H327.518a37.042,37.042,0,0,0,37-37V413.582h53a37.041,37.041,0,0,0,37-37V124.808a7,7,0,0,0-1.978-4.876Zm1.977,22.136,63.485,65.4H376.781a9.311,9.311,0,0,1-9.3-9.3V52.41ZM350.518,446.85a23.026,23.026,0,0,1-23,23H94.482a23.026,23.026,0,0,1-23-23V135.386a23.026,23.026,0,0,1,23-23h53v264.2a37.041,37.041,0,0,0,37,37H350.518Zm67-47.268H184.482a23.025,23.025,0,0,1-23-23V65.147a23.025,23.025,0,0,1,23-23h169v66.358a23.327,23.327,0,0,0,23.3,23.3h63.736V376.583A23.026,23.026,0,0,1,417.518,399.582Z" fill="#ffae00" class="color000000 svgShape"></path><path d="M392.3 339.3H204.68a7 7 0 0 0 0 14H392.3a7 7 0 0 0 0-14zM204.68 309.362H317a7 7 0 0 0 0-14H204.68a7 7 0 0 0 0 14zM230.494 257.556a6 6 0 0 0 6 5.922h.063l129.675-1.333a6 6 0 0 0 5.938-6.078L371.7 220.15A36.558 36.558 0 0 0 334.9 180.6l-7.426.075a6 6 0 0 0-5.728 4.42l-7.54 27.638-3.938-6.867 4.946-16.371a6 6 0 0 0-5.744-7.735h-.061l-18.779.191a6 6 0 0 0-5.646 7.851l5.311 16.366-2.91 5.758-7.137-26.205a6 6 0 0 0-5.789-4.423h-8.427a36.559 36.559 0 0 0-36 40.3zm70.868-63.708l-1.184 3.917-1.263-3.892zm-53.357 7.736a24.577 24.577 0 0 1 18.084-8.28h3.782L279.9 230.148a6 6 0 0 0 10.592 2.02 5.923 5.923 0 0 0 .555-.894l9.344-18.488 10.586 18.461a6 6 0 0 0 10.994-1.406l10.15-37.208 2.892-.029a24.558 24.558 0 0 1 24.705 26.783 5.888 5.888 0 0 0-.024.623l.391 30.2-117.675 1.209-.392-30.247a5.764 5.764 0 0 0-.037-.588A24.269 24.269 0 0 1 248.005 201.584zM299.056 180.084c.122 0 .244 0 .366 0a35.412 35.412 0 0 0 35.052-35.769l-.279-27.479a27.82 27.82 0 0 0-28.037-27.471l-31.432.319a11.636 11.636 0 0 0-11.518 11.754l.443 43.6A35.45 35.45 0 0 0 299.056 180.084zM279.5 113.208a31.246 31.246 0 0 0-4.15 2.629l-.067-6.647C276.6 110.54 278.008 111.888 279.5 113.208zm36.282 47.85a23.414 23.414 0 0 1-40.136-16.147l-.107-10.526c3.411-7.166 8.872-11.521 15.9-12.673a46.325 46.325 0 0 0 22.41 6.217 39.274 39.274 0 0 0 8.442-.923l.177 17.43A23.255 23.255 0 0 1 315.785 161.058zm-9.506-59.7a15.774 15.774 0 0 1 15.709 13.321c-9.608 2.954-19.559.76-29.635-6.575a64.646 64.646 0 0 1-7.581-6.527z" fill="#ffae00" class="color000000 svgShape"></path></svg>
          <div className='logo-desc-impact'>Add To Their CV Or Resume</div></li>
          <li className='li_content_impact'>
          <svg className='logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="love"><path d="M20.16,4.61A6.27,6.27,0,0,0,12,4a6.27,6.27,0,0,0-8.16,9.48l7.45,7.45a1,1,0,0,0,1.42,0l7.45-7.45A6.27,6.27,0,0,0,20.16,4.61Zm-1.41,7.46L12,18.81,5.25,12.07a4.28,4.28,0,0,1,3-7.3,4.25,4.25,0,0,1,3,1.25,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,6.05Z" fill="#ffb64a" class="color000000 svgShape"></path></svg>
          <div className='logo-desc-impact'>Build A Feeding Of Self-Worth</div></li>
          <li className='li_content_impact'>
          <svg className='logo' xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 168 168" id="Join"><path fill="#ffb64a" d="M127.99994,96.49219a19.44981,19.44981,0,0,0-13.1955-18.5578,9.00039,9.00039,0,1,0-11.60577.00208,18.89839,18.89839,0,0,0-7.14239,4.30969A24.18053,24.18053,0,0,0,90.21,79.81567a11.99976,11.99976,0,1,0-12.42065,0,24.17454,24.17454,0,0,0-5.84595,2.43042,18.89824,18.89824,0,0,0-7.14215-4.30963,8.99965,8.99965,0,1,0-11.60583-.00208,19.44973,19.44973,0,0,0-13.1955,18.5578V102H59.192a27.67588,27.67588,0,0,0-.19208,3.19818V112h50v-6.80182A27.67588,27.67588,0,0,0,108.80786,102h19.19208Zm-19-30.42969a5,5,0,1,1-5,5A5.00592,5.00592,0,0,1,108.99994,66.0625Zm-33,3.5a8,8,0,1,1,8,8A8.00921,8.00921,0,0,1,75.99994,69.5625Zm-17-3.5a5,5,0,1,1-5,5A5.00589,5.00589,0,0,1,58.99994,66.0625ZM43.99994,98V96.49219A15.26963,15.26963,0,0,1,58.99994,81a14.5932,14.5932,0,0,1,9.5575,3.60327A26.305,26.305,0,0,0,59.96326,98Zm61,10h-42v-2.80182C62.99994,92.958,72.42035,83,83.99994,83c11.5791,0,21,9.958,21,22.19818Zm19-10H108.03656a26.30667,26.30667,0,0,0-8.59442-13.39661A14.59311,14.59311,0,0,1,108.99994,81a15.26932,15.26932,0,0,1,15,15.49219Z" class="color2d4356 svgShape"></path><path fill="#ffb64a" d="M26.04047 89.15717a1.9888 1.9888 0 0 0 .98547.72351l.73328 1.0343.97961-1.23822a1.9826 1.9826 0 0 0 .50134-.43555l6.32819-8a2.00014 2.00014 0 0 0-3.13684-2.48242l-2.37476 3.00189a53.98886 53.98886 0 0 1 107.0022-7.747h.15088l.83014-1.1709a1.99966 1.99966 0 0 1 1.579-.8418 1.97189 1.97189 0 0 1 1.18182.36078 57.97909 57.97909 0 0 0-114.75647 9.8844l-2.41315-3.40338a2 2 0 1 0-3.26257 2.31439zM158 10a3 3 0 1 0-3-3A3.00344 3.00344 0 0 0 158 10zm0-4.5A1.5 1.5 0 1 1 156.5 7 1.50148 1.50148 0 0 1 158 5.5zM143 60a3 3 0 1 0-3-3A3.00344 3.00344 0 0 0 143 60zm0-4.5a1.5 1.5 0 1 1-1.5 1.5A1.50148 1.50148 0 0 1 143 55.5zM33 8a3 3 0 1 0-3-3A3.00344 3.00344 0 0 0 33 8zm0-4.5A1.5 1.5 0 1 1 31.5 5 1.50148 1.50148 0 0 1 33 3.5zM128 5a2 2 0 1 0-2-2A2.00229 2.00229 0 0 0 128 5zm0-3a1 1 0 1 1-1 1A1.001 1.001 0 0 1 128 2zM78 20a2 2 0 1 0-2-2A2.00229 2.00229 0 0 0 78 20zm0-3a1 1 0 1 1-1 1A1.001 1.001 0 0 1 78 17zM28 53a2 2 0 1 0-2-2A2.00229 2.00229 0 0 0 28 53zm0-3a1 1 0 1 1-1 1A1.001 1.001 0 0 1 28 50z" class="color2d4356 svgShape"></path><circle cx="2" cy="143" r="2" fill="#ffb64a" class="color2d4356 svgShape"></circle><path fill="#ffb64a" d="M11 141H8a2 2 0 0 0 0 4h3a2 2 0 0 0 0-4zM160 141h-3a2 2 0 0 0 0 4h3a2 2 0 0 0 0-4z" class="color2d4356 svgShape"></path><circle cx="166" cy="143" r="2" fill="#ffb64a" class="color2d4356 svgShape"></circle><path fill="#ffb64a" d="M150.72131,141H94.70654a58.00242,58.00242,0,0,0,47.2403-54.9l2.48468,3.14124a2.00014,2.00014,0,0,0,3.13684-2.48242l-6.32819-8a2.00117,2.00117,0,0,0-3.2002.084l-5.67181,8a2.00045,2.00045,0,0,0,3.26355,2.31439l2.32043-3.27271A53.98526,53.98526,0,0,1,30.84674,93.46021l-1.60657,2.031a2.001,2.001,0,0,1-1.5683.75879c-.01764,0-.03473,0-.05286-.001a1.96853,1.96853,0,0,1-.32227-.04639A58.05573,58.05573,0,0,0,73.27087,141H17.27869a2.017,2.017,0,1,0,0,4H150.72131a2.017,2.017,0,1,0,0-4Z" class="color2d4356 svgShape"></path><polygon fill="#ce7f0b" points="4.583 34.011 6.07 32.056 5.131 31.524 4.177 33.714 4.145 33.714 3.175 31.539 2.22 32.087 3.691 33.996 3.691 34.027 1.391 33.73 1.391 34.794 3.707 34.497 3.707 34.528 2.22 36.436 3.112 37 4.13 34.794 4.16 34.794 5.099 36.984 6.085 36.421 4.583 34.543 4.583 34.512 6.945 34.794 6.945 33.73 4.583 34.042 4.583 34.011" class="color0bceb2 svgShape"></polygon><polygon fill="#ce7f0b" points="40.281 24.769 41.137 23.643 40.597 23.337 40.047 24.598 40.029 24.598 39.471 23.345 38.92 23.661 39.768 24.76 39.768 24.778 38.443 24.607 38.443 25.22 39.777 25.049 39.777 25.067 38.92 26.166 39.434 26.49 40.02 25.22 40.038 25.22 40.578 26.481 41.146 26.157 40.281 25.075 40.281 25.057 41.641 25.22 41.641 24.607 40.281 24.787 40.281 24.769" class="color0bceb2 svgShape"></polygon><polygon fill="#ce7f0b" points="160 34.713 160 33.67 157.683 33.977 157.683 33.946 159.142 32.028 158.221 31.506 157.285 33.654 157.253 33.654 156.302 31.521 155.365 32.059 156.808 33.931 156.808 33.962 154.552 33.67 154.552 34.713 156.823 34.422 156.823 34.453 155.365 36.325 156.24 36.878 157.238 34.713 157.268 34.713 158.189 36.862 159.156 36.31 157.683 34.468 157.683 34.437 160 34.713" class="color0bceb2 svgShape"></polygon><polygon fill="#ce7f0b" points="116.702 29.023 115.444 30.638 116.198 31.115 117.06 29.248 117.085 29.248 117.88 31.101 118.714 30.625 117.443 29.036 117.443 29.009 119.442 29.248 119.442 28.348 117.443 28.612 117.443 28.586 118.701 26.931 117.907 26.481 117.099 28.334 117.073 28.334 116.252 26.494 115.444 26.958 116.689 28.573 116.689 28.599 114.742 28.348 114.742 29.248 116.702 28.996 116.702 29.023" class="color0bceb2 svgShape"></polygon><path fill="#ce7f0b" d="M118.15387 150h-8.30774a2.00641 2.00641 0 0 0 0 4h8.30774a2.00641 2.00641 0 0 0 0-4zM58.15387 150H49.84613a2.00641 2.00641 0 0 0 0 4h8.30774a2.00641 2.00641 0 0 0 0-4zM104 150H64a2 2 0 0 0 0 4H79.94v2H72a2 2 0 0 0 0 4H97a2 2 0 0 0 0-4H88.06v-2H104a2 2 0 0 0 0-4z" class="color0bceb2 svgShape"></path></svg>

          <div className='logo-desc-impact'>Earn HEEDS FOUNDATION Volunteer Certificate</div></li>
        </ul>
        </div>
        <h2 className='volunteer-subheading1'>FORM TO JOIN HEEDS FAMILY</h2>
          <div class="line"></div>
        <form className="volunteer-form" onSubmit={this.handleSubmit}>
        
          <div className="body-form">
            <label className="role">Join as:</label>
            <select id="role" name="role" value={role} onChange={this.handleInputChange}>
              <option value="volunteer">Volunteer</option>
              <option value="donor">Donor</option>
            </select>

            <label className="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={this.handleInputChange}
              required
            />

            <label className="emailid">Email id:</label>
            <input
              type="text"
              id="emailid"
              name="emailid"
              value={emailid}
              onChange={this.handleInputChange}
              required
            />
            {!emailValid && <div className="error">Please enter a valid email.</div>}

            <label className="gender">Gender:</label>
            <select id="gender" name="gender" value={gender} onChange={this.handleInputChange}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <label className="dateOfBirth">Date of Birth:</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={this.handleInputChange}
              required
            />
            {!dateOfBirthValid && <div className="error">Please enter a valid date of birth.</div>}

            <label className="contactNo">Contact No:</label>
            <input
              type="tel"
              id="contactNo"
              name="contactNo"
              value={contactNo}
              onChange={this.handleInputChange}
              required
            />
            {!mobileNumberValid && <div className="error">Please enter a valid 10-digit mobile number.</div>}

            <label className="address">Address:</label>
            <textarea
              id="address"
              name="address"
              value={address}
              onChange={this.handleInputChange}
              required
            ></textarea>

            <div className="declaration">
              <label className="agreed">
                I agree to follow the Heeds Foundation core principles and I understand that any personal risk during the
                process will be borne by me and the Heeds Foundation is not liable.
              </label>
              <select
                id="agreed"
                name="agreed"
                value={agreed}
                onChange={this.handleInputChange}
                required
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            <button type="submit" disabled={this.state.SubmitClicked}>Submit</button>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default Join;
