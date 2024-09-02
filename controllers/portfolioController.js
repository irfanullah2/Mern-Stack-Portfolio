const nodemailer = require('nodemailer')
const sendGridTransport = require('nodemailer-sendgrid-transport')

// Transport 
const transporter = nodemailer.createTransport(
    sendGridTransport({
        auth:{
            api_key : process.env.API_SENDGRID
        }
    })
)



const sendEmailController = (req , res)=>{
    try {
            const { name , email , msg} = req.body;

            // Validation
        if (!name || !email || !msg) {
            return res.status(500).send({
                success: false ,
                message: 'Please Provide All Fields',
            })
        }
           // Email Matter
           transporter.sendMail({
            to:'faani094@gmail.com',
            from: 'faani094@gmail.com',
            subject: 'Mern Stack Portfolio',
            html: 
            `
            <h5>Detail Information</h5>
            <ul>
            <li>Name: ${name}</li>
            <li>Email: ${email}</li>
            <li>Message: ${msg}</li>
            </ul>
            `,
           })
    
        return res.status(200).send({
            success: true ,
            message: 'Your Message Send Successfully'
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false ,
            message: 'Send Email API Error',
            error
        })
    }
};

module.exports = { sendEmailController } ;