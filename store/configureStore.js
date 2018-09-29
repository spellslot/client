module.exports = process.env.NODE_ENV === 'production' ? // eslint-disable-line
    require('./configureStore.prod') :
    require('./configureStore.dev')
