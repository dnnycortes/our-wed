type guestType = 'incomming' | 'expense' ;
type gueststatus = 'pending' | 'cancelled' | 'paid' ;
interface Event {
    name: string
}

export interface guest {
    type?: guestType
    date?: Date;
    event: Event;
    concept: string;
    comment: string;
    quantity: number;
    status: gueststatus
}
