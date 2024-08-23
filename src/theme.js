import { experimental_extendTheme as extendTheme } from "@mui/material";

const APP_BAR_HEIGHT = '78px'

const theme = extendTheme({
  // app: {
  //   header: {
  //     height: APP_BAR_HEIGHT,
  //   },
  //   drawer: {
  //     width: 240,
  //     widthCollapsed: 64,
  //   }
  // },
  // colorSchemes: {
  //   dark: {
  //     palette: {
  //       background: {
  //         default: '#121212FF',
  //         paper: 'rgba(25,29,30,0.8)'
  //       },
  //       primary: {
  //         main: 'rgb(255,255,255)',
  //       },
  //       headerBackground: 'rgba(18,18,18,0.7)',
  //       // questionBackground: 'rgba(57,57,57,0.7)',
  //       questionBackground: {
  //         primary: '#1D2128FF',
  //         secondary: '#2A2D35FF',
  //       },
  //       sectionBackground: {
  //         primary: '#121212FF',
  //         secondary: '#1D2128FF',
  //       },
  //       border: '#fff',
  //       boxShadow: '0 0 10px 0 rgba(255,255,255, 0.1)',
  //       text: {
  //         primary: '#E2E2E2FF',
  //         secondary: '#DFDFDFFF'
  //       }
  //     }
  //   },
  //   light: {
  //     palette: {
  //       background: {
  //         default: '#FFFFFFFF',
  //         paper: 'rgba(245,245,245,0.8)'
  //       },
  //       primary: {
  //         main: 'rgba(25,29,30,0.84)',
  //       },
  //       secondary: {
  //         main: 'rgba(25,29,30,0.84)',
  //       },
  //       headerBackground: 'rgba(255,255,255,0.7)',
  //       questionBackground: {
  //         primary: '#F2F7FDFF',
  //         secondary: '#DEE1E6FF',
  //       },
  //       sectionBackground: {
  //         primary: '#FFFFFFFF',
  //         secondary: '#F3F4F6FF',
  //       },
  //       border: 'rgba(25,29,30,0.35)',
  //       boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.4)',
  //       text: {
  //         primary: '#171A1FFF',
  //         secondary: '#1A4E8DFF'
  //       }
  //     }
  //   }
  // },
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: {
  //       body: {
  //         '*::-webkit-scrollbar': {
  //           width: '8px',
  //           height: '8px'
  //         },
  //         '*::-webkit-scrollbar-thumb': {
  //           backgroundColor: '#dcdde1',
  //           borderRadius: '8px'
  //         },
  //         '*::-webkit-scrollbar-thumb:hover': {
  //           backgroundColor: 'white',
  //           borderRadius: '8px'
  //         }
  //       }
  //     }
  //   },
  //   MuiMenu: {
  //     styleOverrides: {
  //       paper: {
  //         backdropFilter: 'blur(10px)',
  //         backgroundImage: 'none',
  //         borderRadius: '8px',
  //       },
  //     }
  //   },
  // },
  // typography: {
  //   fontFamily: 'Be Vietnam Pro, sans-serif',
  //   button: {
  //     textTransform: 'none',
  //     fontSize: '1rem'
  //   }
  // }
})

export default theme;