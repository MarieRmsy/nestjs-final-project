import { Injectable, NotImplementedException } from '@nestjs/common';
import { Task, TaskDocument } from './schemas/task.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TaskService {
    constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

    async addTask(name: string, userId: string, priority: number): Promise<Task> {
        let createdTask = new this.taskModel({ name, userId, priority });
        createdTask.id = createdTask._id;
        return createdTask.save();
    }

    async getTaskByName(name: string): Promise<Task | null> {
        return this.taskModel.findOne({ name }).exec();
    }

    async getUserTasks(userId: string): Promise<Task[]> {
        return this.taskModel.find({ userId }).exec();
    }

    async resetData(): Promise<void> {
        await this.taskModel.deleteMany({}).exec();
    }
}