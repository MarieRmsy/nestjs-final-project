import { Injectable, NotImplementedException } from '@nestjs/common';
import { User, UserDocument } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    addUser(email: string): Promise<User> {
        const createdUser = new this.userModel({email});
        return createdUser.save();
    }

    getUser(email: string): Promise<User | null> {
        return this.userModel.findOne({email}).exec();
    }

    async resetData(): Promise<void> {
        await this.userModel.deleteMany({}).exec();
    }
}
