import { IsNotEmpty, IsString, IsNumber } from "class-validator";
import { TransactionType } from "../interfaces/transaction.enum";

export class TransactionDto {

    @IsNumber()
    @IsNotEmpty({
        message: 'The transaction type must be a number, 1 or 2'
    })
    transactionType: TransactionType

    @IsString()
    @IsNotEmpty({
        message: 'Bank account cannot be null'
    })
    bankAccount: string

    @IsNumber()
    @IsNotEmpty({
        message: 'The movement value cannot be null'
    })
    moveValue: number

    @IsNumber()
    @IsNotEmpty({
        message: 'The description type must be a number, 1, 2 or 3'
    })
    description: number

}