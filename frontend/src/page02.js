import React from 'react';
import { Button, TextField, Box, Snackbar } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { MyContext } from "./App";
import MyLayout from "./MyLayout";
import { APICALL_whoami, APICALL_logout } from "./apicalls_axios";

export default function Page01() {
  const navigate = useNavigate();
  const { contextVal, setContextVal } = React.useContext(MyContext);
  const csrf = contextVal.csrftoken;

  const [status403, setStatus403] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState("");

  function onBtnToPage01(e) {
    navigate("/page01")
  }
  function onBtnSetContextVal1(e) {
    setContextVal({ ...contextVal, counter1: contextVal.counter1 + 1 });

  }
  function onBtnWhoAmI(e) {
    APICALL_whoami(callbackS_whoami, callbackE_common, csrf);
  }
  function onBtnLogout(e) {
    APICALL_logout(callbackS_logout, callbackE_common, csrf);
  }

  function callbackS_whoami(response) {
    setUserInfo(JSON.stringify(response.data));
  }
  function callbackS_logout(response) {
    sessionStorage.removeItem('mytoken');

  }
  function callbackE_common(error) {
    if (error.response) {
      if (error.response.status) {
        if (error.response.status == 403) {
          setUserInfo("loginしてない");
          setStatus403(true);
        }
      }
    }
  }

  return (
    <MyLayout status403={status403}>
      <h2>Page02 WhoAmI</h2>

      <Box sx={{ display: "flex", flexDirection: "column", width: "60%" }}>
        <Box>{JSON.stringify(contextVal)}</Box>
        <Button variant="contained" onClick={onBtnToPage01} sx={{ mt: 2 }}>Page01へ</Button>
        <Button variant="contained" onClick={onBtnSetContextVal1} sx={{ mt: 2 }}>Contextに値を設定</Button>
        <Button variant="contained" onClick={onBtnWhoAmI} sx={{ mt: 2 }}>WhoAmI</Button>
        <TextField variant="filled" size="small" value={userInfo} />
        <Button variant="contained" onClick={onBtnLogout} sx={{ mt: 2 }}>Logout</Button>
      </Box>
    </MyLayout>
  );
}

