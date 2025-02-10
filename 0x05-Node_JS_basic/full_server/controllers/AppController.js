class appController{
  static getHomepage(request, response) {
    response.status(200).json('Hello ALX!')
  }
}

module.exports = appController;
