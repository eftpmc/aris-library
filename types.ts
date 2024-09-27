export type Message = {
    message: string;
    fromUser: boolean;
    type?: never; // This makes sure 'type' does not exist on a regular message
};

export type ButtonMessage = {
    type: 'button';
    primaryLabel: string;
    secondaryLabel: string;
    fromUser: boolean;
    message?: never; // This makes sure 'message' does not exist on a button message
};

export type BookMessage = {
    type: 'book';
    title: string;
    createdBy: string;
    fromUser?: boolean;
};

export type Messages = Message | ButtonMessage | BookMessage;
