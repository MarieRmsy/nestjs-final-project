import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from '../../user/schemas/user.schema';

export type TaskDocument = HydratedDocument<Task>;

@Schema()
export class Task {
    @Prop({ required: true})
    name: string;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    userId: User;

    @Prop({ required: true})
    priority: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);