class AppError extends Error {
    constructor(httpCode, msg, ...params) {
  
      super(...params);
  
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, AppError);
      }
  
      this.code = httpCode;
      this.error = msg || 'Ha ocurrido un error inesperado';
    }
  }
  
  module.exports = AppError;