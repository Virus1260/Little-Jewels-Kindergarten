import React from "react";
import "./Home.css";
import { HomeMain } from "./Home/HomeMain";
import Testimonial from "./Home/Testimonals";
import { HomeAbout } from "./Home/HomeAbout";
import Program from "./programcomponent/Program";
import { Helmet } from 'react-helmet';

export const Home = () => {
  return (
    <div>

      <Helmet>
        <title>The Little Jewels Kindergarten - Nurturing Young Minds in Nagpur</title>
        <meta name="description" content="Embark on a delightful journey with The Little Jewels Kindergarten, a cherished institution nestled in the heart of Nagpur. As a proud feeder of Jain International School, our enchanting space is more than a kindergarten—it's a haven filled with love and warmth, dedicated to fostering the physical, mental, emotional, cognitive, and social growth of every young mind.

          At The Little Jewels, we transcend traditional education. We're more than a school; we're a home where laughter echoes in every corner, and curiosity is the guiding star. Managed by the venerable Sir Shantilal Badjate Charitable Trust, our legacy extends to Jain International School, Nagpur (a CBSE School), and S. B. Jain Institute of Technology, Management & Research.

          Our mission is to inspire children to become self-disciplined, innovative, caring, tolerant, honest, and friendly individuals. We've meticulously crafted a secure and joyous learning environment where well-trained and supportive teachers guide students with attention. Our child-friendly infrastructure boasts up-to-date facilities, interactive boards, and a hygienic ambiance.

          Experience play-way learning, engaging co-curricular activities, and smart classes that make education a captivating adventure. The Little Jewels Kindergarten is more than an institution; it's a promise of holistic development, creativity, and a lifetime of cherished memories.

          Come, join us, and let your child's journey of discovery and growth begin at The Little Jewels Kindergarten." />
        <meta name="keywords" content="Little Jewels Kindergarten, Nagpur, Jain International School, Child Development, Play-way Learning, Holistic Education" />
        <meta name="author" content="Virus1260, Shekhar Mishra" />
      </Helmet>


      <HomeMain />
      <HomeAbout />
      <Program />
      <Testimonial />
    </div>
  );
};
