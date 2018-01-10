var serverError = {
  get(message, jsonErrors) {

    let errorObject = {
      errors: {}
    }

    if (jsonErrors !== undefined && jsonErrors !== null) {
      errorObject.errors = jsonErrors
    }
    
    errorObject.errors.summary = {
      msg: message,
    }

    return errorObject
  }
}

// Errors object example:
// {
//     "errors": {
//         "name":{"location":"body","param":"name","value":"","msg":"Invalid value"},
//         "title":{"location":"body","param":"title","value":"","msg":"Invalid value"}
//     }
// }


module.exports = serverError;