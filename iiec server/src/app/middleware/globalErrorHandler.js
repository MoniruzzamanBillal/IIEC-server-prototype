const globalErrorHandler = async (error, req, res, next) => {
  let status = error.status || 500;
  let message = error.message || "Something went wrong!!";

  return res.status(status).json({
    success: false,
    message,
    error,
    stack: error?.stack,
  });
};

export default globalErrorHandler;
