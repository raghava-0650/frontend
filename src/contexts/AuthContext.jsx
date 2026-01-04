import {
  createContext,
  useContext,
  useState,
} from 'react';

export const AuthContext = createContext({});

const client = axios.create({
    baseURL:"http:localhost:8000/api/v1/users"
})

export const AuthProvider = ({children}) =>{
    const authcontext = useContext(AuthContext);

    const [userData, setUserData] = useState(authcontext);


    const handleregester = async(name, username, password)=>{
        try {
            let request = await client.post("/regester",{
                name: name,
                username: username,
                password: password,
            })

            if(request.status === httpStatus.CREATED){
                return request.data.message;
            }
        } catch (error) {
            throw error;
        }
    }

    const handlelogin = async(username, password)=>{
        try {
            let request = await client.post("/login", {
                username: username,
                password: password,
            });

            if(request.status === httpStatus.OK){
                localStorage.setItem("token",request.data.token);
            }
        } catch (error) {
            
        }
    }

    const router = useNavigate();

    const data = {
        userData,setUserData,handleregester,handlelogin
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )


}