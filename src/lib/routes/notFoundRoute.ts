
const notFoundRoute= (req,res,next) => {
  const error = new Error("Not Found");
  next(error);
 }

 export default notFoundRoute;