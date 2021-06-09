import './App.css';
import { AxiosCenter } from './AxiosCenterRequest';
import Login from './login/Login';


function App() {

  const use=() => {
    const token:string="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MjMyNjkxMTQsImV4cCI6MTYyMzI3MjcxNCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidGVzdDEyQHRlc3QuY29tIn0.BYUTxYCln6VE2u144AiaPM7AdO6JQ5hXePot7n_3p02MfyZ-we6VZHLFBYp_51zwP--ZH4jkaxdrEM53eBt--U3BvifdbJm30BvPux8Dw6rHshsowRPj227y-0O8LB-MOPAzje65vEe6iIIPRSzxrzhjxm1zZQMTMBH7PRi-eAKNjDEF_sZ7XRhNHSt6aFVnEdeHXzSU4w6rQGPvAf9cyuFF8eWVl7pes7D_hsW2U15J0-T5W4t_yBQIAnkSno827BYSjbcqQ2-Gm1KbHYfO69V-LiMlsOsdRQ-vYSMtwSkjCCiwPRTEjfJUTublFHmusT7-M8sH3_6QGjzJDIenzPCqXA"
    AxiosCenter.getMembers(token)
                  .then(Response=>{
                    console.log(Response.data["hydra:member"])
                  })
                  .catch(error=>{
                    console.log(error)
                  })
  }
  return (
    <div className="App">
      <button onClick={()=>use()}>click</button>
      <Login/>
    </div>
  );
}

export default App;
