export const LIMITE_PAGINACAO = 20;

export enum MessageType {
  STARTED = 'STARTED',
  RESTARTED = 'RESTARTED',
  NEW_NOTIFICATIONS = 'NEW_NOTIFICATIONS',
  READ_ACTION = 'READ_ACTION',
}

export enum ReadAction {
  READ_MESSAGE = 'READ_MESSAGE',
  UNREAD_MESSAGE = 'UNREAD_MESSAGE',
  READ_ALL_CLOSED = 'READ_ALL_CLOSED',
  READ_ALL_IN_PROGRESS = 'READ_ALL_IN_PROGRESS',
  READ_ALL = 'READ_ALL',
}