import { useState } from 'react'
import './App.css'

function App() {
  // const [login, setLogin] = useState('')
  // const [name, setName] = useState('')
  // const [surname, setSurname] = useState('')
  // const [email, setEmail] = useState('')
  const [inputs, setInputs] = useState({login:'',name:'',surname:'',email:'',password:''})
  const [errors, setErrors] = useState({ login: '', name: '', surname: '', email: '', password: '' });

  // const [active, setActive] = useState(true)


  // let login = ""
  // let name = ""
  // let surname = ""
  // let email = ""
  // let password = ""
  // let active = true

  const handleInputsValue = (ev) =>{
    // login = ev.target.value
    setInputs({...inputs,[ev.target.name]:ev.target.value})
    // if(ev.target.name==='name'){
    //   setInputs({...inputs,name:ev.target.value})
    // }
    console.log(inputs);
    checkValues();
    validateInput(ev.target.name,ev.target.value);
  }

  const validateInput = (field, value) => {
    let error = '';

    switch (field) {
      case 'login':
        if (!/^[a-z][a-z0-9._]{7,}$/.test(value) || /^[0-9]/.test(value)) {
          error = 'Login must be at least 8 characters, start with a lowercase letter, and can only contain lowercase letters, numbers, "." or "_". It must not start with a number.';
        }
        break;

      case 'name':
        if (!/^[A-Z][a-z]*$/.test(value)) {
          error = 'Name must start with an uppercase letter and contain only letters.';
        }
        break;

      case 'surname':
        if (!/^[A-Z][a-z]*$/.test(value)) {
          error = 'Surname must start with an uppercase letter and contain only letters.';
        }
        break;

      case 'email':
        if (!/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/.test(value)) {
          error = 'Email must be in the format "example@domain.com" and contain only letters and numbers.';
        }
        break;

      case 'password':
        if (value.length < 8) {
          error = 'Password must be at least 8 characters long.';
        }
        break;

      default:
        break;
    }

    setErrors({...errors,[field]:error});
  };

  // const handleLoginValue = (ev) =>{
  //   // login = ev.target.value
  //   setLogin(ev.target.value)
  //   console.log(login)
  //   checkValues()
  // }
  // const handleNameValue = (ev) =>{
  //   // name = ev.target.value
  //   setName(ev.target.value)
  //   console.log(name)
  //   checkValues()
  // }
  // const handleSurnameValue = (ev) =>{
  //   // surname = ev.target.value
  //   setSurname(ev.target.value)
  //   console.log(surname)
  //   checkValues()
  // }
  // const handlePasswordValue = (ev) =>{
  // //  password= ev.target.value
  //   setPassword(ev.target.value)
  //   console.log(password)
  //   checkValues()
  // }
  // const handleEmailValue = (ev) =>{
  //   // email = ev.target.value
  //   setEmail(ev.target.value)
  //   console.log(email)
  //   checkValues()
  // }

  // const checkValues = () => {
  //   if(inputs.login.length >= 8 && inputs.name.length >= 8 && inputs.surname.length >= 8 && inputs.password.length >= 8 && inputs.email.length >= 8){
  //     console.log(true);
  //     // active=false
  //     // setActive(false)
  //     return false
  //   }
  //   else{
  //     return true
  //     // setActive(true)
  //   }
  // }

  // let active = checkValues()

  const checkValues = () => {
    return Object.values(errors).every((error) => error === '') &&
           Object.values(inputs).every((input) => input.trim() !== '');
  };

  let active = !checkValues();

  return (
    <>
      <form action="">
        <div>
          <input onChange={handleInputsValue} type="text" name="login" placeholder="login" />
          <p>{errors.login}</p>
        </div>

        <div>
          <input onChange={handleInputsValue} type="text" name="name" placeholder="name" />
          <p>{errors.name}</p>
        </div>

        <div>
          <input onChange={handleInputsValue} type="text" name="surname" placeholder="surname" />
          <p>{errors.surname}</p>
        </div>

        <div>
          <input onChange={handleInputsValue} type="text" name="email" placeholder="email" />
          <p>{errors.email}</p>
        </div>

        <div>
          <input onChange={handleInputsValue} type="password" name="password" placeholder="password" />
          <p>{errors.password}</p>
        </div>

        <button disabled={active}>REGISTER</button>
      </form>

    </>
  )
}

export default App
