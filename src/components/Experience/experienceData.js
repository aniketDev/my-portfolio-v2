const getDuration = date => {
  const currentDate = new Date();
  const providedDate = new Date(date);
  const year = currentDate.getFullYear() - providedDate.getFullYear();
  const month = Math.abs(currentDate.getMonth() - providedDate.getMonth());
  return `${year} year ${month} ${month > 1 ? 'months' : 'month'}`;
};

export const experienceData = [
  {
    headerTitle: 'Software Engineer',
    headerSubtitle1: 'March 2020 - Present',
    headerSubtitle2: getDuration('16-March-2020'),
    icon: 'briefcase',
    contentTitle: 'Valtech India Systems Pvt. Ltd., Bangalore',
    contentLists: [
      'Developing ZEE5 PWA using React & Redux.',
      'Fixing bug and implementing new features as part of ZEE5 web app project'
    ]
  },
  {
    headerTitle: 'Software Engineer',
    headerSubtitle1: 'March 2019 - Feb 2020',
    headerSubtitle2: '1 year',
    icon: 'briefcase',
    contentTitle: 'PrimeSoft IP Solutions Pvt. Ltd., Bangalore',
    contentLists: [
      'Developing web application using Angular 5.',
      'Developing hybrid mobile application of a banking project using Ionic 3.',
      'Developing web application using react js and redux.'
    ]
  },
  {
    headerTitle: 'Junior Software Developer',
    headerSubtitle1: 'March 2018 - Feb 2019',
    headerSubtitle2: '1 year',
    icon: 'briefcase',
    contentTitle: 'Balihans Software Pvt. Ltd., Bangalore',
    contentLists: [
      "Single-handedly designing and developing the front-end part of the company's own product which is a web application software called Qnabu, leading career management and school automation tool.",
      'Design websites, layouts, web app interfaces and more.',
      'Researching different software programs and libraries.',
      'Maintaining software documentation.'
    ]
  },
  {
    headerTitle: 'Project Coordinator',
    headerSubtitle1: 'Aug 2017 - Nov 2017',
    headerSubtitle2: '4 months',
    icon: 'briefcase',
    contentTitle: 'Innova Uniﬁed Management Services Pvt. Ltd., Kolkata',
    contentLists: [
      'Manually test any project software or application.',
      'Manage all the ongoing projects by keeping detailed project notes and records.',
      'Keeping all the members of the team up-to-date with current information and paperwork.',
      'Communicating with team members to ensure optimal strategy and maximum eﬃciency.'
    ]
  }
];
