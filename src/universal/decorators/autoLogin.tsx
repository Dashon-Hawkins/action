import React, {Component} from 'react'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import withAtmosphere, {
  WithAtmosphereProps
} from 'universal/decorators/withAtmosphere/withAtmosphere'

export interface AutoLoginPropsProps extends WithAtmosphereProps, RouteComponentProps<{}> {}

const autoLogin = (ComposedComponent: React.ComponentType<any>) => {
  class AutoLogin extends Component<AutoLoginPropsProps> {
    constructor (props: AutoLoginPropsProps) {
      super(props)
      const {
        atmosphere: {authObj},
        history,
        location
      } = props
      const {search} = location
      if (authObj) {
        const isNew = !authObj.tms
        if (isNew) {
          if (window.location.pathname !== '/welcome') {
            history.push('/welcome')
            this.redir = true
          }
        } else {
          const nextUrl = new URLSearchParams(search).get('redirectTo') || '/me'
          history.push(nextUrl)
          this.redir = true
        }
      }
    }

    redir: boolean = false

    render () {
      if (this.redir) return null
      return <ComposedComponent {...this.props} />
    }
  }

  return withRouter(withAtmosphere(AutoLogin))
}

export default autoLogin
