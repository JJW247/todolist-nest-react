import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTodoDto } from './dtos/createTodo.dto';
import { Todo } from './entities/todo.entity';
import { TodoService } from './todo.service';

@ApiTags('todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @ApiResponse({
    status: 201,
    description: 'Todo Create',
    type: Todo,
  })
  @Post()
  async createTodo(@Body() createTodoDto: CreateTodoDto) {
    return await this.todoService.createTodo(createTodoDto);
  }

  @ApiResponse({
    status: 200,
    description: 'Todo Recieve',
    type: [Todo],
  })
  @Get()
  async getTodos() {
    return await this.todoService.getTodos();
  }
}
