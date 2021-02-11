const size = {
  tabletPortrait: "600px",
  tabletLandscape: "900px",
  desktop: "1200px",
  bigDesktop: "1800px",
};

const device = {
  tabletPortrait: `(min-width: ${size.tabletPortrait})`,
  tabletLandscape: `(min-width: ${size.tabletLandscape})`,
  desktop: `(min-width: ${size.desktop})`,
  bigDesktop: `(min-width: ${size.bigDesktop})`,
};

export default device;
