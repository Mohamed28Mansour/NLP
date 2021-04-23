import axios from 'axios';

function handleSubmit(e) {
    e.preventDefault();

    let url = document.getElementById('article-url').value;

    if (Client.urlChecker(url)){

        // const requestOptions = {
        //     method: 'POST',
        //     credentials: 'same-origin',
        //     mode: 'no-cors',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({url: url})
        // };

        axios.post("http://localhost:8081/submit", {url})
            .then((response)=> {
                // console.log(response)
                document.getElementById('text').innerHTML = response.data.text
                document.getElementById('agreement').innerHTML = response.data.agreement
                document.getElementById('subjectivity').innerHTML = response.data.subjectivity
                document.getElementById('confidence').innerHTML = response.data.confidence
                document.getElementById('irony').innerHTML = response.data.irony
                document.getElementById('score_tag').innerHTML = response.data.score_tag        

            })
            .catch((err) => {
                console.log(err);
            });
    }  else {
        alert('Please enter a valid URL...')
    } 
}

export {handleSubmit}