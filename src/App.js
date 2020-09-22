/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from './images/logo.png';
import sarah from './images/sarah.png';
import fredo from './images/fredo.png';
import tony from './images/tony.png';
// import toggleslider from './images/toggleslider.png';
// import togglespinner from './images/togglespinner.png';
// import publiclibraries from './images/publiclibraries.png';
// import material from './images/material.png';
// import folder from './images/folder.png';
// import files from './images/files.png';
// import downloads from './images/downloads.png';
// import spinne from './images/spinne.png';
import togglevideo from './images/togglevideo.mp4';
import video2 from './images/video2.mp4';
import video3 from './images/video3.mp4';
import video4 from './images/video4.mp4';

const HeaderStyles = css`
  width: 100%;
  background-color: white;
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ButtonDiv = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavStyles = css`
  ${HeaderStyles}
  padding: 10px 10px 10px 10px;
  
  width: 100%;
  justify-content: space-between;
  img {
    height: 35px;
    width: auto;
    margin-left: 1em;
  }
  
  }
  button {
    font-weight: bold;
    font-size: 16px;
    border-radius: 3px;
    padding: 0.6em 1em;
    margin-right: 1em;
    &:hover {
      background-color: #ff4d47;
      border-color: #ff4d47;
    }
  }
`;

const HeaderLinkStyles = css`
a {
  font-weight: bold;
  margin: 1.2em;
    color: #474747;
    text-decoration: none;
    &:hover {
      color: #ff6661;
    }
`;

const MainStyles = css`
  margin-top: 200px;
`;

const SectionStyles = css`
  text-align: center;
`;

const Section1Styles = css`
  ${SectionStyles}
  margin-left: auto;
  margin-right: auto;
  h1 {
    margin: 0 auto;
    font-size: 86px;
    line-height: 1.15;
    letter-spacing: 0.05 em;
  }
  p {
    font-size: 26px;
    margin-left: 100px;
    margin-right: 100px;
  }

  button {
    font-size: 22px;
    font-weight: 900;
    padding: 0.8em 1em;
    border-radius: 4px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
  }
  video {
    width: 1024px;
    margin: 0 auto;
    padding: 24px 0;
    display: block;
  }
`;
const Section2Styles = css`
  ${SectionStyles}
  background-color: black;
  color: white;
  padding-top: 50px;
  padding-bottom: 100px;

  h2 {
    font-size: 42px;
    border-color: 1px solid white;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }

  p {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    color: #d1d1d1;
  }
  button {
    font-weight: bold;
    font-size: 18px;
    background-color: black;
    color: #ff6661;
    border: 2px solid #ff6661;
    border-radius: 4px;
    padding: 0.6em;
    margin-bottom: 50px;
  }
`;

const PeopleContainerStyles = css`
  display: flex;
  justify-content: space-between;
  margin: 0 auto 0 auto;
  width: 870px;
`;

const PeopleStyles = css`
  text-align: left;
  img {
    height: 224px;
    width: auto;
    flex-shrink: 0;
    margin-bottom: 20px;
  }
  div {
    font-size: 18px;
  }
  div:nth-child(2) {
    font-weight: bold;
  }
`;

const Section3Styles = css`
  ${SectionStyles}
  div:first-child {
    color: #6284fe;
    font-style: italic;
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    text-align: center;
    margin-top: 70px;
  }

  h2 {
    margin-top: 20px;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 54px;
  }
  p {
    font-size: 24px;
    width: 55%;
    margin-left: auto;
    margin-right: auto;
  }
  video {
    height: 432px;
    width: auto;
  }

  button {
    color: #ff6661;
    border: 2px #ff6661 solid;
    background-color: white;
    font-size: 18px;
    font-weight: bold;
    padding: 0.7em 1em 0.7em 1em;
    border-radius: 4px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 32px;
  }
`;

const GridStyles = css`
  align-content: top;
  p,
  h3 {
    margin-top: 50px auto 0 auto;
    text-align: left;
    width: 70%;
  }
  h3 {
    margin-left: 76px;
    font-size: 36px;
  }
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: center;
  video {
    align-self: top;
    max-width: 100%;
  }
  div {
    margin: 20px;
  }
`;
const FaqStyles = css`
  width: 80%;
  margin: 0 auto;
  h2 {
    font-size: 44px;
  }
  div {
    border-top: 0.5px solid lightgrey;

    font-weight: bold;
    font-size: 18px;
    padding: 1.2em;
    &:hover {
      background-color: #f1f1f1;
    }
  }
`;

function App() {
  return (
    <>
      <header css={HeaderStyles}>
        <div css={NavStyles}>
          <a styles={{ marginRight: 'auto' }} href="#a">
            <img src={logo} alt="logo"></img>
          </a>
          <div css={HeaderLinkStyles}>
            <a href="#a">Discover</a>
            <a href="#a">Learn</a>
            <a href="#a">Plans</a>
            <a href="#a">Solutions</a>
            <a href="#a">Support</a>
          </div>
          <button styles={{ marginLeft: 'auto' }}>Try for free</button>
        </div>
      </header>

      <main css={MainStyles}>
        <section css={Section1Styles}>
          <h1>
            ProtoPie 5.0 <br />
            The future of interactive prototyping
          </h1>
          <p>
            The next chapter of digital design is here, with productivity boosts
            that will change the way your team work and how you collaborate
            forever.
          </p>
          <div css={ButtonDiv}>
            <button>Subscribe to Team Plan</button>
          </div>
          <video src={togglevideo}></video>
        </section>
        <section css={Section2Styles}>
          <h2>
            5.0 Launch Event: Introducing Interaction recipes & Interaction
            libraries
          </h2>
          <p>
            Hear about the inspiration behind Interaction recipes & Interaction
            libraries, ProtoPies vision and the future beyond ProtoPie 5.0. In
            this launch event, we cover all this while answering some of the
            burning questions viewers had.
          </p>
          <div css={ButtonDiv}>
            <button>Watch Now</button>
          </div>
          <div css={PeopleContainerStyles}>
            <div css={PeopleStyles}>
              <img src={tony} alt=""></img>
              <div>Tony Kim</div>
              <div>CEO & Co-founder</div>
            </div>
            <div css={PeopleStyles}>
              <img src={fredo} alt=""></img>
              <div>Fredo Tan</div>
              <div>Head of Customer Success</div>
            </div>
            <div css={PeopleStyles}>
              <img src={sarah} alt=""></img>
              <div>Sarah Sehee Lim</div>
              <div>Lead Product Designer</div>
            </div>
          </div>
        </section>
        <section css={Section3Styles}>
          <div>Team & Enterprise plan only</div>
          <h2>Interaction recipes</h2>
          <p>
            This is so much more than a handoff. Now you can record and share
            your interaction designs with full, visual documentation—every
            action, detail, and spec. Protect your design vision and keep
            everyone on the same page.
          </p>
          <div css={ButtonDiv}>
            <button>Learn More</button>
          </div>
          <div css={GridStyles}>
            <div>
              <video src={video2}></video>
            </div>
            <div>
              <h3>Any interactions, any user journey</h3>
              <p>
                Record and share as few or as many interactions as you need to
                give teammates the right guidance and understanding of your
                prototypes.
              </p>
            </div>

            <div>
              <h3>There’s nothing to explain</h3>
              <p>
                With Interaction recipes, your prototype speaks for itself,
                highlighting every interaction’s precise specs for developers.
                No more explainer decks.
              </p>
            </div>
            <div>
              <video src={video3}></video>
            </div>
            <div>
              <video src={video4}></video>
            </div>
            <div>
              <h3>It’s all in the timeline</h3>
              <p>
                The clearest handoff tool you’ve ever seen, Interaction recipes
                allow you to scrub through an entire prototype and pull just the
                details you need for specific interactions.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2>Trusted by the world's best teams</h2>
          <p>Kumi Tominaga,Creative Technology Director, R/GA</p>
          <p>
            “The new Interaction Libraries help me design and organize my
            components better, use them for my projects, and publish them for my
            team members to use!”
          </p>
          <div css={FaqStyles}>
            <h2>FAQs</h2>
            <div>
              Are interaction recipes and libraries available for all plans?
            </div>
            <div>Can I share my interaction recipes with any stakeholders?</div>
            <div>
              What makes the libraries in ProtoPie different from the ones in
              Figma, Sketch or Adobe XD?
            </div>
            <div>How do I share my interaction libraries with others?</div>
          </div>

          <div>
            <h4>Plan comparison</h4>
            <p>Check out which particular plan is right for you.</p>
            <a href="#a">See Plan Comparison</a>
          </div>
          <div>
            <h4>Need more help?</h4>
            <p>
              Get in touch and we’ll respond to any questions that you have.
            </p>
            <a href="#a">Contact Us</a>
          </div>
        </section>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
