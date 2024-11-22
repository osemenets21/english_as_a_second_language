import React from 'react';



const ApproachSection = () => {
  const features = [
    {
      title: 'Personalized Learning',
      description:
        'Our programs are customized to your company\'s specific language goals ' ,
      icon: require('../images/personalized_learning.svg').default,
    },
    {
      title: 'Skilled English Language Instructors',
      description:
        'Professionals with 3+ years experience, strong English skills, and broad teaching experience',
      icon: require('../images/eng_instructors.svg').default,
    },
    {
      title: 'Global Teaching Team',
      description:
        'Connect with a diverse team of educators for a global perspective',
      icon: require('../images/global_teaching.svg').default,
    },
    {
      title: 'User-Friendly Platform',
      description:
        "Whether you're studying independently or with a teacher, our intuitive platform hosts all materials, ensuring a seamless experience as you learn languages at your own pace",
      icon: require('../images/user_platform.svg').default,
    },
    {
      title: 'Extensive Program Offerings',
      description:
        'Select from a wide variety of 50+ English courses (General, Business, and Specialized) or dive into other languages like German, French, Spanish, and Chinese.',
      icon: require('../images/diverse_programs.svg').default,
    },
  ];

  return (
    <div id='container-gray-bg'>
      <div className="approach-section">
      <h2 className="approach-section__title"><span>Why Our Method</span> Stands Out</h2>
      <div className="approach-section__features">
        {features.map((feature, index) => (
          <div className="feature" key={index}>
            <img src={feature.icon} alt={feature.title} className="feature__icon" />
            <h3 className="feature__title">{feature.title}</h3>
            <p className="feature__description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>

    
  );
};

export default ApproachSection;
