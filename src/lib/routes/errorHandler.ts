import moment from 'moment';


const errorHandler = (error, req, res, next) =>{
    res.status(500).json({error:error.message,
        message : "error",
        status : res.statusCode,
        timestamp : moment().utc().format()
        })


};

export default errorHandler;