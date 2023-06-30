const nodemailer = require("nodemailer");

// Конфигурация транспорта для отправки сообщений
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dinasaginbayeva21@gmail.com",
    pass: "wdkwsalzfhjniavv",
  },
});

// Маршрут для отправки сообщения
function sendEmail(to, subject, text) {
  // Параметры сообщения
  const mailOptions = {
    from: "dinasaginbayeva21@gmail.com",
    to: to,
    subject: subject,
    text: text,
  };

  // Отправка сообщения
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("Ошибка при отправке сообщения");
    } else {
      console.log("Email отправлен: " + info.response);
      res.send("Email успешно отправлен");
    }
  });
}

module.exports = sendEmail;
