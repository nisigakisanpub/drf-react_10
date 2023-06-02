import React from 'react';
import { Button, TextField, Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { MyContext } from "./App";
import MyLayout from "./MyLayout";
import { APICALL_login } from "./apicalls_axios";

export default function Page01() {
  const navigate = useNavigate();
  const { contextVal, setContextVal } = React.useContext(MyContext);

  const [username, set_username] = React.useState("");
  const [email, set_email] = React.useState("");
  const [password, set_password] = React.useState("");
  const [errorMsg, set_error] = React.useState("");

  function onBtnToPage02(e) {
    navigate("/page02")
  }
  function onBtnSetContextVal1(e) {
    setContextVal({ ...contextVal, counter1: contextVal.counter1 + 1 });
  }
  function onBtnLogin(e) {
    APICALL_login(email, password, callbackS_login, callbackE_login);
  }

  function callbackS_login(response) {
    if (response.data.status == "OK") {
      setContextVal({ ...contextVal, csrftoken: response.data.csrftoken });
      sessionStorage.setItem('mytoken',response.data.csrftoken);
      set_error("")
      navigate("/page02")
    }
    else {
      set_error(response.data.message);
    }
  }
  function callbackE_login(error) {
  }

  return (
    <MyLayout>
      <h2>Page01 login</h2>

      <Box sx={{ display: "flex", flexDirection: "column", width: "60%" }}>
        <Box>{JSON.stringify(contextVal)}</Box>
        <Button variant="contained" onClick={onBtnToPage02} sx={{ mt: 2 }}>Page02へ</Button>
        <Button variant="contained" onClick={onBtnSetContextVal1} sx={{ mt: 2 }}>Contextに値を設定</Button>
        <Box sx={{ display: "flex", flexDirection: "row", mt: 2 }}>
          <Box sx={{ width: "20%" }}>email</Box>
          <TextField variant="filled" size="small" onChange={(e) => set_email(e.target.value)} />
          <Box sx={{ width: "30%" }}>user1@example.com</Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", mt: 2 }}>
          <Box sx={{ width: "20%" }}>password</Box>
          <TextField variant="filled" size="small" onChange={(e) => set_password(e.target.value)} />
          <Box sx={{ width: "30%" }}>user1pass</Box>
        </Box>
        <Button variant="contained" onClick={onBtnLogin} sx={{ mt: 2 }}>login</Button>
        <TextField variant="filled" size="small" value={errorMsg} />
      </Box>
    </MyLayout>
  );
}

