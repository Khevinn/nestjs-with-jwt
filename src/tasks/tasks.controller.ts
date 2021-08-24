/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { Task } from './shared/task';
import { TaskService } from './shared/task.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TaskService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll() : Promise<Task[]> {
    return this.taskService.getAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getById(@Param('id') id: string) : Promise<Task> {
    return this.taskService.getById(id);
  }
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() task: Task) : Promise<Task> {
    return this.taskService.create(task);
  }
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() task: Task) : Promise<Task> {
    try {
      return await this.taskService.update(id, task);
    } catch (error) {
      console.log (`${error} 'Erro ao atualizar a task:' ${task.id} }`)
    }
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
     this.taskService.delete(id);
  }
}
