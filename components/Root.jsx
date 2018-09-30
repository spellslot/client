import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { css } from 'react-emotion'
import Navigation from 'components/Navigation'
import RootSpells from 'components/Spells'
import RootSpellbook from 'components/Spellbook'
import Footer from 'components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'styles/app.css'

const content = css`
    min-height: calc(100vh - 2rem - 20px - 13.7rem)
`

class Root extends Component {
    componentDidMount() {
        this.props.load()
    }

    render() {
        return (
            <Provider store={ this.props.store }>
                <div>
                    <BrowserRouter>
                        <div>
                            <Navigation />
                            <div className={ content }>
                                <Switch>
                                    <Route path="/spellbook" component={ RootSpellbook } />
                                    <Route path="/" component={ RootSpells } />
                                </Switch>
                            </div>
                            <Footer />
                        </div>
                    </BrowserRouter>
                </div>
            </Provider>
        )
    }
}

Root.propTypes = {
    load: PropTypes.func
}

export default Root
