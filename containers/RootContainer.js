import { connect } from 'react-redux'
import { spellsFetchData } from 'actions/spells'
import Root from 'components/Root'

const mapDispatchToProps = dispatch => ({
    load: () => dispatch(spellsFetchData('/api/v1/spells'))
})

export default connect(null, mapDispatchToProps)(Root)
