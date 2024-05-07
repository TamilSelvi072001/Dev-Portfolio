import { Link } from "react-router-dom";
import "./FirstPage.css";

const FirstPage = () => {
  return (
    <>
      <div className="top-half">Hey Hi! Welcome:)</div>
      <div className="bottom-half">
        <div className="display-property">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F04-may-2024%2Ftamilselvi g1714831619419%2Fimage-5-5.png?alt=media&token=0"
            className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div  object-fit my-photo "
            alt="Ellipse 11 Image"
          />
        </div>
        <div className="bottom-second-half">
          <div className="my-name">I'm Tamil Selvi</div>
          <div className="about-me">
            I’m working as a front end developer with 2 years of experience in
            Tata Consultancy Services. I know few programming language like
            Java, HTML, CSS, JavaScript, MYSQL . I also know some frameworks and
            libraries like React.js and Spring boot. Along with that I'm
            familiar with tools like Git, Figma and Microsoft Azure. I’m in the
            process of becoming a expertized full stack developer now.
          </div>
          <Link to="/details">
            <button className="common-btn" >
              MORE ABOUT ME
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default FirstPage;
