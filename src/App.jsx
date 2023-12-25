import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Popup from './Popup';
import Navbar from './components/Navbar';
import { Home, Academics, BadjateGroup } from './components/pages';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import VisionMission from './components/pages/About_Us/VisionMission';
import Teams from './components/pages/About_Us/Teams';
import Director from './components/pages/About_Us/Director';
import Management from './components/pages/About_Us/Management';
import Video from './components/pages/Gallery/Video';
import EventGallery from './components/pages/Gallery/EventGallery';
import CelebrationsGalary from './components/pages/Gallery/CelebrationsGalary';
import AchievementsGallery from './components/pages/Gallery/AchievementsGallery';
import MediaCoverageGallery from './components/pages/Gallery/MediaCoverageGallery';
import Program from './components/pages/programcomponent/Program';
import './App.css';
import SportsAndWellness from './components/pages/Gallery/SportsAndWellness';
import ScrollToTop from './components/ScrollToTop';
import MediaLinks from './components/pages/Media_Links/MediaLinks';
import { Toaster } from 'react-hot-toast';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

// import ReactGA from 'react-ga';
// const TRACKING_ID = "G-ZYFTB6XCD2"; // OUR_TRACKING_ID
// ReactGA.initialize(TRACKING_ID);


function App() {

    return (
      <div className="App">
        <Popup />
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about/vision&mission" element={<VisionMission />} />
          <Route path="/about/director-message" element={<Director />} />
          <Route path="/about/management" element={<Management />} />
          <Route path="/about/teams" element={<Teams />} />
          <Route path="/gallery/video" element={<Video />} />
          <Route path="/gallery/events" element={<EventGallery />} />
          <Route path="/gallery/celebrations" element={<CelebrationsGalary />} />
          <Route path="/gallery/achievements" element={<AchievementsGallery />} />
          <Route
            path="/gallery/sportsandwellness"
            element={<SportsAndWellness />}
          />
          <Route path="/gallery/media" element={<MediaCoverageGallery />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admission/admission-guidelines" element={<Program />} />
          <Route path="/badjate-group" element={<BadjateGroup />} />
          <Route path="/program" element={<Program />} />
        </Routes>
        <MediaLinks />
        <Footer />
        <Toaster position="top-right" reverseOrder={false} />
        <SpeedInsights />
        <Analytics />
      </div>
    );
  }

  export default App;
