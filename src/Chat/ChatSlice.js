import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

export const ChatSlice = createSlice({
    name: 'chat',
    initialState: {
        messageArray: {
          2: [
            {
                lastUpdate: new Date().toLocaleString(),
                userId: 1,
                text: 'Hi',
                isRead: true,
            },
            {
                lastUpdate: new Date().toLocaleString(),
                userId: 3,
                text: 'How are U?',
                isRead: false,
            },
          ],
          3: [
            {
                lastUpdate: new Date().toLocaleString(),
                userId: 2,
                text: 'Have you made your notes yet?',
                isRead: true,
            },
            {
                lastUpdate: new Date().toLocaleString(),
                userId: 1,
                text: 'Yes, I have',
                isRead: false,
            },
            {
                lastUpdate: new Date().toLocaleString(),
                userId: 1,
                text: 'Yes, I have',
                isRead: false,
            },
          ],
        },
        users: [
          {
            id: 2,
            name: "T-Na",
          },
          {
            id: 3,
            name: "BRB",
          },
        ],
    
        myId: 1,
    },
    reducers: {
        addMessage: (state, action) => {
            const { chatId, messageText, userId } = action.payload;
            // const chatIndex = state.chats.findIndex((chat) => chat.id === chatId);
            // const chat = state.chats[chatIndex];
      
            // console.log(chat);
      
            // const newChats = [...state.chats];
      
            // newChats.splice(chatIndex, 1);
      
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
            }
        },

        incrementWithoutMessage: (state) => {
            state.value += 1;
        },
        incrementWithMessage: (state, action) => {
            state.value += 1;
            state.lastMessageText = action.payload;
        },
        // addMessage: (state, action) => {
        //     state.messageArray.push(action.payload); 
        // }
    }
});

export const { incrementWithMessage, incrementWithoutMessage, addMessage } = ChatSlice.actions;

export default ChatSlice.reducer;