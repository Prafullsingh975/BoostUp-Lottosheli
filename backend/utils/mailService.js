/* eslint-disable no-undef */
const googleApis = require("googleapis");
const nodemailer = require("nodemailer");

const CLIENT_ID =
  "410862035039-d36d0uu8pkaqlms4a6845edtqrec6h2j.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = `https://developers.google.com/oauthplayground`;
const REFRESH_TOKEN = `1//044A7qcRlZ9RrCgYIARAAGAQSNwF-L9IrtCsA-FRpm_LW5t0atk6IsDnM00ecH4z6nyHyVZhOHBLKvUGrdVRWA6SqJSxYMKFyhAE`;
const authClient = new googleApis.google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
);
authClient.setCredentials({ refresh_token: REFRESH_TOKEN });
const mailer = async (to, text, subject) => {
  try {
    const ACCESS_TOKEN = await authClient.getAccessToken();
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "vm572138@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: ACCESS_TOKEN,
      },
    });
    const details = {
      from: "Prafull Singh <prafullsingh975@gmail.com>",
      to: `${to}`,
      subject: `${subject}`,
      text: `${text}`,
    };
    const result = await transport.sendMail(details);
    return result;
  } catch (err) {
    return err;
  }
};
// mailer().then((res) => {
//   console.log("sent mail !", res);
// });

module.exports = mailer;
