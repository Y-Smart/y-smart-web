/* export class Command {
    @Prop({ required: true, type: String, ref: 'Device' })
    device: string;

    @Prop({ required: true })
    command: string;

    @Prop({
        required: true,
        enum: ['pending', 'success', 'failed'],
        default: 'pending',
    })
    status: string;

    @Prop({ default: Date.now })
    createdAt: Date;
}
*/

export const commandsDataMocked = [
    { device: 'Capteur 1', command: 'ON', status: 'success', createdAt: '2024-03-17 14:30' },
    { device: 'Caméra 2', command: 'RECORD', status: 'pending', createdAt: '2024-03-17 14:31' },
    { device: 'Lumière 3', command: 'OFF', status: 'failed', createdAt: '2024-03-17 14:32' },
    { device: 'Alarme', command: 'ACTIVATE', status: 'success', createdAt: '2024-03-17 14:33' },
    // Ajoute plus de données pour le test
];