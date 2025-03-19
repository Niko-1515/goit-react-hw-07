import { FaUser, FaPhoneAlt, FaAt, FaAddressCard } from "react-icons/fa"; // Імпортуємо іконки
import { LiaSafari } from "react-icons/lia";
import { VscTypeHierarchy } from "react-icons/vsc";
import { TbNumber } from "react-icons/tb";
import { IoShirt } from "react-icons/io5";
import { PiEngineBold } from "react-icons/pi";
import { IoLogoModelS } from "react-icons/io";






import styles from "./Contact.module.css"; // Стилі CSS

// 'useDispatch' для відправки екшенів
// !import { useDispatch } from "react-redux";

import { useState } from "react";

// Асинхронна операція для видалення контакту (з файлу contactsOps.js)
// import! { deleteContactThunk } from "../../redux/contactsOps";

// Компонент для відображення одного контакту
const Contact = ({
  name,
  lastName,
  phone,
  email,
  dateOfBirth,
  riderType,
  startNumber,
  engineSize,
  modelMoto,
  shirt,
  adres,
  //! _id,
}) => {
  // 'Dispatch' для відправки екшену
  //! const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);

  // Функція-обробник для видалення контакту
  // function handleDelete(payStatus) {
  //   // Виклик deleteContactThunk з переданим id контакту
  //   // dispatch(deleteContactThunk(_id));
  //   if (!payStatus) {
  //     return payStatus = Boolean(true)
  //   }
  //   return payStatus = Boolean(false)
  // };
  //  console.log(payStatus);
   
  return (
    // Елемент списку для одного контакту
    <li className={styles.contactCard}>
      {/* Обгортка */}
      <div className={styles.contactCardWrap}>
        {/* Ім'я контакту з іконкою */}
        <p className={styles.contactCardItem}>
          <FaUser className={styles.iconUser} />
          {name} {lastName}
        </p>
        {/* Номер телефону з іконкою */}
        <p className={styles.contactCardItem}>
          <FaPhoneAlt className={styles.iconPhone} />
          {phone}
        </p>
        {/* Номер телефону з іконкою */}
        <p className={styles.contactCardItem}>
          <FaAt className={styles.iconPhone} />
          {email}
        </p>
        {/* Номер телефону з іконкою */}
        <p className={styles.contactCardItem}>
          <LiaSafari className={styles.iconPhone} />
          {dateOfBirth}
        </p>
        {/* Номер телефону з іконкою */}
        <p className={styles.contactCardItem}>
          <VscTypeHierarchy className={styles.iconPhone} />
          {riderType}
        </p>
        {/* Номер телефону з іконкою */}
        <p className={styles.contactCardItem}>
          <TbNumber className={styles.iconPhone} />
          {startNumber}
        </p>
        {/* Номер телефону з іконкою */}
        <p className={styles.contactCardItem}>
          <PiEngineBold className={styles.iconPhone} />
          {engineSize} cm3
        </p>
        {/* Номер телефону з іконкою */}
        <p className={styles.contactCardItem}>
          <IoLogoModelS className={styles.iconPhone} />
          {modelMoto}
        </p>
        {/* Номер телефону з іконкою */}
        <p className={styles.contactCardItem}>
          <IoShirt className={styles.iconPhone} />
          {shirt}
        </p>
        {/* Номер телефону з іконкою */}
        <p className={styles.contactCardItem}>
          <FaAddressCard className={styles.iconPhone} />
          {adres}
        </p>
      </div>
      {/* Кнопка для видалення контакту */}
      <button
        className={isActive ? styles.payButon : styles.deleteButton }
        type="button"
        // Виклик 'handleDelete' при кліку
        onClick={() => setIsActive(!isActive)}
        // onClick={handleDelete}
      >
        {isActive ? `Zaplacone` : `Do zapłaty`}
      </button>
    </li>
  );
};

export default Contact; // Експорт
