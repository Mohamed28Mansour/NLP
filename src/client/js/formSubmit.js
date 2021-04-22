function handleSubmit(e) {
    e.preventDefault();

    let url = document.getElementById('article-url').value;

    if (Client.urlChecker(url)){

        const requestOptions = {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(url)
        };
        console.log(requestOptions)

        fetch("http://localhost:8081/submit", requestOptions)
            .then((response)=> {
                console.log(response)
                document.getElementById('text').innerHTML = response.text
                document.getElementById('agreement').innerHTML = response.agreement
                document.getElementById('subjectivity').innerHTML = response.subjectivity
                document.getElementById('confidence').innerHTML = response.confidence
                document.getElementById('irony').innerHTML = response.irony
                document.getElementById('score_tag').innerHTML = response.score_tag        

            })
            .catch((err) => {
                console.log(err);
            });
    }  else {
        alert('Please enter a valid URL...')
    } 
}

export {handleSubmit}