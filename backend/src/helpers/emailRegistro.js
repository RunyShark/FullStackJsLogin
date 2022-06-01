const nodemailer = require("nodemailer");

const emailRegistro = async (datos) => {
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
    subject: "Comprueba tu cuenta para completar el registo",
    text: "Comprueba tu cuenta en apv",
    html: `<h2>Administracion App veterinaria</h2>
    <p>Hola: ${nombre}, comprueba tu cuenta para completar el registro </p>
    <p>Click en el siguente enlace para finalizar con el registro:
    <a href="${process.env.FRONTEND_URL}/confirmar/${toke}">Comprobar cueta</a></p>

    <p><span>Si tu no creaste la cuenta, puedes ignorar el mensaje ☺</span></p>
    `,
  });
  console.log("Mensaje enviado: %s", info.messageId);
};

module.exports = {
  emailRegistro,
};
