console.log('-- about.js started --');

var feedbacks = "<P>Все отзывы:</p>";

//в этой функции нет большого смысла, но в задании просили сделать функцию со стрелочкой. Вот она.
const func = feedbacks => document.getElementById("allFeedbacks").innerHTML = feedbacks;
func(feedbacks);


function CheckBoxClickProcessing(checkBoxId) {
    let checkBox = document.getElementById(checkBoxId);
    let feedbackForm = document.getElementById("feedbackForm");
    if (checkBox.checked == true) {
        feedbackForm.style.display = "block";
    } else {
        feedbackForm.style.display = "none";
    }
}

// Adding userName and feedbackContent to allFeedbacks
function SubmitFeedback(userName, feedbackContent, allFeedbacks) {
    console.log('-- SubmitFeedback started --');
    let name = document.getElementById(userName).value;
    let content = document.getElementById(feedbackContent).value;

    if (name == "" || content == "") return; //Пустые отзывы нам не нужны

    let date = new Date().toUTCString(); 
    feedbacks += '<p> Добавлено ' + date + ' пользователем ' + name + '</p><p><pre>' + content + '</pre></p>';
    document.getElementById(allFeedbacks).innerHTML = feedbacks;

    document.getElementById(userName).value = "";
    document.getElementById(feedbackContent).value = "";
}

