import axios from 'axios';

const API_BASE_ADDRESS = 'http://dummy.restapiexample.com/api/v1';

export default function getUserDataApi() { 
  try{
    const uri = API_BASE_ADDRESS + "/employees";
    const response = getData(uri)
    return response;
    
  } catch(e){
    return {error: e.message};
  }
};

async function getData(uri) {
  const response = await axios.get(uri);
  const data = await response.data.data;
  return data;
}

export async function createUserApi(user) {
  try{
    const uri = API_BASE_ADDRESS + "/create";
    const response = await axios.post(uri, user);
    const data = await response.data.data;
    return data;

  }catch(e){
    return {error: e.message}
  }
}

export async function updateUserApi(user) {
  try{
    const userData = user

    const uri = API_BASE_ADDRESS + "/update/" + user.id;
    const response = await axios.put(uri, {name: user.employee_name, salary: user.employee_salary, age: user.employee_age});
    const data = await response.data;
    if(data.status === "success"){
      return userData;
    }

  }catch(e){
    return {error: e.message}
  }
}