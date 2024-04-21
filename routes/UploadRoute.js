const { Router } = require("express");
const uploadMiddleware = require("../middlewares/MulterMiddleware");
const UploadModel = require("../models/UploadModel");

const router = Router();

router.get("/api/get", async (req, res) => {
  const allPhotos = await UploadModel.find().sort({ createdAt: "descending" });
  res.send(allPhotos);
});

router.post("/api/save", uploadMiddleware.single("photo"), (req, res) => {
  const photo = req.file.filename;

  console.log(photo);

  UploadModel.create({ photo })
    .then((data) => {
      console.log("Uploaded Successfully...");
      console.log(data);
      res.send(data);
    })
    .catch((err) => console.log(err));
});
// Route pour supprimer une photo par son ID
router.delete("/api/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await UploadModel.findByIdAndDelete(id);
    console.log("Photo deleted successfully");
    res.status(200).send("Photo supprimée avec succès.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Une erreur s'est produite lors de la suppression de la photo.");
  }
});

module.exports = router;
