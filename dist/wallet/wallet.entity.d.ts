import { User } from 'src/Users/user.entity';
export declare class Wallet {
    id: number;
    name: string;
    balance: number;
    user: User;
    transactions: any;
}
