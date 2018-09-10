export default theme => ({
  root: {
    marginRight: theme.spacing.unit,
    position: 'relative',
    whiteSpace: 'nowrap'
  },
  logo: {
    display: 'inline-block',
  },
  version: {
    display: 'inline-block',
    float: 'right',
    color: theme.palette.common.white,
  },
  name: {
    display: 'inline-block'
  }
});
