/* @Schema()
export class Device {
    @Prop({ type: String, ref: 'User', required: true })
    owner: string;

    @Prop({ required: true })
    type: string;

    @Prop({ required: true })
    location: string;

    @Prop({
        required: true,
        enum: ['online', 'offline', 'error'],
        default: 'offline',
    })
    status: string;

    @Prop({ default: Date.now })
    createdAt: Date;
}
*/

export const mockDevices = [
    { id: 1, type: "Capteur Température", location: "Salon", status: "online", createdAt: "2024-03-10T12:00:00Z" },
    { id: 2, type: "Caméra Sécurité", location: "Entrée", status: "offline", createdAt: "2024-03-09T15:30:00Z" },
    { id: 3, type: "Détecteur Fumée", location: "Cuisine", status: "error", createdAt: "2024-03-08T08:45:00Z" },
    { id: 4, type: "Prise Connectée", location: "Bureau", status: "online", createdAt: "2024-03-07T10:10:00Z" },
    { id: 5, type: "Capteur Mouvement", location: "Garage", status: "offline", createdAt: "2024-03-06T22:00:00Z" },
    { id: 6, type: "Thermostat", location: "Chambre", status: "online", createdAt: "2024-03-05T14:20:00Z" }
];
