import myPhoto from "./assets/photo.jfif";

export default function Intro() {
  return (
    <div className="intro">
      <img
        src={myPhoto}
        alt="A smiling man that's looking into a camera, wearing a black tshirt"
        className="intro__photo"
      />
      <div className="intro__info">
        <h1 className="intro__full-name">Kamil Kobylarz</h1>
        <h2 className="intro__role">Frontend Developer</h2>
        <a
          href="mailto:kamil.m.kobylarz@gmail.com"
          className="intro__link"
          target="_blank"
        >
          <i class="fa-solid fa-envelope"></i>Email
        </a>
        <a
          href="https://www.linkedin.com/in/kamil-kobylarz1/"
          className="intro__link intro__link--blue"
          target="_blank"
        >
          <i class="fa-brands fa-linkedin"></i>LinkedIn
        </a>
        <h3>About</h3>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with best
          practices, and am always looking for new things to learn.
        </p>
        <h3>Interests</h3>
        <p>
          Gaming. Anime. Musicals. Dogs. Internet fanatic. Food lover. Travel
          geek. Coffee fanatic.
        </p>
      </div>
    </div>
  );
}
