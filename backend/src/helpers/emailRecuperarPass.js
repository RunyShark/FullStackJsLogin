const nodemailer = require("nodemailer");

const recuperarContra = async (datos) => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  const { email, nombre, toke } = datos;

  const info = await transport.sendMail({
    from: "Dario Dev APP de pacientes de veterinaria",
    to: email,
    subject: "Recupera tu cuenta",
    text: "Recupera tu cuenta",
    html: `<h2>Administracion App veterinaria</h2>
    <p>Hola: ${nombre}, has solicitado restablecer tu contraseña</p>
    <p>Click en el enlace para generar una nueva contraseña
    <a href="${process.env.FRONTEND_URL}/recueperar-pass/${toke}">Restablecer contraseña</a></p>

    <p><span>Si tu no creaste la cuenta, puedes ignorar el mensaje ☺</span></p>
    `,
  });
  console.log("Mensaje enviado: %s", info.messageId);
};

module.exports = {
  recuperarContra,
};
