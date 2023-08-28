import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  findAll() {
    return [
      {
        id: 1,
        text: 'Primeira Mensagem',
      },
      {
        id: 2,
        text: 'Segunda Mensagem',
      },
    ];
  }
}
