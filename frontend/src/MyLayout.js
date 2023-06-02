import React from 'react';
import { Button, TextField, Box, Snackbar } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { MyContext } from "./App";
import { APICALL_login } from "./apicalls_axios";

export default function MyLayout(props) {
    const navigate = useNavigate();
    const { contextVal, setContextVal } = React.useContext(MyContext);
    const { children, status403 } = props;

    const [openSnackbar, setOpenSnackbar] = React.useState(false);

    React.useEffect(() => {
        if (status403) {
            setOpenSnackbar(true);
        }
    }, [status403])

    function onCloseSnackbar(e) {
        setOpenSnackbar(false);
        navigate("/page01");
    }


    return (
        <>
            <Box >
                {children}
            </Box>

            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={openSnackbar}
                autoHideDuration={2000}
                onClose={onCloseSnackbar}
                message="loginしてません。リダイレクトします。"
            />
        </>
    );
}

