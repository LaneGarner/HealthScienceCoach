import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { FaYoutube } from "react-icons/fa";
import { useHistory } from "react-router-dom";

import "./Contact.scss";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [employer, setEmployer] = useState("");
  const [college, setCollege] = useState("");
  const [certifications, setCertifications] = useState("");
  const [honors, setHonors] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [phone, setPhone] = useState("");
  const [info, setInfo] = useState("");
  const [photo, setPhoto] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const [showLongForm, setShowLongForm] = useState(false);

  const history = useHistory();

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(`name: ${name} email: ${email} message: ${message}`);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact-form",
        name: name,
        email: email,
        profession: profession,
        employer: employer,
        college: college,
        certifications: certifications,
        honors: honors,
        linkedIn: linkedIn,
        phone: phone,
        info: info,
        photo: photo,
        message: message,
      }),
    }).then(() => setSuccess(true));
  };

  //show success message & redirect to home if success
  success && setTimeout(() => history.push("/"), 5000);
  if (success) {
    return (
      <div className="success-container">
        <h1>✅</h1>
        <h1>Success</h1>
        <p>Thanks for getting in touch. You will be redirected in 5 seconds.</p>
      </div>
    );
  }

  return (
    <div className="page-container contact-container">
      <h1>{showLongForm ? "Guest Speaker Form" : "Get in touch"}</h1>
      <button onClick={() => setShowLongForm(!showLongForm)} className="form-select-button">
        {showLongForm ? "Contact Form" : "Guest Speaker Form"}
      </button>
      {showLongForm ? (
        <section className="long-form-about">
          <p>
            This is our third year for the Health Science Pathway at Turner High School. Our courses include Biology, Chemistry, Healthcare Careers, Nutrition and Wellness, Anatomy
            and Physiology, Medical Terminology A and B, Care of Athletes, and KCKCC courses, Certified Nurses Assistant, and Certified Medical Aid.
          </p>
          <p>
            I have created an audio and video library for students to learn about you and your career. Our general target market for fifteen to twenty-five-year-olds that are in
            the building and or past graduates. Since it will be on YouTube it will be available for other high school or college-age students as well. All interviews will be held
            under teams meetings.
          </p>
          <div className="youtube-link">
            <a href="https://www.youtube.com/playlist?list=PLH0ttkxfOyIcym5Ngnc0XsK8EqeAMJ49v" target="_blank" rel="noreferrer">
              <FaYoutube className="youtube-icon" />
              Here are some previous interviews
            </a>
          </div>
          <div className="about-interview">
            <h2>About the interview:</h2>
            <ul>
              <li>Starting with a brief introduction about you</li>
              <li>Your current position/profession and employer</li>
              <li>Awards/honors you have received</li>
              <li>Colleges and Degrees</li>
              <li>Certifications and Specialties</li>
              <li>How you chose that career and the steps that you took to get there</li>
              <li>What you do on a daily basis</li>
              <li>What you wish you knew as a high school junior that would help you in your career now</li>
            </ul>
          </div>
          <div className="final-p-container">
            <p className="final-paragraph">Please share this with anyone else you think would be fun to interview about their career path.</p>
          </div>
          {/* </div> */}
        </section>
      ) : (
        <>
          <p className="center">Use this form to provide your feedback or get in touch.</p>
          <p className="center">If you're interested in sharing your "WHY" click the button above and fill out the guest speaker form.</p>
        </>
      )}

      <form name="contact" method="POST" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="Enter your answer" required autoFocus />
        </label>
        <label htmlFor="email">
          Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Enter your answer" required />
        </label>
        {showLongForm ? (
          <>
            <label htmlFor="profession">
              Profession
              <input value={profession} onChange={(e) => setProfession(e.target.value)} type="text" name="profession" placeholder="Enter your answer" required />
            </label>
            <label htmlFor="employer">
              Employer
              <input value={employer} onChange={(e) => setEmployer(e.target.value)} type="text" name="employer" placeholder="Enter your answer" required />
            </label>
            <label htmlFor="college">
              College(s) and Degrees
              <TextareaAutosize value={college} onChange={(e) => setCollege(e.target.value)} type="text" name="college" placeholder="Enter your answer" />
            </label>
            <label htmlFor="certifications">
              Certifications / Specialties
              <TextareaAutosize value={certifications} onChange={(e) => setCertifications(e.target.value)} type="text" name="certifications" placeholder="Enter your answer" />
            </label>
            <label htmlFor="phone">
              Phone number
              <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" name="phone" placeholder="Enter your answer" required />
            </label>
            {/* week / day */}
            <label htmlFor="honors">
              Honors / Awards / Scholarships etc.
              <input value={honors} onChange={(e) => setHonors(e.target.value)} type="text" name="honors" placeholder="Enter your answer" />
            </label>
            <label htmlFor="linkedIn">
              LinkedIn Profile
              <input value={linkedIn} onChange={(e) => setLinkedIn(e.target.value)} type="text" name="linkedIn" placeholder="Enter your answer" />
            </label>
            <label htmlFor="photo">
              Upload a photo of you at work for video thumbnail
              <input value={photo} onChange={(e) => setPhoto(e.target.value)} type="file" name="photo" />
            </label>
            <label htmlFor="info">
              Any other information I should know
              <TextareaAutosize value={info} onChange={(e) => setInfo(e.target.value)} type="text" name="info" placeholder="Enter your answer" />
            </label>
          </>
        ) : (
          <label htmlFor="message">
            Message
            <TextareaAutosize value={message} onChange={(e) => setMessage(e.target.value)} name="message" placeholder="Enter your answer" />
          </label>
        )}
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

//{/* <div style={{height: "700px", width: '100vw'}}><iframe src="https://outlook.office365.com/owa/calendar/HealthScienceCoachPodcast@turnerusd202.org/bookings/" width="100%" height="100%" scrolling="yes" style={{border:0}}></iframe></div> */}
//{/* <div style={{height: "700px", width: '100vw'}}><iframe src="https://outlook.office365.com/owa/calendar/HealthScienceCoachPodcast@turnerusd202.org/bookings/" width="100%" height="100%" scrolling="yes" style={{border:0}}></iframe></div> */}
