export default theme => ({
  root: {
    width: '100%',
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
  footerButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  rightButtonGroup: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});
