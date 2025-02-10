class appController{
  static getHome(request, response) {
    response.status(200).json('Hello ALX!')
  }
}

module.exports = appController;
