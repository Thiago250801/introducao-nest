import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './Message';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}
  @Get()
  findAll() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  findById(@Param() params) {
    // o + no params transforma o id em number
    return this.messagesService.findById(+params.id);
  }

  @Post()
  create(@Body() body: Message) {
    console.log({ body });
    return this.messagesService.create(body);
  }
}
