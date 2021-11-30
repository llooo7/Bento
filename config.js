// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: '',
  imageBackground: true,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning',
  greetingAfternoon: 'Good afternoon',
  greetingEvening: 'Good evening',
  greetingNight: 'Go to Sleep',

  // Weather
  weatherKey: '6e97e784135bf28f4aacfa9cae2444af',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '46.4',
  defaultLongitude: '15.55',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/mail/u/0/#inbox',
    },
    {
      id: '3',
      name: 'Keep',
      icon: 'trello',
      link: 'https://keep.google.com/u/0/',
    },
    {
      id: '4',
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://calendar.google.com/calendar/r',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'glasses',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'Odysee',
      icon: 'youtube',
      link: 'https://www.youtube.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'music',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Playlist',
        link: 'https://open.spotify.com/playlist/3AN9nyLIdSGcU4dFtKFA4b?si=5eada916970446e6',
      },
      {
        name: 'Spacewave',
        link: 'https://open.spotify.com/playlist/4sgUux9hmykyWYmVoe4W6p?si=4c4940920e424fce',
      },
      {
        name: 'Chill',
        link: 'https://open.spotify.com/playlist/3I4X0MKKpQ4bmSixKTZMJW?si=6c45708b0b424cd6',
      },
      {
        name: 'Discover',
        link: 'https://open.spotify.com/playlist/37i9dQZEVXcWan9v8FVnLv?si=f791bc923cb14612',
      },
      {
        name: 'Lofi',
        link: 'https://open.spotify.com/playlist/0vvXsWCC9xrXsKd4FyS8kM?si=f3de3612c88a48d4',
      },
      
    ],
    secondList: [
      {
        name: 'Maps',
        link: 'https://www.google.com/maps',
      },
      {
        name: 'Desmos',
        link: 'https://www.desmos.com/calculator',
      },
      {
        name: 'OctoPrint',
        link: 'https://dribbble.com',
      },
      {
        name: 'Photos',
        link: 'https://photos.google.com/',
      },
      {
        name: 'Messenger',
        link: 'https://www.messenger.com/',
      },
    ],
  },
};
