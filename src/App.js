/** @jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import logo from './images/logo.png';
import sarah from './images/sarah.png';
import fredo from './images/fredo.png';
import tony from './images/tony.png';
import toggleslider from './images/toggleslider.png';
import togglespinner from './images/togglespinner.png';
import publiclibraries from './images/publiclibraries.png';
import material from './images/material.png';
import folder from './images/folder.png';
import files from './images/files.png';
import downloads from './images/downloads.png';
import spinne from './images/spinne.png';
import togglevideo from './images/togglevideo.mp4';
import video2 from './images/video2.mp4';
import video3 from './images/video3.mp4';
import video4 from './images/video4.mp4';
import React from 'react';

function App() {
  return (
    <>
      <header>
        <a href="#a">
          <img src={logo} alt="logo"></img>Protopie
        </a>
        <a href="#a">Discover</a>
        <a href="#a">Learn</a>
        <a href="#a">Plans</a>
        <a href="#a">Solutions</a>
        <a href="#a">Support</a>
        <button>Try for free</button>
      </header>

      <main>
        <section>
          <h1>ProtoPie 5.0 The future of interactive prototyping</h1>
          <p>
            The next chapter of digital design is here, with productivity boosts
            that will change the way your team work and how you collaborate
            forever.
          </p>
          <button>Subscribe to Team Plan</button>
          <video src={togglevideo}></video>
        </section>
        <section>
          <h2>
            5.0 Launch Event: Introducing Interaction recipes & Interaction
            libraries
          </h2>
          <p>
            Hear about the inspiration behind Interaction recipes & Interaction
            libraries, ProtoPie's vision and the future beyond ProtoPie 5.0. In
            this launch event, we cover all this while answering some of the
            burning questions viewers had.
          </p>
          <button>Watch Now</button>
          <div>
            <div>
              <img src={tony} alt=""></img>
              <div>Tony Kim</div>
              <div>CEO & Co-founder</div>
            </div>
            <div>
              <img src={fredo} alt=""></img>
              <div>Fredo Tan</div>
              <div>Head of Customer Successe</div>
            </div>
            <div>
              <img src={sarah} alt=""></img>
              <div>Sarah Sehee Lim</div>
              <div>Lead Product Designer</div>
            </div>
          </div>
        </section>
        <section>
          <div>Team & Enterprise plan only</div>
          <h2>Interaction recipes</h2>
          <p>
            This is so much more than a handoff. Now you can record and share
            your interaction designs with full, visual documentation—every
            action, detail, and spec. Protect your design vision and keep
            everyone on the same page.
          </p>
          <button>Learn More</button>
          <h3>Any interactions, any user journey</h3>
          <p>
            Record and share as few or as many interactions as you need to give
            teammates the right guidance and understanding of your prototypes.
          </p>
          <video src={video2}></video>
          <h3>There’s nothing to explain</h3>
          <p>
            With Interaction recipes, your prototype speaks for itself,
            highlighting every interaction’s precise specs for developers. No
            more explainer decks.
          </p>
          <video src={video3}></video>
          <h3>It’s all in the timeline</h3>
          <p>
            The clearest handoff tool you’ve ever seen, Interaction recipes
            allow you to scrub through an entire prototype and pull just the
            details you need for specific interactions.
          </p>
          <video src={video4}></video>
        </section>
        <section>
          <h2>Interaction libraries</h2>
          <p>
            Now you can seamlessly pull from your team’s design systems, saving
            time and ensuring consistency. You can build custom libraries for
            your own team, allowing you to design interactions once and use them
            infinitely across your organization.
          </p>
          <button>Learn More</button>
          <h3>Save your most frequently used interactions</h3>
          <p>
            Add dynamic interactions to your team’s libraries and make them
            instantly reusable by everyone. Say hello to quicker, more
            consistent and more productive prototyping.
          </p>
          <img src={togglespinner} alt=""></img>
          <h3>Focus on designing, not redesigning</h3>
          <p>
            With interaction libraries, there’s no more time wasted redesigning
            existing assets. Now your whole team always works as one team.
          </p>
          <img src={toggleslider} alt=""></img>
          <h3>iOS and Material Design UI, effortlessly</h3>
          <p>
            Instantly use the industries’ most popular design systems right
            away. Browse and select standard interactions to use in your
            prototype, and get back to designing your vision.
          </p>
          <img src={publiclibraries} alt=""></img>
        </section>
        <section>
          <h2>3 library types to suit your workflow</h2>
          <div>
            <img src={material} alt=""></img>
            <h4>Public libraries</h4>
            <p>Pull from leading design systems. (For all ProtoPie plans)</p>
          </div>
          <div>
            <img src={folder} alt=""></img>
            <h4>Personal libraries</h4>
            <p>
              Privately build and save the interactions you use the most. (For
              all ProtoPie plans)
            </p>
          </div>
          <div>
            <img src={files} alt=""></img>
            <h4>Team libraries</h4>
            <p>
              Build and collaborate with fully custom design system libraries
              (For Team & Enterprise plans)
            </p>
          </div>
        </section>
        <section>
          <h2>5.0 Features Workshop</h2>
          <p>
            Leah, our ProtoPie teacher, hosted online workshops that will turn
            anyone into ProtoPie 5.0 power users. Watch the videos to learn more
            about how to use these productivity boosting features.
          </p>
          <div>
            <img src={downloads} alt=""></img>
            <h4>Interaction recipes</h4>
            <p>
              Save time for designers & developers. Make communication
              effortless, straight forward.
            </p>
            <button>Watch Now to Learn</button>
          </div>
          <div>
            <img src={spinne} alt=""></img>
            <h4>Interaction libraries</h4>
            <p>
              Make your own interaction design system. Keep interactions consist
              & eliminate redundancy.
            </p>
            <button>Watch Now to Learn</button>
          </div>
        </section>
        <section>
          <h2>Additional resources</h2>
          <p>
            Further information to help get you up and running with ProtoPie
            5.0.
          </p>
          <div>
            <h4>5.0 features in detail</h4>
            <p>Find out more about ProtoPie 5.0 features</p>
            <a href="#a">Learn More</a>
          </div>
          <div>
            <h4>Update your Studio</h4>
            <p>Download the new and improved ProtoPie Studio 5.0.</p>
            <a href="#a">Download Now</a>
          </div>
        </section>
        <section></section>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
