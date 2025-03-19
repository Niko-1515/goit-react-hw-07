import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { useId } from 'react';
import * as Yup from 'yup';
import { addContactThunk } from '../../redux/contactsOps';

const ContactForm = () => {
  const dispatch = useDispatch();

  const fieldIds = {
    imie: useId(),
    nazwisko: useId(),
    telefon: useId(),
    email: useId(),
    data_urodzenia: useId(),
    adres: useId(),
    numer_startowy: useId(),
    model_motocykla: useId(),
    pojemnosc_silnika: useId(),
    typ_zawodnika: useId(),
    koszulka: useId(),
  };

  const validationSchema = Yup.object({
    imie: Yup.string().required('Wymagane'),
    nazwisko: Yup.string().required('Wymagane'),
    telefon: Yup.string().required('Wymagane'),
    email: Yup.string().email('Nieprawidłowy format').required('Wymagane'),
    data_urodzenia: Yup.string().required('Wymagane'),
    adres: Yup.string(),
    numer_startowy: Yup.number().required('Wymagane').integer('Musi być liczbą całkowitą'),
    model_motocykla: Yup.string(),
    pojemnosc_silnika: Yup.number().required('Wymagane').integer('Musi być liczbą całkowitą'),
    typ_zawodnika: Yup.string()
      .oneOf(['open', 'kobiety', 'junior'], 'Nieprawidłowy wybór')
      .required('Wymagane'),
    koszulka: Yup.string()
      .oneOf(['nie', 's', 'm', 'l', 'xl', 'xxl'], 'Nieprawidłowy wybór')
      .required('Wymagane'),
  });

  const handleSubmit = (values, actions) => {
    dispatch(addContactThunk(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        imie: '',
        nazwisko: '',
        telefon: '',
        email: '',
        data_urodzenia: '',
        adres: '',
        numer_startowy: '',
        model_motocykla: '',
        pojemnosc_silnika: '',
        typ_zawodnika: 'open',
        koszulka: 'nie',
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={styles.form}>
        {Object.entries(fieldIds).map(([key, id]) => (
          key === 'typ_zawodnika' || key === 'koszulka' ? (
            <div key={key} className={styles.labelErrorWrap}>
              <label htmlFor={id} className={styles.label}>
                {key.replace('_', ' ').toUpperCase()}
              </label>
              <ErrorMessage className={styles.error} name={key} component="span" />
              <Field as="select" className={styles.formInput} name={key} id={id}>
                {key === 'typ_zawodnika' && ['open', 'kobiety', 'junior'].map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
                {key === 'koszulka' && ['nie', 's', 'm', 'l', 'xl', 'xxl'].map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </Field>
            </div>
          ) : (
            <div key={key} className={styles.labelErrorWrap}>
              <label htmlFor={id} className={styles.label}>
                {key.replace('_', ' ').toUpperCase()}
              </label>
              <ErrorMessage className={styles.error} name={key} component="span" />
              <Field className={styles.formInput} type="text" name={key} id={id} />
            </div>
          )
        ))}
        <button className={styles.button} type="submit">
          Dodaj kontakt
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;