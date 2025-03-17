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