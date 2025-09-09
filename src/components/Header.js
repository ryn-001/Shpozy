import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import './Header.css';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {Aavtar,Button,Stack} from "@mui/material";
import Register from './Register'

const Header = ({ children, hasHiddenButtons }) => {
    const navigate = useNavigate();
    const username = localStorage.getItem("username");

    return (
        <div className="header-wrapper">
            <Box className="header">
                <Box className="header-title">
                    <img className="header-logo" src="/assets/shopzyLightTheme.png" alt="shopzy-light-theme-logo"></img>
                </Box>

                <Box className="buttons">
                    {hasHiddenButtons ? (
                        <Button
                            className="expore-button"
                            startIcon={<ArrowBackIcon/>}
                            variant="text"
                            onClick={() => {
                                navigate("/")
                            }}
                        ></Button>
                    ) : (
                    <Stack>

                    </Stack>)}
                </Box>
            </Box>
        </div>
    )
}

export default Header;