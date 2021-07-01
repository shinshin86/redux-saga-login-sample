import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const styles = {
  root: {
    flexGrow: 1,
  },
}

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: '2.4rem',
    },
  },
})

const Header = (props) => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <ThemeProvider theme={theme}>
            <Typography variant="h1">Redux Sage Login Sample</Typography>
          </ThemeProvider>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
