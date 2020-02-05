const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
    if(token){
       jwt.verify(token,process.env.JWT_SECRET || 'thisObscuresThePassword', (err, decodedToken)=>{
           if(err){
            res.status(401).json({ message:'Your token was bad, these are not the droids you are looking for'})
           }else{
               req.user = decodedToken;
               next()
           }
       })
    }else{
      res.status(401).json({ access: 'denied... good day, sir.' });
    }
  
};
