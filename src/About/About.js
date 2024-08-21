import React from "react";
import "./About.scss";
import{Link} from 'react-router-dom'

const GameController02Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
    <path d="M17.5 16C17.5 17.1046 16.6046 18 15.5 18C14.3954 18 13.5 17.1046 13.5 16C13.5 14.8954 14.3954 14 15.5 14C16.6046 14 17.5 14.8954 17.5 16Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10.5 16C10.5 17.1046 9.60457 18 8.5 18C7.39543 18 6.5 17.1046 6.5 16C6.5 14.8954 7.39543 14 8.5 14C9.60457 14 10.5 14.8954 10.5 16Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8.16417 17.8583C6.891 20.067 5.20631 21.347 3.84736 20.9174C1.98573 20.3289 1.44035 16.7547 2.62922 12.9344C3.8181 9.11398 6.29102 6.49405 8.15264 7.08259C9.30278 7.44619 9.35625 8.86174 10.3032 9.378C10.527 9.5 10.8405 9.5 11.4676 9.5H12.5324C13.1595 9.5 13.473 9.5 13.6968 9.378C14.6438 8.86174 14.6972 7.44619 15.8474 7.08259C17.709 6.49405 20.1819 9.11398 21.3708 12.9344C22.5597 16.7547 22.0143 20.3289 20.1526 20.9174C18.7937 21.347 17.109 20.067 15.8358 17.8583M11.1039 16H12.8961" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function About() {
  
  return (
    <div className="mainAbout-div">
      <div className="outterAbout-div">
        <div className="Info">
          <h1 className="aboutHeader" id="aboutHeader">
            /About
          </h1>
          <div className="skills">
            <p className="meIntro">
              Hey guys! Im Arsh, a{" "}
              <span>
                {" "}
                <a
                  href="https://www.yorku.ca/laps/itec/information-technology/"
                  className="highlightText"
                >
                  York Universtiy IT{" "}
                </a>
              </span>
              student, with a passion for sports, tech and cars. An Entrepreneur
              chasing excellence always. I am slowly diving into full stack
              development and fueling my love for technology! I am also in
              process of creating my own{" "}
              <span>
                <a
                  href="https://www.instagram.com/overachievers.clothing/"
                  className="highlightText"
                >
                  Clothing Brand
                </a>
              </span>
              ! Whether im selling my products or programming, I am driven by
              the thrill of pushing boundaries and exploring new horizons. Join
              me on my Journey as I balance these worlds and chase my dreams
              with relentless determination and discipline!
            </p>

            <div className="programmingTitle">
              <h2 className="languageTitle">Languages I've Learnt:</h2>

              <div className="programmingSkills">
                <div className="line1">
                  <p className="programmingLang"> ~ JavaScript</p>
                  <p className="programmingLang"> ~ React</p>
                  <p className="programmingLang"> ~ Python</p>
                </div>

                <div className="line2">
                  <p className="programmingLang"> ~ Next.JS</p>
                  <p className="programmingLang"> ~ Java</p>
                  <p className="programmingLang"> ~ Typescript</p>
                </div>
              </div>
            </div>
            <div className="aboutUsShort">
  <div>
    <p className="roleTitle">My Roles</p>
    <div className="roleButtons">
      <div>
    <p className="innerRoleButton">Development</p>
    </div>
    <div>
    <p className="innerRoleButton">Marketing</p>
    </div>
    <div> 
    <p className="innerRoleButton">Leading</p>
    </div>
    </div>
  </div>
  <div>
    <p className="roleTitle">My Hobbies</p>
    <div className="roleButtons">
      <div>
    <p className="innerRoleButton">Sports</p>
    </div>
    <div>
    <p className="innerRoleButton">Gaming</p>
    </div>
    <div> 
    <p className="innerRoleButton">Coding</p>
    </div>
    <div> 
    <p className="innerRoleButton">Learning</p>
    </div>
    </div>
  </div>
  <div>
    <p className="roleTitle">My Socials</p>
    <div className="roleButtons">
      <div>
    <p className="innerRoleButton">Instagram</p>
    </div>
    <div>
    <p className="innerRoleButton">Twitter</p>
    </div>
    <div> 
    <p className="innerRoleButton">Linkedin</p>
    </div>
    <div> 
    <p className="innerRoleButton">Github</p>
    </div>
    </div>
  </div>
</div>
          </div>
        </div>



      </div>
    </div>
  );
}

export default About;
