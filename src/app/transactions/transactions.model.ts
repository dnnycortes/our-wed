type transactionType = 'incomming' | 'expense' ;
type transactionStatus = 'pending' | 'cancelled' | 'paid' ;
interface Event {
    name: string
}

export interface transaction {
    type?: transactionType
    date?: Date;
    event: Event;
    concept: string;
    comment: string;
    quantity: number;
    status: transactionStatus
}
