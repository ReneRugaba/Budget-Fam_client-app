import './App.css';
import { AxiosCenter } from './AxiosCenterRequest';


function App() {

  const use=() => {
    const token:string="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MjMyNTk5MTksImV4cCI6MTYyMzI2MzUxOSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidGVzdDEyQHRlc3QuY29tIn0.CCNRb0tnfMjOQTPRKL1Ap2NMpEJspNnq6bafBxgUs3ZqUSM-jhr_m_kLMJJpr6K7dduoZzVqIGSgJSmKc5EXvahA5Ke8AKHvLtHhFt9agjGoY9mdtim4eOgcOBziI6XF2VbrEoQjKSfXVJ4VtH6ktwlG1wlnm_MWAu5pPu9xJaV4baZYb3Ly-c1y1EDYIxfjNFcgGjzq8mbdZ0E5fY4mPym7VkfKtvP_DrX5vBW9BKPlozGIOp4iFfkpidjH4lJ_IN8vUJwcLKGxHDeHPnFx-pWJcknDz1H9ZVuhKveCVyRwlM2bRzmXmup-82oBY4ErbwXDTZ-QjVeq9taIL-gzE1YGAA"
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
    </div>
  );
}

export default App;
