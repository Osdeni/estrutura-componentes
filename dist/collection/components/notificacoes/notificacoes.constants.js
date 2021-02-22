export const LIMITE_PAGINACAO = 20;
export var MessageType;
(function (MessageType) {
    MessageType["STARTED"] = "STARTED";
    MessageType["RESTARTED"] = "RESTARTED";
    MessageType["NEW_NOTIFICATIONS"] = "NEW_NOTIFICATIONS";
    MessageType["READ_ACTION"] = "READ_ACTION";
})(MessageType || (MessageType = {}));
export var ReadAction;
(function (ReadAction) {
    ReadAction["READ_MESSAGE"] = "READ_MESSAGE";
    ReadAction["UNREAD_MESSAGE"] = "UNREAD_MESSAGE";
    ReadAction["READ_ALL_CLOSED"] = "READ_ALL_CLOSED";
    ReadAction["READ_ALL_IN_PROGRESS"] = "READ_ALL_IN_PROGRESS";
    ReadAction["READ_ALL"] = "READ_ALL";
})(ReadAction || (ReadAction = {}));
