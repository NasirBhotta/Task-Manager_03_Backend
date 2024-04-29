const { CustomAPiError } = require("../errors/erros");
const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPiError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ err: `something gone wrong ${err}` });
};

module.exports = errorHandler;
