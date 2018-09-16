export default theme => ({
  root: {
    width: '100%',
    flex: 1,
    flexDirection: 'column'
  },
  rules: {
    display: 'flex',
    flex: 1,
    marginTop: theme.spacing.unit * 2
  },
  ruleInputs: {
    flexDirection: 'column'
  }
});
