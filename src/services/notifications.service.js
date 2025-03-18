// NotificationService.js
import { toast } from "react-toastify";

const NotificationService = {

    getDeviceFailed: () => toast.error("Echec de la récupération du matériel"),
    getCommandsFailed: () => toast.error("Echec de la récupération de l'historique"),

    createSuccess: () => toast.success("Ajout réussi de matériel"),
    createFailed: () => toast.error("Echec d'ajout du matériel"),

    deleteSuccess: () => toast.success("Suppression du matériel réussie"),
    deleteFailed: () => toast.error("Echec de la suppression du matériel"),

    updateSuccess: () => toast.success("Modification du matériel réussie"),
    updateFailed: () => toast.error("Echec de la modification du matériel"),

    authFailed: () => toast.error("Authentification échoué"),
    logOut: () => toast.success("Déconnexion"),
};

export default NotificationService;