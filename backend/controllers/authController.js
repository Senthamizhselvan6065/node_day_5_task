const authRouter = require('express').Router();

authRouter.post('/sign_up', async(req, res, next) => {
   res.status(200).json({
     success: true,
     message: "This router active the port..."
   })
});

module.exports = authRouter;