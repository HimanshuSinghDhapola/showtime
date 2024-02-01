import React, { useEffect } from "react";
import "./Form.css";
import background from "../../assets/background.png";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/fetch-data.js";
import Loading from "../loading/Loading.jsx";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function SignUp(){
    const {id} = useParams();
    const {data, loading} = useFetchData(`https://api.tvmaze.com/shows/${id}`)

    const[formData, setformData] = React.useState({
        userName: "",
        email: "",
        date: ""
    })

    useEffect (() => {
        if(!loading){
            setformData({...formData, 
                movie: data.name
            })
        }
    }, [loading])

    function handleChange(event){
        const {name, value} = event.target;
        setformData(prevformData => {
            return{
                ...prevformData,
                [name]: value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        // console.log(formData);
        const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];
        if(storedFormData.map((v) => {return v.email == formData.email && v.userName == formData.user && v.date == formData.date && v.movie == formData.movie})){
            alert("Duplicate record");
        }else{
            storedFormData.push(formData);
            localStorage.setItem('formData', JSON.stringify(storedFormData));
        }
        
    }

    if (loading){
        return (<Loading/>);
    }
    return(
        <div className="form-container" style={{backgroundImage: `url(${background})`}}>
            <form style={{backgroundImage: `url(${background})`}} onSubmit={handleSubmit}>
                <i className="material-icons">account_circle
                    <input
                        type="text"
                        placeholder="Username"
                        id="userName"
                        onChange={handleChange}
                        name="userName"
                        value={formData.userName}
                    />
                </i>
                <i class="material-icons">mail
                    <input
                        type="email"
                        placeholder="Email"
                        id="emailId"
                        onChange={handleChange}
                        name="email"
                        value={formData.email}
                    />
                </i>
                <i className="material-icons">movie
                    <input
                        type="text"
                        id="movie"
                        onChange={handleChange}
                        name="movie"
                        value={formData.movie}
                        readOnly
                    />
                </i>
                <i className="material-icons">calendar_month
                    <input
                        type="date"
                        placeholder="Select the Date"
                        id="date"
                        onChange={handleChange}
                        name="date"
                        value={formData.date}
                    />
                </i>
                <i className="material-icons">input <button>Book ticket</button> </i>
            </form>
        </div>
    )
}