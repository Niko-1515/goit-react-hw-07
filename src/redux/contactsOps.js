import axios from 'axios'; // 'axios' для HTTP-запитів

// Функція для створення асинхронних операцій
import { createAsyncThunk } from '@reduxjs/toolkit';

// Базова URL-адреса для запитів
axios.defaults.baseURL = 'https://zawody-u8zk.onrender.com';

// Операція для отримання всіх контактів
export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAllContacts', // Ім'я операції
  async (_, thunkAPI) => {
    try {
      // Виконання GET-запиту
      const response = await axios.get('/riders');
      // Повернення отриманих даних
      console.log(response.data.data);
      
      return response.data.data;
    } catch (error) {
      // Обробка помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Операція для видалення контакту
export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact', // Ім'я операції
  async (id, thunkAPI) => {
    try {
      // Виконання DELETE-запиту
      const response = await axios.delete(`/contacts/${id}`);
      // Повернення даних видаленого контакту
      return response.data;
    } catch (error) {
      // Обробка помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Операція для додавання контакту
export const addContactThunk = createAsyncThunk(
  'contacts/addNewContact', // Ім'я операції
  async (body, thunkAPI) => {
    try {
      // Виконання POST-запиту
      const response = await axios.post('/contacts', body);
      // Повернення даних нового контакту
      return response.data;
    } catch (error) {
      // Обробка помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);