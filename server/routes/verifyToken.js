const jwt = require('jsonwebtoken')

const verify = (request, responce, next) => {
    const token = request.cookies.jwt
    if (token) {
        jwt.verify(token,process.env.jwt_sec, (err,user) => {
            if (err) return responce.status(403).json({Message : 'Token is not valid!'})
            request.user = user
            next()
        })
    }else {
        return responce.status(401).json({Message : 'you are not authenticated!'})
    }
}


const verifyBasic = (requset,responce,next) => {
    verify(requset,responce, () => {
        if (requset.user.plan === "Basic" || requset.user.isAdmin) {
            next()
        }else {
            return responce.status(403).json('You are not allowed')
        }
    })
}
const verifyPremium = (requset,responce,next) => {
    verify(requset,responce, () => {
        if (requset.user.plan === "Premium" || requset.user.isAdmin) {
            next()
        }else {
            return responce.status(403).json('You are not allowed')
        }
    })
}

const verifyAndAdmin = (requset,responce,next) => {
    verify(requset,responce, () => {
        if (requset.user.isAdmin) {
            next()
        }else {
            return responce.status(403).json('You are not allowed')
        }
    })
}
module.exports = {verify,verifyBasic,verifyPremium,verifyAndAdmin}