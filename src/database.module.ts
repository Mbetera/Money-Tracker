import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './Users/user.entity';
import { Wallet } from './wallet/wallet.entity';
import { Transaction } from './transaction/transaction.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'money-tracker',
      entities: [User, Wallet, Transaction],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Wallet, Transaction]),
  ],
})
export class DatabaseModule {}