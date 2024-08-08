const ResponseHelper = {
    STATUS_CODES: {
        OK: 200,
        NO_CONTENT: 204,
        CREATED: 201,
        DELETED: 204,
        NOT_FOUND: 404,
        INTERNAL_ERROR: 500,
        FORBIDDEN: 403,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401
    },
  
    async getResponse (res, serviceFunction = null, params = [], status = null) {
      try {
        const result = serviceFunction ? await serviceFunction(...params) : null;
        const finalStatus = status ?? (result ? this.STATUS_CODES.OK : this.STATUS_CODES.NO_CONTENT)
        return this.successResponse(res, finalStatus, result ?? null);
      } catch (error) {
        console.error(error)
        return this.errorResponse(
          res,
          error.code || this.STATUS_CODES.INTERNAL_ERROR,
          error.error
        );
      }
    },
  
    successResponse (res, statusCode, data = null) {
      res.status(statusCode);
      return data ? res.json({data}) : res.json();
    },
  
    errorResponse (res, code, error = null) {
      const response = {}
      if (error) {
        response.error = typeof error === "object" ? JSON.stringify(error) : `${error}`;
      } else {
        response.error = "Ha ocurrido un error inesperado";
      }
      return res.status(code).send(response);
    }
  };
  
  module.exports = ResponseHelper;
