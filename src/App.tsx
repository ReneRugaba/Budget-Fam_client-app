import { useEffect} from 'react';
import './App.css';
import { AxiosCenter } from './AxiosCenterRequest';
import Login from './Components/login/Login';


function App() {

  useEffect(() => {
    const token:string="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MjMzMTEwMzMsImV4cCI6MTYyMzMxNDYzMywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidGVzdDEyQHRlc3QuY29tIn0.CyvXbCNHA7-Q6AZS4Fv21Ol85UaGAudZBOVdSm-LA0CAX0QuT51C2Xb_MNbFQI08bZor2Q4aq_APuyQ1qKBThdMDvfp0HxhNXBL62efF103dqmDCMd3LyKsZFYgv6axwhKHsPKgbBqvZAsO7E7UcyIVm1pBZgFrP9D1adXgs6mjFssSR9o2JF4sOPv12pkFCvczb58XEfUPvIl_enCQ66pOe9KUYTe6t1o9Y5weD_lQudAKdQTQayu70UvxEI-79Zu5BHQMLnn-sMDNMlCbzj0bN4T7n6B_2Tn3vXED7wa9MsWpDnT3RG1kKbzSezinqvv-F3g5SmyBW6qZJ-JTDs8EbsA"
    AxiosCenter.getMembers(token)
                  .then(Response=>{
                    console.log(Response.data)
                  })
                  .catch(error=>{
                    console.log(error)
                  })
  },[])
  return (
    <div className="App">
      
      <Login/>
    </div>
  );
}

export default App;
