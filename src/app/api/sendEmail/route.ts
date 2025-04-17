import {NextResponse} from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const {name, email, message} = await request.json();

    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // generated ethereal user
        pass: process.env.SMTP_PASSWORD, // generated ethereal password
      },
    });

    // Verify connection configuration
    transporter.verify((error, success) => {
      if (error) {
        console.log('SMTP Configuration Error:', error);
        return NextResponse.json({error: 'SMTP Configuration Error'}, {status: 500});
      } else {
        console.log('Server is ready to take our messages');
      }
    });

    // Define the email message
    let mailOptions = {
      from: email,
      to: 'contact@virtuart4d.com',
      subject: `Contact Form Submission from ${name}`,
      text: message,
      html: `<p>You have a new contact form submission:</p><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({message: 'Email sent successfully'}, {status: 200});
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({error: 'Failed to send email'}, {status: 500});
  }
}
