export interface GuestInfo {
    id: string;
    guestInfo: GuestInfoProperties;
}

export interface GuestInfoProperties {
    attending: boolean;
    group: string;
    guestAttending: number;
    invited: number;
    notes: string;
}
