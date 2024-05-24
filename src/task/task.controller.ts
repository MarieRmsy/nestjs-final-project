import { Controller, Post, Body, Get, Param, HttpException, HttpStatus } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { isValidObjectId } from 'mongoose';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('user/:userId')
  async getUserTasks(@Param('userId') userId: string) {
    if (!isValidObjectId(userId)) {
      throw new HttpException('Invalid userId format', HttpStatus.BAD_REQUEST);
    }
    const tasks = await this.taskService.getUserTasks(userId);
    return tasks
  }

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto) {
    const { name, userId, priority } = createTaskDto;

    if (!name || !isValidObjectId(userId) || !Number.isInteger(+priority) || +priority <= 0) {
      throw new HttpException('Invalid task data', HttpStatus.BAD_REQUEST);
    }

    const task = await this.taskService.addTask(name, userId, +priority);
    return { status: 'Task created', task };
  }
}