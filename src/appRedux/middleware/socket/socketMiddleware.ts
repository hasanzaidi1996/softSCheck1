import { CONNECT_SOCKET, DISCONNECT_SOCKET } from './events';
import { backendUrl } from 'config';
import { io, Socket } from 'socket.io-client';
import { RootState, AppDispatch } from '../../store';
import { Middleware } from 'redux';

/**
 * NOTE: there was not enough time for realtime socket implementation
 * however code will be like this.
 * TODO for future use
 */
const socket: Socket = io();
type CallBack = (...args: Array<any>) => void;

/**
 * Provides socket middleware to redux toolkit
 *
 * @returns {Socket} returns the socket middleware
 */
function SocketMiddleware(): Middleware<{}, RootState> {
  return (store) => {
    return (next) => {
      return (action) => {
        /*
    As token is stored in reducer, not in
    localStorage so we have to wait for
    token to be available in reducer, after
    which action is dispatched from loadUser
    action function after which we connect
    our socket.
    */
        if (action.type === CONNECT_SOCKET) {
          exports.socket = io(`${backendUrl}/frontend`, {
            query: { token: store.getState().auth.token }
          });

          startListeners(exports.socket, store.dispatch);
        }

        if (action.type === DISCONNECT_SOCKET) {
          exports.socket.disconnect();
        }
        return next(action);
      };
    };
  };
}

/**
 * Helper to emit events to the backendUrl
 *
 * @param {string} type - type of event to dispatch
 * @param {number} timeout - timeout
 * @param {Array<unknown>} args arguments
 * @returns {Socket} returns Socket response
 */
function socketEmit(type: string, timeout: number, ...args: Array<unknown>) {
  return exports.socket.timeout(timeout).emit(type, ...args);
}

/**
 * Helper to emit events to the backendUrl
 *
 * @param {CallBack} onSuccess - call back func
 * @param {CallBack} onTimeout call back func
 * @param {number} timeout number of seconds
 * @returns {void}
 */
const withTimeout = (onSuccess: CallBack, onTimeout: CallBack, timeout: number) => {
  let called = false;

  const timer = setTimeout(() => {
    if (called) return;
    called = true;
    onTimeout();
  }, timeout);

  return (...args: Array<unknown>) => {
    if (called) return;
    called = true;
    clearTimeout(timer);
    // eslint-disable-next-line no-invalid-this
    onSuccess.apply(this, args);
  };
};

/**
 * Helper Start socket listener for a event given
 *
 * @param {Socket} socketInstance - Socket instance to initialize event
 * @param {AppDispatch} dispatch - Redux dispatch function
 */
function startListeners(socketInstance: Socket, dispatch: AppDispatch) {}

const exports = {
  socket: socket,
  socketEmit: socketEmit,
  withTimeout: withTimeout,
  SocketMiddleware: SocketMiddleware
};
export default exports;
