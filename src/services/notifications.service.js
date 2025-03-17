// NotificationService.js
import { toast } from "react-toastify";

const NotificationService = {
    success: (message) => toast.success(message),
    error: (message) => toast.error(message),
    info: (message) => toast.info(message),
    warning: (message) => toast.warning(message),

    createSuccess: () => toast.success("Ajout réussi de matériel"),
    createFailed: () => toast.error("Echec d'ajout du matériel"),

    deleteSuccess: () => toast.success("Suppression du matériel réussie"),
    deleteFailed: () => toast.error("Echec de la suppression du matériel"),

    updateSuccess: () => toast.success("Modification du matériel réussie"),
    updateFailed: () => toast.error("Echec de la modification du matériel"),
};

export default NotificationService;