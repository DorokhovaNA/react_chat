import { setMessages } from "./ChatSlice";
import { db } from "../App";

const getPayloadFromSnapshot = (snapshot) => {
  const messages = [];

  snapshot.forEach((mes) => {
    messages.push(mes.val());
  });

  return { chatId: snapshot.key, messages };
};

export const sendMessageWithThunk = (message) => async (dispatch, getState) => {
  const { chat } = getState();
  const chatId = message.chatId;
  const messages = chat.messageArray[chatId] || [];

  dispatch(
    addMessageWithFirebase(chatId, {
      ...message,
      id: `${chatId}-${messages?.length || 0}-${Date.now()}`,
    })
  );
};

export const addMessageWithFirebase = (chatId, messages) => async () => {
  db.ref("messages").child(chatId).child(messages.id).set(messages);
};

export const initMessageTracking = () => (dispatch) => {
  db.ref("messages").on("child_changed", (snapshot) => {
    const payload = getPayloadFromSnapshot(snapshot);
    dispatch(setMessages(payload));
  });

  db.ref("messages").on("child_added", (snapshot) => {
    const payload = getPayloadFromSnapshot(snapshot);
    dispatch(setMessages(payload));
  });
};
