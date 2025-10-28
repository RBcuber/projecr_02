import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import * as Yup from "yup";
import styles from "./CreateCategories.module.css";
interface Values {
  name: string;
  image: string;
}
const CreateCategories = () => {
  const navigation = useNavigate();
  async function fetchCreateCategories(values: Values) {
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
    }
  }

  const CategorySchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    image: Yup.string()
      .min(2, "Too Short!")
      .max(200, "Too Long!")
      .url("Должно быть URL")
      .required("Required"),
  });
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create Category</h1>

      <Formik
        initialValues={{ name: "", image: "" }}
        validationSchema={CategorySchema}
        onSubmit={(values: Values) => {
          fetchCreateCategories(values);
        }}
      >
        {({ errors, touched }) => (
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
            {errors.name && touched.name ? <div>{errors.name}</div> : null}

            <label htmlFor="image" className={styles.label}>
              Ссылка на фото
            </label>
            <Field
              id="image"
              name="image"
              placeholder="https://example.com/image.jpg"
              className={styles.input}
            />
            {errors.image && touched.image ? <div>{errors.image}</div> : null}

            <button type="submit" className={styles.button}>
              Создать
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default CreateCategories;

