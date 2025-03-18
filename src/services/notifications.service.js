// NotificationService.js
import { toast } from "react-toastify";

const NotificationService = {

    getDeviceFailed: () => toast.error("Echec de la récupération du matériel"),
    getCommandsFailed: () => toast.error("Echec de la récupération de l'historique"),

    createSuccess: () => toast.success("Ajout réussi de matériel, recharger la page pour voir les changements."),
    createFailed: () => toast.error("Echec d'ajout du matériel, recharger la page pour voir les changements."),

    deleteSuccess: () => toast.success("Suppression du matériel réussie, recharger la page pour voir les changements."),
    deleteFailed: () => toast.error("Echec de la suppression du matériel, recharger la page pour voir les changements."),

    updateSuccess: () => toast.success("Modification du matériel réussie, recharger la page pour voir les changements."),
    updateFailed: () => toast.error("Echec de la modification du matériel, recharger la page pour voir les changements."),

    authFailed: () => toast.error("Authentification échoué"),
    logOut: () => toast.success("Déconnexion"),
};

export default NotificationService;