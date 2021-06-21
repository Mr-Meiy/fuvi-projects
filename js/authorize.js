const usersAapi = 'https://60cf9e924a030f0017f67dc3.mockapi.io/api/zenprojectlist/users';
//Authorization
{
    var authorize = async() => {
            fetch(usersAapi, {
                    method: 'GET'
                })
                .then(response => response.json())
                .then(data => {
                    let cred = verifyCredentials(data);
                    if (cred[0]) {
                        localStorage.setItem("user", cred[1]);
                        window.location.href = './mentor.html';
                        document.getElementById('mentorname').innerText = localStorage.getItem("user");
                    } else {
                        alert("Invalid Credentials");
                    }
                })
                .catch(err => console.log(err));
        }
        // Verification of Credentials
    var verifyCredentials = (data) => {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let isAuthenticated = false;
        let authorizedUser = "";
        data.some(datum => {
            if (datum.userName === username && datum.userPassword === password) {
                isAuthenticated = true;
                authorizedUser = datum.userName;
            }
        })
        return [isAuthenticated, authorizedUser];
    }
}
//Logout
{
    var logout = () => {
        localStorage.removeItem("user");
        window.location.href = './login.html';
    }
}