import { createSlice } from "@reduxjs/toolkit";

export const ChatSlice = createSlice({
  name: "chat",
  isAuth: false,
  initialState: {
    messageArray: {
      2: [
        {
          lastUpdate: new Date().toLocaleString(),
          userId: 1,
          author: 'Diana',
          messageText: "Hi",
          isRead: true,
        },
        {
          lastUpdate: new Date().toLocaleString(),
          userId: 3,
          author: 'Tom',
          messageText: "How are U?",
          isRead: false,
        },
      ],
      3: [
        {
          lastUpdate: new Date().toLocaleString(),
          userId: 2,
          author: 'Jack',
          messageText: "Have you made your notes yet?",
          isRead: true,
        },
        {
          lastUpdate: new Date().toLocaleString(),
          userId: 1,
          author: 'Diana',
          messageText: "Yes, I have",
          isRead: false,
        },
        {
          lastUpdate: new Date().toLocaleString(),
          userId: 1,
          author: 'Diana',
          messageText: "What you doing?",
          isRead: false,
        },
      ],
    },
    users: [
      {
        id: 2,
        name: "Болталка",
      },
      {
        id: 3,
        name: "FAQ",
      },
    ],

    myId: 1,
  },
  reducers: {
    addMessage: (state, action) => {
      const { chatId, messageText, userId } = action.payload;

      state.messageArray = {
        ...state.messageArray,
        [chatId]: [
          ...state.messageArray[chatId],
          {
            text: messageText,
            lastUpdate: new Date().toLocaleString(),
            isRead: false,
            userId,
          },
        ],
      };
    },

    setMessages: (state, action) => {
      const { chatId, messages } = action.payload;

      state.messageArray = {
        ...state.messageArray,
        [chatId]: messages,
      };
    },

    incrementWithoutMessage: (state) => {
      state.value += 1;
    },
    incrementWithMessage: (state, action) => {
      state.value += 1;
      state.lastMessageText = action.payload;
    },

    changeIsAuth: (state, action) => {
      state.isAuth = action.payload;
    }
  },
});

export const {
  incrementWithMessage,
  incrementWithoutMessage,
  addMessage,
  changeIsAuth,
  setMessages,
} = ChatSlice.actions;

export default ChatSlice.reducer;
