const express = require('express');
const router = express.Router();
const SCategorie=require("../models/scategorie")

//afficher la liste des categories.
router.get('/', async (req, res, )=> {
try {
const scat = await SCategorie.find();

res.status(200).json(scat);
} catch (error) {
res.status(404).json({ message: error.message });
}

});
//créer un nouvelle catégorie
router.post('/', async (req, res) => {
const { nomscategorie, imagescat,categorieID} = req.body;
const newSCategorie = new SCategorie({nomscategorie:nomscategorie,
imagescat:imagescat,categorieID:categorieID })

try {
await newSCategorie.save();

res.status(200).json(newSCategorie );
} catch (error) {
res.status(404).json({ message: error.message });
}
13

});
//chercher une sous catégorie
router.get('/:scategorieId',async(req, res)=>{
try {
const scat = await

SCategorie.findById(req.params.scategorieId);

res.status(200).json(scat);
} catch (error) {
res.status(404).json({ message: error.message });
}
});
//modifier une catégorie
router.put('/:scategorieId', async (req, res)=> {
    try {
        const cat = await SCategorie.findByIdAndUpdate(
            req.params.scategorieId,
            { $set: req.body },
            { new: true}
        );
        res.status(200).json(cat);
    }
        catch (error) {
            res.status(404).json({message: error.message});
        }
});
//Supprimer une catégorie
router.delete('/:scategorieId', async (req, res)=> {
const id = req.params.scategorieId;
await SCategorie.findByIdAndDelete(id);
14

res.json({ message: "sous categorie deleted successfully." });

});
module.exports = router;