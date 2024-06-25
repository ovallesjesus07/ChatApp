import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { GoogleGenerativeAI } from '@google/generative-ai';
import axios from 'axios';

const API_KEY = 'AIzaSyBUk4btFOlfMXa4Hj7hlG4Py8rN2FdYE80';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent';

// Inicializa el cliente de GoogleGenerativeAI con tu clave de API
const genAI = new GoogleGenerativeAI(API_KEY);

// Obtiene el modelo generativo específico (gemini-1.5-flash en este ejemplo)
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default function Chat() {
    const [messages, setMessages] = useState([]);
  
    useEffect(() => {
      setMessages([
        {
          _id: 1,
          text: '¡Hola! Soy un asistente virtual.',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'INTELIGENCIA ARTIFICIAL',
          },
        },
      ]);
    }, []);
  
    const onSend = useCallback(async (messages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
  
      const userMessage = messages[0].text;
      try {
        const result = await model.generateContent(userMessage);
        const response = await result.response;
        const aiMessage = {
          _id: Math.random().toString(36).substring(7),
          text: response.text(),
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'INTELIGENCIA ARTIFICIA',
          },
        };
  
        setMessages(previousMessages => GiftedChat.append(previousMessages, aiMessage));
      } catch (error) {
        console.error('Error generando respuesta con Gemini', error);
      }
    }, []);
    
    return (
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
  }
  