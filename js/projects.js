let data = [{ id: 1, project: "BGcolor changer", addedby: "zen" },
    { id: 2, project: "Dark them to light theme switcher", addedby: "zen" },
    { id: 3, project: "Random Quotes", addedby: "zen" },
    { id: 4, project: "Display local time", addedby: "zen" },
    { id: 5, project: "Word Count Calculator", addedby: "zen" },
    { id: 6, project: "Place order", addedby: "zen" },
    { id: 7, project: "Week of day", addedby: "zen" },
    { id: 8, project: "Hangman", addedby: "zen" },
    { id: 9, project: "Counter", addedby: "zen" },
    { id: 10, project: "Uber cost Calculator", addedby: "zen" },
    { id: 11, project: "BMI Calculator", addedby: "zen" },
    { id: 12, project: "Weight to Pounds", addedby: "zen" },
    { id: 13, project: "Currency converter", addedby: "zen" },
    { id: 14, project: "Miles to KM converter", addedby: "zen" },
    { id: 15, project: "XKCD password generator", addedby: "zen" },
    { id: 16, project: "Budget application", addedby: "zen" },
    { id: 17, project: "Mortgage Calculator", addedby: "zen" },
    { id: 18, project: "Image slider", addedby: "zen" },
    { id: 19, project: "Calculator", addedby: "zen" },
    { id: 20, project: "Todo list", addedby: "zen" },
    { id: 21, project: "Flash card", addedby: "zen" },
    { id: 22, project: "Image Slider", addedby: "zen" },
    { id: 23, project: "Quiz project", addedby: "zen" },
    { id: 24, project: "Javascript time line", addedby: "zen" },
    { id: 25, project: "Palindrome checker", addedby: "zen" },
    { id: 26, project: "Vanilla Count down timer", addedby: "zen" },
    { id: 27, project: "Analog Clock", addedby: "zen" },
    { id: 28, project: "Video background project", addedby: "zen" },
    { id: 29, project: "Whack a mole", addedby: "zen" },
    { id: 30, project: "Memory flip game", addedby: "zen" },
    { id: 31, project: "Color picker", addedby: "zen" },
    { id: 32, project: "Shopping cart", addedby: "zen" },
    { id: 33, project: "Virtual Keyboard", addedby: "zen" },
    { id: 34, project: "Weather app", addedby: "zen" },
    { id: 35, project: "Rock paper Scissors", addedby: "zen" },
    { id: 36, project: "Tic Tac Toe", addedby: "zen" },
    { id: 37, project: "Recipe display from dropdown", addedby: "zen" },
    { id: 38, project: "Voting app", addedby: "zen" },
    { id: 39, project: "Book availability finder", addedby: "zen" },
    { id: 40, project: "Video player app", addedby: "zen" },
    { id: 41, project: "OTP Manager", addedby: "venkat" },
    { id: 42, project: "Simple Blogger App", addedby: "venkat" },
    { id: 43, project: "Diary Manager", addedby: "venkat" },
    { id: 44, project: "Attendance Portal", addedby: "venkat" },
    { id: 45, project: "Ecommerce Application", addedby: "venkat" },
    { id: 46, project: "Bike Rental Portal", addedby: "venkat" },
    { id: 47, project: "Movie Ticket Application", addedby: "venkat" },
    { id: 48, project: "Student Task Submission Portal", addedby: "venkat" },
    { id: 49, project: "Bookkeeping App", addedby: "venkat" },
    { id: 50, project: "Online Music Player", addedby: "venkat" },
    { id: 51, project: "Stack overflow Clone", addedby: "venkat" },
    { id: 52, project: "Motorcycle Service Booking App", addedby: "venkat" },
    { id: 53, project: "CMS", addedby: "venkat" },
    { id: 54, project: "Airbnb Clone", addedby: "venkat" },
    { id: 55, project: "Flight Ticket Booking App", addedby: "venkat" },
    { id: 56, project: "Dynamic portfolio with export to PDF", addedby: "venkat" },
    { id: 57, project: "Pinterest Clone", addedby: "venkat" },
    { id: 58, project: "Fitness Logger", addedby: "venkat" },
    { id: 59, project: "Youtube Clone", addedby: "venkat" },
    { id: 60, project: "Zoom Clone", addedby: "venkat" },
    { id: 61, project: "Zendesk clone", addedby: "venkat" },
    { id: 62, project: "Kitchen Recipe management", addedby: "RV" },
    { id: 63, project: "Gold rate calculator", addedby: "RV" },
    { id: 64, project: "Pettycash manager", addedby: "RV" },
    { id: 65, project: "Diet suggestion app", addedby: "RV" },
    { id: 66, project: "A media streaming application with media upload and stream features", addedby: "Varghese" },
    { id: 67, project: "Capacity planning tool for an office", addedby: "Varghese" },
    { id: 68, project: "A simple social media application with users, posts, likes and comments", addedby: "Varghese" },
    { id: 69, project: "Inventory / asset management tool", addedby: "Varghese" },
    { id: 70, project: "social media management tool", addedby: "Varghese" },
    { id: 71, project: "Project Management Tool", addedby: "Varghese" },
    { id: 72, project: "CRM", addedby: "Varghese" },
    { id: 73, project: "React Markdown Viewer", addedby: "Venkat" },
    { id: 74, project: "Food Token generator for inhouse", addedby: "RV" },
    { id: 75, project: "Daily Dress colour suggestions for women", addedby: "RV" }
];

// Contributors Select
{
    var updateSelect = () => {
        let selected = []
        let contributorList = document.getElementsByName('contributor');
        for (let contributor of contributorList) {
            if (contributor.checked) {
                selected.push(contributor.value)
            }
        }
        // console.log(selected);
        updateFilter(selected)
    }
    let contributors = (() => {
        let res = [];
        data.map(datum => {
            res.push(datum.addedby)
        })
        return [...new Set(res)];
    })()
    let contributorsHTML = ``;
    contributors.map(contributor => {
        contributorsHTML += `<div class="form-group form-check">
                            <input type="checkbox" class="form-check-input bg-primary" id="${contributor}" name="contributor" value="${contributor}" onchange="updateSelect()">
                            <label class="form-check-label" for="${contributor}">${contributor}</label>
                        </div>`
    })
    document.getElementById('contributors').innerHTML = contributorsHTML;
}

// Event onclick Cards
let description = (pname) => {
    //alert(pname);
}

// Project Cards
{
    var updateFilter = (selected) => {
        let resData = data;
        if (selected && selected.length != 0) {
            resData = data.filter(datum => {
                for (i = 0; i < selected.length; i++) {
                    if (datum.addedby.includes(selected[i])) {
                        return true;
                        break;
                    }
                }
            })
        }
        let projectHTML = ``;
        let modalHTML = ``;
        resData.map(datum => {
            projectHTML += `<div class="col-xl-4 col-md-6 mb-4 h-250 d-flex">
                    <div class="card border-primary shadow flex-fill h-200 py-2" onclick="description('${datum.project}')" data-toggle="modal" data-target="#modal${datum.id}">
                        <div class="card-header text-sm font-weight-bold text-primary text-uppercase mb-1 bg-white">
                        ${datum.id}. ${datum.project}
                        </div>
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                    <div class="text-sm mb-0 text-gray-800">
                                        <b>Description:</b> Project Description is a formally written declaration of the project and its idea and context to explain the goals and objectives to be reached.
                                    </div>
                                    <div class="text-xs font-weight-bold text-primary mt-3">
                                        Contributor: ${datum.addedby}   
                                    </div>
                                </div>
                            </div>
                        <div class="card-footer text-xsm text-primary mb-1 bg-white">
                            <span class="badge badge-pill badge-info">HTML</span>
                            <span class="badge badge-pill badge-info">CSS</span>
                            <span class="badge badge-pill badge-info">Javascript</span>
                        </div>
                    </div>
                </div>`;
            document.getElementById('projects').innerHTML = projectHTML;
            modalHTML += `<div class="modal fade" id="modal${datum.id}">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">${datum.id}. ${datum.project}</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                            <div class="px-3">
How to implement it?<br/>
• Design an application to track details of students in an oraganisation.<br/>
• The authentication functionality should be included.<br/>
• Students can view their details and Admin can edit the functionality in application.<br/>
• Each and every data should be stored in DB.<br/>
• Use Reactjs for the frontend to implement a responsive UI with the look and feel.<br/><br/>

Specification on Design:<br/>
• Backend:Node JS<br/>
• Frontend: React JS<br/>
• Database:MongoDB<br/>

                            </div>
                            <div class="py-3 text-md font-weight-bold text-primary mb-1">
                                Contributor: ${datum.addedby}   
                            </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>`
        });

        document.getElementById('modals').innerHTML = modalHTML;

    };
    updateFilter();
}

// Search Functionality
{
    var searchData = () => {
        var search = document.getElementById('search').value;

    }
}