const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/*  SEND WELCOME EMAIL VIA SENDGRID */
const sendWelcomeEmail = async (email, name) => {
    try {
        await sgMail.send({
            to: email,
            from: process.env.SGMAIL_EMAIL,
            subject: 'Thanks for Joining TaskTracker.io',
            text: `Welcome to the app, ${name}.
                   Let us know how you get along with the app!\n
                   The TaskTracker Team`,
        });
        console.log(`Welcome email sent to ${email}`);
    } catch (error) {
        console.error('Error sending welcome email:', error);
    }
};

/*  SEND CANCELLATION EMAIL VIA SENDGRID */
const sendCancellationEmail = async (email, name) => {
    try {
        await sgMail.send({
            to: email,
            from: process.env.SGMAIL_EMAIL,
            subject: "We're sorry to see you leave",
            text: `We're sorry to see you leave, ${name}.
                   Let us know what we could do differently next time in a reply email!\n
                   The TaskTracker Team`,
        });
        console.log(`Cancellation email sent to ${email}`);
    } catch (error) {
        console.error('Error sending cancellation email:', error);
    }
};

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail,
};
