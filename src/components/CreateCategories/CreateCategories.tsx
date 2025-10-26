import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import styles from "./CreateCategories.module.css";
interface Values {
  name: string;
  image: string;
}
const CreateCategories = () => {
  const navigation = useNavigate();
  async function fetchLogin(values: Values) {
    const res = await fetch("https://api.escuelajs.co/api/v1/categories/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: values.name,
        image: values.image || "https://placeimg.com/640/480/any",
      }),
    });
    if (res.ok) {
      navigation(ROUTES.CATEGORIES);
    } else{
        alert("Заполните поле 'Название категории' на латинице")
    }
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create Category</h1>

      <Formik
        initialValues={{ name: "", image: "" }}
        onSubmit={(values: Values) => {
          fetchLogin(values);
        }}
      >
        <Form className={styles.form}>
          <label htmlFor="name" className={styles.label}>
            Название категории
          </label>
          <Field
            id="name"
            name="name"
            placeholder="Например: Coffee"
            className={styles.input}
          />

          <label htmlFor="image" className={styles.label}>
            Ссылка на фото
          </label>
          <Field
            id="image"
            name="image"
            placeholder="https://example.com/image.jpg"
            className={styles.input}
          />

          <button type="submit" className={styles.button}>
            Создать
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default CreateCategories;
