const { Router } = require("express");
const sendEmail = require("../middlewares/mailer");

const router = Router();
router.post("/sendEmail", async (req, res) => {
  const email = req.body.email;
  const subject =
    "🌟 Pour vous : votre certificat de participation exclusif 🌟";
  const message = " Bravooo";
  const html =
    "<b>Nous tenions à vous exprimer notre sincère gratitude pour votre participation aux activités du musée virtuel Le pinceau médical.</b><br><br><br><img src='cid:unique@cid'><p>Nous espérons que ce certificat vous rappellera les moments précieux que nous avons partagés et les accomplissements que vous avez réalisés.</p><br/><p>Merci encore pour tout ce que vous apportez à notre communauté. Nous sommes impatients de vous retrouver lors de nos prochains événements et activités.</p><p>Bien cordialement,<br>Equipe Le pinceau médical</p>";
  const attachments = [
    {
      filename: "certif.jpg",
      path: "public/certif.jpg", // Path to the file
      cid: "unique@cid", // Same CID value as in the html img src
    },
  ];
  console.log(email);
  await sendEmail({
    email: email,
    subject: subject,
    message: message,
    html: html,
    attachments: attachments,
  });

  return res.status(200).json({
    status: "success",
    message: "Gift delivred successfully",
  });
});

module.exports = router;
