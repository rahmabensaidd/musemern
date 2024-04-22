const { Router } = require("express");
const sendEmail = require("../middlewares/mailer");


const router = Router();
router.post("/sendEmail", async (req, res) => {
  const email = req.body.email;
  const subject = "test subj";
  const message = " test msg";
  console.log(email);
  await sendEmail({
    email: email,
    subject: subject,
    message: message,
  });

  return res.status(200).json({
    status: "success",
    message: "Gift delivred successfully",
  });
});


module.exports = router;
