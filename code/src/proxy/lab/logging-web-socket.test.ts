import WebSocket from 'ws';
import LoggingWebSocket from './logging-web-socket';
  import { WebSocketConnectImpl } from './websocket-connect';

jest.mock('ws');
describe('[Proxy - lab] LoggingWebSocket', function () {
  it('should return date time in human-readable format', function () {
    // given
    const loggingWebSocket = new LoggingWebSocket('ws://example.com/socket');
    jest.useFakeTimers().setSystemTime(new Date('2023-10-02'));
    loggingWebSocket.connect();

    // when
    loggingWebSocket.send('now');

    // then
    expect(WebSocket.prototype.send).toHaveBeenCalledWith(
      'Monday, October 2, 2023 at 07:00:00 AM GMT+7'
    );
  });

  it('should return date time in human-readable format with tomorrow date', function () {
    // given
    const loggingWebSocket = new LoggingWebSocket('ws://example.com/socket');
    jest.useFakeTimers().setSystemTime(new Date('2023-10-02'));
    loggingWebSocket.connect();

    // when
    loggingWebSocket.send('tomorrow');

    // then
    expect(WebSocket.prototype.send).toHaveBeenCalledWith(
      'Tuesday, October 3, 2023 at 07:00:00 AM GMT+7'
    );
  });

  it('should throw error when web socket is not connect', () => {
    const loggingWebSocket = new WebSocketConnectImpl('ws://example.com/socket');

    const send = () => loggingWebSocket.send('Hello');

    expect(send).toThrowError('WebSocket is not connected.')
  });
  
});
