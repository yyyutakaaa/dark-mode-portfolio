// /app/api/contact/route.ts
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.GMAIL_USER,
            subject: `New message from ${name}`,
            text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
        });

        return new Response(
            JSON.stringify({ success: true, message: 'Email sent successfully' }),
            {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(
            JSON.stringify({ success: false, message: 'Failed to send email' }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}
