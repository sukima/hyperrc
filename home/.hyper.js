// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

// Solarized Dark
// Stolen from https://github.com/ghosh/hyper-solarized-dark/blob/master/index.js
// till https://github.com/ghosh/hyper-solarized-dark/pull/17 merges
// >>>>>>>>> BEGIN SOLARIZED <<<<<<<<<
const backgroundImage = '/home/suki/.hyper_plugins/terminal-background.jpg';
const termColor = 'rgba(0, 43, 54, 0.8)';
const backgroundColor = '#002b36';
const foregroundColor = '#839496';
const cursorColor = 'rgba(181, 137, 0, 0.6)';
const borderColor = 'transparent';

const colors = {
  lightBlack:     '#002B36',
  black:          '#073642',
  lightGreen:     '#586e75',
  lightYellow:    '#657b83',
  lightBlue:      '#839496',
  lightCyan:      '#93a1a1',
  white:          '#eee8d5',
  lightWhite:     '#fdf6e3',
  yellow:         '#b58900',
  lightRed:       '#cb4b16',
  red:            '#dc322f',
  magenta:        '#d33682',
  lightMagenta:   '#6c71c4',
  blue:           '#268bd2',
  cyan:           '#2aa198',
  green:          '#859900'
};

module.exports = {
  config: {
    // choose either `'stable'` for receiving highly polished,
    // or `'canary'` for less polished but more frequent updates
    updateChannel: 'stable',

    // default font size in pixels for all tabs
    fontSize: 18,

    // font family with optional fallbacks
    fontFamily: 'mononoki, Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',

    // default font weight: 'normal' or 'bold'
    fontWeight: 'normal',

    // font weight for bold characters: 'normal' or 'bold'
    fontWeightBold: 'bold',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    // cursorColor: 'rgba(248,28,229,0.8)',
    cursorColor,

    // terminal text color under BLOCK cursor
    cursorAccentColor: '#000',

    // `'BEAM'` for |, `'UNDERLINE'` for _, `'BLOCK'` for █
    cursorShape: 'BLOCK',

    // set to `true` (without backticks and without quotes) for blinking cursor
    cursorBlink: false,

    // color of the text
    // foregroundColor: '#fff',
    foregroundColor,

    // terminal background color
    // opacity is only supported on macOS
    // backgroundColor: '#000',
    backgroundColor: 'transparent',

    // terminal selection color
    selectionColor: 'rgba(248,28,229,0.3)',

    // border color (window, tabs)
    // borderColor: '#333',
    borderColor: termColor,

    // custom CSS to embed in the main window
    // css: `
    //   .terms_terms {
    //     background-image: url("file:///Users/dweaver/Pictures/background-images-of-waterfalls-23.jpg");
    //     background-position: center;
    //     background-size: contain;
    //     background-repeat: no-repeat;
    //   }
    //   .terms_termGroup {
    //     background: rgba(0, 0, 0, 0.6) !important;
    //   }
    // `,

    css: `
      * {
      	text-rendering: optimizeLegibility;
        font-weight: 500;
      }
      .header_windowHeader {
        background-color: ${termColor};
      }
      .tabs_list {
      	border: 0;
      }
      .tabs_nav {
      	background-color: #001f27;
      }
      .tab_tab {
        color: ${foregroundColor};
        background-color: #001f27;
        border-color: ${borderColor};
      }
      .tab_tab:before {
      	border: 0;
      }
      .tab_tab.tab_active {
        border: transparent;
        font-weight: bold;
        color: #b3b3b3;
        background-color: ${backgroundColor};
      }
      .splitpane_divider {
      	background-color: #001f27;
      }
      .hyper_main {
        background: url(file://${backgroundImage}) center;
        background-size: cover;
      }
      .terms_terms {
        background-color: ${termColor};
      }
    `,

    // custom CSS to embed in the terminal window
    // termCSS: `
    //   x-screen: {
    //     background: rgba(0, 0, 0, 0.6) !important;
    //   }
    // `,

    // if you're using a Linux setup which show native menus, set to false
    // default: `true` on Linux, `true` on Windows, ignored on macOS
    showHamburgerMenu: '',

    // set to `false` (without backticks and without quotes) if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` (without backticks and without quotes) on Windows and Linux, ignored on macOS
    showWindowControls: '',

    // custom padding (CSS format, i.e.: `top right bottom left`)
    padding: '0',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    // colors: {
    //   black: '#000000',
    //   red: '#C51E14',
    //   green: '#1DC121',
    //   yellow: '#C7C329',
    //   blue: '#0A2FC4',
    //   magenta: '#C839C5',
    //   cyan: '#20C5C6',
    //   white: '#C7C7C7',
    //   lightBlack: '#686868',
    //   lightRed: '#FD6F6B',
    //   lightGreen: '#67F86F',
    //   lightYellow: '#FFFA72',
    //   lightBlue: '#6A76FB',
    //   lightMagenta: '#FD7CFC',
    //   lightCyan: '#68FDFE',
    //   lightWhite: '#FFFFFF',
    // },
    colors,

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    //
    // Windows
    // - Make sure to use a full path if the binary name doesn't work
    // - Remove `--login` in shellArgs
    //
    // Bash on Windows
    // - Example: `C:\\Windows\\System32\\bash.exe`
    //
    // PowerShell on Windows
    // - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
    shell: '',

    // for setting shell arguments (i.e. for using interactive shellArgs: `['-i']`)
    // by default `['--login']` will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {},

    // set to `false` for no bell
    bell: 'SOUND',

    // if `true` (without backticks and without quotes), selected text will automatically be copied to the clipboard
    copyOnSelect: false,

    // if `true` (without backticks and without quotes), hyper will be set as the default protocol client for SSH
    defaultSSHApp: true,

    // if `true` (without backticks and without quotes), on right click selected text will be copied or pasted if no
    // selection is present (`true` by default on Windows and disables the context menu feature)
    // quickEdit: true,

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // for advanced config flags please refer to https://hyper.is/#cfg
    backgroundImage,
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    // "hyper-background",
    "hyperminimal",
    "hyper-emoji",
    "hyperfull",
    "hyperlinks",
    "hyper-quit",
  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: [],

  keymaps: {
    // Example
    // 'window:devtools': 'cmd+alt+o',
  },
};
