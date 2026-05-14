import React from 'react';
import Desktop from './components/Desktop';

const profileData = {
  name: 'Jadon Geathers',
  title: 'Information Science PhD Student, Cornell University',
  email: 'jag569@cornell.edu',
  links: {
    linkedin: 'https://linkedin.com/in/jadongeathers',
    scholar: 'https://scholar.google.com/citations?user=jadongeathers',
    github: 'https://github.com/jadongeathers',
  },
  profileImage: 'images/professional_headshot.jpg',
};

const App = () => <Desktop profileData={profileData} />;

export default App;
