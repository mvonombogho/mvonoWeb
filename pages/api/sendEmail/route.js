import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request){
    try{
        const {subject,message} = await request.json()

        const transporter = nodemailer.createTransport({
            service: 'zoho',
            host: 'smtpro.zoho.in',
            port: 465,
            secure: true,
            auth:{
                user:'info@mvonoconsultants.com',
                pass:process.env.EMAIL_PASSWORD
    
            }
        })
    
        const mailOption = {
            from: 'info@mvonoconsultants.com',
            to: 'israelmvono@gmail.com',
            subject: 'SEND EMAIL TUTORIAL',
            html:`
                <h3>Hello Israel </h3>
                <li>title: ${subject}</li>
                <li>message: ${message}</Li>
            `
        }
    
        await transporter.sendMail(mailOption)
    
        return NextResponse.json({message: "Email sent successfully"},{status:200})
    }catch(error){
        return NextResponse.json({message:"Failed to Send Email"},{status:500})
    }
}