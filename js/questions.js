const currentUser = localStorage.getItem("user");
document.querySelector('.mentorname').innerHTML = currentUser
const projectsApi = 'https://60cf9e924a030f0017f67dc3.mockapi.io/api/zenprojectlist/projects';
//Upload Project
{
    var uploadProject = async() => {
        fetch(projectsApi, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(await getProjectDetails()),
            })
            .then(response => response.json())
            .then(data => {
                alert("success");
                document.getElementById('projectname').value = '';
                document.getElementById('type').value = '';
                document.getElementById('description').value = '';
                document.getElementById('languages').value = '';
            })
            .catch(err => console.log(err));
    }
    var getProjectDetails = () => {
        let projectName = document.getElementById('projectname').value;
        let projectType = document.getElementById('type').value;
        let description = document.getElementById('description').value;
        let languages = () => {
            let langInput = document.getElementById('languages').value.split(',').map(ele => ele.trim());
            return [...langInput];
        };
        let creator = currentUser;
        let data = {
            "projectName": projectName,
            "description": description,
            "creator": creator,
            "projectType": projectType,
            "languages": languages()
        };

        return data;
    }
}