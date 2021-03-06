const mongoose = require("mongoose")


const ListSchema = new mongoose.Schema({
    name: {
        type: String, // Sanotan konelle että name on String eli sitä luetan niin kuin kirjoitaisin "" välissä
        trim: true, // Trim true poista kaikki välilyönit ja valkoinen tila
        maxlength: [20, "Name canot be more than 20 characters long"], // maxLength 20 tarkoittaa että maksimi pitus on 20 kirjainta ja seurava value on msg
        },
    isEdited: {
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model("List", ListSchema)