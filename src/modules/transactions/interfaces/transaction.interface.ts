import { Document } from 'mongoose';
import { TransactionType } from './transaction.enum';

export interface Transaction extends Document {

    transactionType: TransactionType
    bankAccount: string
    moveValue: number
    description: number

}