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
import { Helmet } from 'react-helmet';



function App() {

  return (
    <div className="App">
      <Helmet>
        <title>The Little Jewels Kindergarten - Nurturing Young Minds in Nagpur</title>
        <meta name="description" content="Embark on a delightful journey with The Little Jewels Kindergarten, a cherished institution nestled in the heart of Nagpur. As a proud feeder of Jain International School, our enchanting space is more than a kindergarten—it's a haven filled with love and warmth, dedicated to fostering the physical, mental, emotional, cognitive, and social growth of every young mind.

        At The Little Jewels, we transcend traditional education. We're more than a school; we're a home where laughter echoes in every corner, and curiosity is the guiding star. Managed by the venerable Sir Shantilal Badjate Charitable Trust, our legacy extends to Jain International School, Nagpur (a CBSE School), and S. B. Jain Institute of Technology, Management & Research.

        Our mission is to inspire children to become self-disciplined, innovative, caring, tolerant, honest, and friendly individuals. We've meticulously crafted a secure and joyous learning environment where well-trained and supportive teachers guide students with attention. Our child-friendly infrastructure boasts up-to-date facilities, interactive boards, and a hygienic ambiance.

        Experience play-way learning, engaging co-curricular activities, and smart classes that make education a captivating adventure. The Little Jewels Kindergarten is more than an institution; it's a promise of holistic development, creativity, and a lifetime of cherished memories.

        Come, join us, and let your child's journey of discovery and growth begin at The Little Jewels Kindergarten." />
        <meta name="keywords" content="Little Jewels Kindergarten, Nagpur, Jain International School, Child Development, Play-way Learning, Holistic Education" />
        <meta name="author" content="Virus1260, Shekhar Mishra" />

        {/* Google Tag Manager script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZYFTB6XCD2"></script>
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZYFTB6XCD2');
        `}
        </script>
        
      </Helmet>

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
