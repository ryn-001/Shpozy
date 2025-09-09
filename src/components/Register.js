import React,{useState} from "react";
import Box from "@mui/material/Box";
import {Button,CircularProgress,TextField,Stack} from "@mui/material";

const Register = () => {

    const [formData,setFormData] = useState({
        username : "",
        password : "",
        confirmPassword : ""
    })

    const [loading,setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const handleRegister = () => {

    }

    return(
        <Box display="flex" justifyContent="space-between" flexDirection="column">
            <Header/>

            <Box className="content">
                <Stack spacing={2} className="form">
                    <h2 className="register">Register</h2>
                        <TextField
                            id="username"
                            label="Username"
                            value={formData.username}
                            onChange={handleChange}
                            name="username"
                            variant="outlined"
                            title="username"
                            placeholder="Enter username"
                            fullWidth
                        />

                        <TextField
                            id="password"
                            label="Password"
                            value={formData.password}
                            onChange={handleChange}
                            name="password"
                            variant="outlined"
                            title="password"
                            placeholder="Enter password"
                            type="password"
                            fullWidth
                        />

                        <TextField
                            id="confirmPassword"
                            label="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            name="confirmPassword"
                            variant="outlined"
                            title="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                            fullWidth
                        />

                        {loading ? <CircularProgress size={24} /> 
                            : (<Button
                                    className="button"
                                    variant="contained"
                                    onClick={handleRegister}
                                >Register Now</Button>)
                        }

                        <p className="secondary-action">
                            Already have an account ? {" "}
                            <Link to="/login" onClick={handleRegister}>
                                Login Here
                            </Link>
                        </p>
                        
                </Stack>
            </Box>

        </Box>
    )
}

export default Register;