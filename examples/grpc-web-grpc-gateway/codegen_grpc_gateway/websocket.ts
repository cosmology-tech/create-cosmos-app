import { WebSocket } from "isomorphic-ws";
export const createWebSocketClient = (wsUrl: string) => {
  return new WebSocket(wsUrl);
};