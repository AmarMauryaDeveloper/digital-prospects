import React from 'react'
import Hero from './Hero';
import Testimonials from './Testimonials.jsx';
import HireGuide from './HireGuide.jsx';
import HiringProcess from './HiringProcess.jsx';
import TrustSection from './TrustSection.jsx';
import WhyHireDevelopers from './WhyHireDevelopers.jsx';
import HireDevelopersSection from './HireDevelopersSection.jsx';

export default function Home() {
  return (
    <div className='pt-20'>
<Hero/>
<HireDevelopersSection/>
<WhyHireDevelopers/>
<TrustSection/>
<HiringProcess/>
<HireGuide/>
<Testimonials/>
    </div>
  )
}
