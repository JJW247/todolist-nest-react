import { Controller, Post } from '@nestjs/common';
import { CreateTodoDto } from './dtos/createTodo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async createTodo(createTodoDto: CreateTodoDto) {
    return await this.todoService.createTodo(createTodoDto);
  }
}
