import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findAll(): import("./user.entity").User[] | PromiseLike<import("./user.entity").User[]> {
      throw new Error('Method not implemented.');
  }
  getHello(): string {
    return 'Hello World!';
  }
}
