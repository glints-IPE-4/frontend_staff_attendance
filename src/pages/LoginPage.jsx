import { Form, Formik } from 'formik';
import LoginImg from '../assets/images/loginImg.png';
import TextField from '../components/TextField';

const initialValues = {
  email: '',
  password: '',
};

const LoginPage = () => (
  <div className='login-container'>
    <div className='left'>
      <div className='form-container'>
        <h2>Login</h2>
        <p className='sub'>Sign in to stay connected.</p>

        <Formik
          initialValues={initialValues}
          onSubmit={
            // Not Implemented yet
            // eslint-disable-next-line no-console
            val => console.log(val)
          }
        >
          {({ handleSubmit }) => (
            <Form className='form'>
              <TextField
                name='email'
                label='Email'
                placeholder='example@web.com'
                autoComplete='username'
                type='email'
              />
              <TextField
                name='password'
                label='Password'
                placeholder='Password'
                autoComplete='current-password'
                type='password'
              />
              <button
                type='button'
                className='button'
                onClick={handleSubmit}
                // disabled={loading}
              >
                {/* {loading ? 'Loading...' : 'Login'} */}
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
    <div className='right'>
      <div className='img-container'>
        <img src={LoginImg} alt='Login' />
      </div>
    </div>
  </div>
);

export default LoginPage;
