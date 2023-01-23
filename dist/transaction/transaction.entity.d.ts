import { Wallet } from '../wallet/wallet.entity';
export declare class Transaction {
    id: number;
    amount: number;
    description: string;
    wallet: Wallet;
}
