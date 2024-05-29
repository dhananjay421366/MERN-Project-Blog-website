// using promises
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};
// using try catch

// const asyncHandler = (fun) => {
//   async (req, res, next) => {
//     try {
//         await fun(req,res,next)
//     } catch (error) {
//       res.status(error.code || 500).json({
//         message: error.message,
//         sucess : false
//       });
//     }
//   };
// };
export { asyncHandler };
