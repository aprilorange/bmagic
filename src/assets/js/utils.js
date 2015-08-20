let _ = {}

_.init = () => {
  console.log('init')
}

_.url = () => {
  return location.pathname.substring(1).split('/')
}

_.topPath = () => {
  return _.url()[0]
}

export default _