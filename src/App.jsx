// Xуки 'useDispatch' (диспатч екшенів), 'useSelector' (отримання даних зі стейта).
import { useDispatch, useSelector } from 'react-redux';
import './App.css'; // Cтилі CSS
import ContactForm from './components/ContactForm/ContactForm'; // Компонент форми (додавання нового контакту)
import ContactList from './components/ContactList/ContactList'; // Компонент списку контактів
import SearchBox from './components/SearchBox/SearchBox'; // Компонент пошуку контактів (input)
import { useEffect } from 'react'; // хук `useEffect`
import { fetchContactsThunk } from './redux/contactsOps'; // thunk-операція (завантаження контактів з сервера)
import { selectIsError, selectIsLoading } from './redux/selectors'; // Селектори для отримання стану 'помилки', 'завантаження'.
import Loader from './components/Loader/Loader'; // Компонент Loader
import { Toaster } from 'react-hot-toast'; // Бібліотека 'react-hot-toast' (відображення сповіщень)
import Error from './components/Error/Error'; // Компонент Error

function App() {
  const dispatch = useDispatch(); // Функція 'dispatch' (відправка екшенів)

  // 'useEffect' для виконання асинхронної операції 'fetchContactsThunk' (перший рендер)
  useEffect(() => {
    dispatch(fetchContactsThunk()); // Виклик операції для завантаження списоку контактів із сервера (наявних)
  }, [dispatch]); // Викликається один раз, оскільки `dispatch` стабільний (не змінюється).

  const isError = useSelector(selectIsError); // Cтан помилки
  const isLoading = useSelector(selectIsLoading); // Cтан завантаження

  return (
    <>
      {/* Ініціалізуємо сповіщення (Toaster) */}
      <Toaster position="top-right" reverseOrder={false} />
      <h1 className="title">Zarejestruj się i szalej 😜
      </h1>
      {/* Форма для додавання нового контакту */}
      <ContactForm />
      {/* Поле для пошуку контактів */}
      <SearchBox />
      {/* Відображення помилки, якщо вона є */}
      {isError && <Error />}
      {/* Індикатор завантаження під час отримання даних */}
      {isLoading && <Loader />}
      {/* Список контактів відображається, тільки якщо дані завантажені */}
      {!isLoading && <ContactList />}
    </>
  );
}

export default App;