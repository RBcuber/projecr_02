import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
interface Values {
  password: string;
  email: string;
}
const SigninPage = () => {
  const navigation = useNavigate();
  async function fetchLogin(credentials: Values) {
    const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const data = await res.json();
    const { access_token } = data;
    localStorage.setItem("access_token", access_token);
    if(res.ok){
        navigation(ROUTES.ACCOUNT)
    }
  }
  return (
    <div>
      <h1>Signin</h1>
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        onSubmit={(values: Values) => {
          fetchLogin(values);
        }}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
          />
          <label htmlFor="password">Password</label>
          <Field id="password" name="password" placeholder="************" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
export default SigninPage;
