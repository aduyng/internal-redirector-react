export default theme => ({
  root: {
    padding: theme.spacing.unit * 3
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  column: {
    flexBasis: '33.33%',
  },
  // footerButtons: {
  //   justifyContent: 'space-between',
  //   display: 'flex'
  // },
  // rightButtonGroup: {
  //   marginLeft: 'auto'
  // }
});
