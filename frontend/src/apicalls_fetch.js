
const URL_csrf = "http://127.0.0.1:8000/api/csrf/";
const URL_register = "http://127.0.0.1:8000/api/register/";
const URL_login = "http://127.0.0.1:8000/api/login/";
const URL_logout = "http://127.0.0.1:8000/api/logout/";
const URL_whoami = "http://127.0.0.1:8000/api/whoami/";
const URL_todos = "http://127.0.0.1:8000/todos/";
const URL_Origin = "http://127.0.0.1:3000";

export default function getCSRF() {
    console.log("getCSRF");

    fetch(URL_csrf, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            'X-CSRFToken': csrf,
            "Access-Control-Allow-Origin": URL_Origin,
        },
        credentials: "include",
    })
        // // ヘッダから csrf を取得する
        // .then((response) => {
        //     console.log(...response.headers);
        //     let csrfToken = response.headers.get("X-Csrftoken");
        //     console.log("csrfToken=" + csrfToken);
        // })

        // レスポンスデータから csrf を取得する
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            console.log("csrfToken=" + data.csrftoken);
            set_csrf(data.csrftoken);
        })

        .catch((err) => {
            console.log(err);
        });
}


export default function register(event) {
    console.log("register");
    console.log("csrf=" + csrf);

    fetch(URL_register, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            'X-CSRFToken': csrf,
            "Access-Control-Allow-Origin": URL_Origin,
        },
        credentials: "include",
        body: JSON.stringify({ username: username, email: email, password: password }),
    })
        .then((response) => {
            console.log(response);
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
}


export default function login(event) {
    console.log("login");
    console.log("csrf=" + csrf);

    fetch(URL_login, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            'X-CSRFToken': csrf,
            "Access-Control-Allow-Origin": URL_Origin,
        },
        credentials: "include",
        body: JSON.stringify({ email: email, password: password }),
    })
        // .then(isResponseOk)
        .then((response) => {
            // login 時にcsrfTokenを取得し直す必要があるのは関数ビューのときだけ ここから //
            // let csrfToken = response.headers.get("X-Csrftoken");
            // console.log("csrfToken=" + csrfToken);
            // set_csrf(csrfToken);
            // login 時にcsrfTokenを取得し直す必要があるのは関数ビューのときだけ ここまで //
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
}

export default function logout() {
    console.log("logout:csrf=" + csrf);
    fetch(URL_logout, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            'X-CSRFToken': csrf,
            "Access-Control-Allow-Origin": URL_Origin,
        },
        credentials: "include",
    })
        .then((response) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
};


export default function whoami() {
    console.log("whoami:csrf=" + csrf);

    fetch(URL_whoami, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            'X-CSRFToken': csrf,
            "Access-Control-Allow-Origin": URL_Origin,
        },
        credentials: "include",
    })
        .then((response) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
}

export default function todo() {
    console.log("todo:csrf=" + csrf);

    fetch(, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            'X-CSRFToken': csrf,
            "Access-Control-Allow-Origin": URL_Origin,
        },
        credentials: "include",
    })
        .then((response) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
}
