// Utilisez require pour importer le service d'authentification
const platformKeyFactory = require("../services/publicdataService");

// Importez la méthode d'inscription depuis le service d'authentification
const { getAvailablePlatformList } = platformKeyFactory();

const getAvailablePlatform = async (req, res) => {
    console.log(' list demandé coté platform')
    try {  
        const temp = await getAvailablePlatformList()
        res.status(200).json({ message: 'public data marche ', data : temp});
    } catch (error) {
        // Gérez les erreurs et renvoyez un code d'erreur
        res.status(500).json({ message: 'Erreur lors de l\' list public data  demandé coté platform : ' + error });
    }
};

// Exportez le contrôleur pour l'utilisation dans d'autres fichiers
module.exports = {
    getAvailablePlatform
};
