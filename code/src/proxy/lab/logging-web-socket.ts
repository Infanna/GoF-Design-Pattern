import { WebSocketConnect, WebSocketConnectImpl } from './websocket-connect';

class LoggingWebSocket {
  private readonly url: string;
  private socket: WebSocketConnect | null;

  constructor(url: string) {
    this.url = url;
    this.socket = new WebSocketConnectImpl(this.url);
  }

  connect() {
    try {
      this.socket?.connect();
    } catch (e) {
      console.error(e);
    }
  }

  send(data: string) {
    if (this.socket) {
      if (data === 'now') {
        const formattedDate: string = this.tranformTimeToReadableFormat();
        data = formattedDate;
      }
      if (data === 'tomorrow') {
        const date: Date = new Date();
        date.setDate(date.getDate() + 1);
        const formattedDate: string = this.tranformTimeToReadableFormat(date);
        data = formattedDate;
      }
      this.socket.send(data);
    } else {
      console.error('WebSocket is not connected.');
    };
  }

  tranformTimeToReadableFormat(date: Date = new Date()): string {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
    };

    const formattedDate: string = new Intl.DateTimeFormat(
      'en-US',
      options,
    ).format(date);

    return `${formattedDate}`;
  }
}

export default LoggingWebSocket;
