import { WebSocket } from "ws";

export interface WebSocketConnect {
    connect(): void;
    send(data: string): void;
}

export class WebSocketConnectImpl implements WebSocketConnect {
    private readonly url: string;
    private webSocketConnection: WebSocket | undefined;

    constructor(url: string) {
        this.url = url
    }

    connect(): void {
        this.webSocketConnection = new WebSocket(this.url);
        console.log('Websocket connected');
    }

    send(data: string) {
        if (this.webSocketConnection) {
            this.webSocketConnection.send(data);
        } else {
            throw new Error('WebSocket is not connected.')
        }
    }
}
