  
const express = require("express")
const router = express.Router()
const {newListItem, getAllLists, updateList, deleteList, deleteAll} = require("../controllers/list")


router.route("/").get(getAllLists).post(newListItem).delete(deleteAll)// put ja patch ero on että kun patchin kirjoitetan name : "Nimi" se laita kaiken muun niin kuin oli ja put näyttää vain nimen.
router.route("/:id").patch(updateList).delete(deleteList).put(updateList)



module.exports = router;