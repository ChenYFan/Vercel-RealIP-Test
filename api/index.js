let request


module.exports = async (requestArg, responseArg) => {
  request = requestArg
  response = responseArg
  res = {
    ip:request.headers['x-real-ip']
  }
  response.status(200).json(res)
}
