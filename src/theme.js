import { grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';

const theme = deepMerge(grommet, {
  global: {
    active: {
      background: {
        opacity: "none",
      },
      padding: 0,
    },
    colors: {
      // background: '#5BE6AE',
      background: 'white',
      brand: '#5BE6AE',
      text: '#56536A',
      border: 'light-5',
      placeholder: 'light-4',
      'status-error': '#e36262',
      'status-warning': '#FBBD51',
      'brand-contrast': '#F2B044',
    },
    breakpoints: {
      small: {
        value: 768,
        edgeSize: {
          xsmall: '6px',
          small: '12px',
          medium: '16px',
          large: '22px',
        },
      },
    },
    control: {
      border: {
        radius: '6px',
      },
    },
    focus: {
      border: {
        color: 'transparent',
      },
      outline: {
         color: 'transparent',
      }, 
    },
    font: {
      family: '"Lato", sans-serif',
      size: '16px',
      face: `
        /* latin-ext */
        @font-face {
          font-family: 'Lato';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: local('Lato Light'), local('Lato-Light'), url(https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Lato';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: local('Lato Light'), local('Lato-Light'), url(https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Lato';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Lato';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wXiWtFCc.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Lato';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Lato';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }        
      `,
    },
  },
  icon: {
    size: {
      small: '16px',
      medium: '24px',
      large: '30px',
      xlarge: '96px',
    },
  },
  text: {
    small: {
      size: '14px',
    },
    medium: {
      size: '16px',
    },
    large: {
      size: '18px',
    },
    xlarge: {
      size: '20px',
    },
  },
  avatar: {
    size: {
      small: '48px',
      medium: '96px',
      large: '116px',
      xlarge: '156px',
    },
  },
  button: {
    color: "white",
    primary: {
      border: {
        radius: '6px',
      },
      padding: '10px',
      background: { color: 'brand' },
      color: 'white',
      opacity: 0,
    },
    secondary: {
      border: {
        radius: '15px',
        width: '2px',
        color: '#F07F7F',
        opacity: 0,
      },
      background: '#F07F7F',
      color: 'white',  
      padding: '10px',
    },
    default: {
      border: {
        radius: '6px',
      },
      background: 'transparent',
      color: '#9A9ACE',
      padding: '10px',
    },
  },
  fileInput: {
    border: 'bottom',
    pad: 'xxsmall',
  },
  radioButton: {
    hover: {
      border: {
        color: 'transparent',
      },
    },
  },
  select: {
    control: {
      extend: 'width: 100%'   
    },
  },
});

export default theme;
