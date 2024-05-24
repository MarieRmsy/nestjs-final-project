import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        const { email } = createUserDto;

        if (!email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        throw new HttpException('Invalid email format', HttpStatus.BAD_REQUEST);
        }

        const existingUser = await this.userService.getUser(email);
        if (existingUser) {
        throw new HttpException('User already exists', HttpStatus.CONFLICT);
        }

        await this.userService.addUser(email);
        return { status: 'User created' };
    }
}
