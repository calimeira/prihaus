import React from 'react';
import Lottie from 'react-lottie';
import './Services.css';

import visualIDAnimation from '../../../effects/animations/visualID.json';
import softwareDevelopmentAnimation from '../../../effects/animations/softwareDev.json';
import talentAcquisitionAnimation from '../../../effects/animations/talent.json';
import logisticsAnimation from '../../../effects/animations/logistic.json';
import entertainmentAnimation from '../../../effects/animations/events.json';

const Services = () => {
const services = [
    {
        title: 'Visual ID',
        description: 'Design and development of your brand\'s visual identity.',
        animationData: visualIDAnimation,
    },
    {
        title: 'Software Development',
        description: 'Development of specific applications and tools.',
        animationData: softwareDevelopmentAnimation,
    },
    {
        title: 'Talent Acquisition',
        description: 'Recruitment, coaching, sales development, and team building workshops.',
        animationData: talentAcquisitionAnimation,
    },
    {
        title: 'Logistics',
        description: 'Logistics solutions for your company.',
        animationData: logisticsAnimation,
    },
    {
        title: 'Entertainment',
        description: 'Production and management of entertainment events.',
        animationData: entertainmentAnimation,
    },
];

  return (
    <section className="services">
      <h2>What we do?</h2>
        <p>Ideas. Design Thinking. Implementation.Revenue Generation/Profit</p>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="lottie-container">
              <Lottie options={{ loop: true, autoplay: true, animationData: service.animationData }} height={150} width={150} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;