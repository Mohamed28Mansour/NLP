const handleSubmit = (e) => {
    e.preventDefault();
    console.log('click')

    let url = document.getElementById('article-url').value;
    console.log(url)

    // if (Client.urlChecker(url)){
    //     const requestOptions = {
    //         method: 'POST',
    //         body: url,
    //         redirect: 'follow'
    //     };
    //     fetch("http://localhost:8081/submit", requestOptions)
    //         .then((response)=> {
    //             console.log(response)
            //     document.getElementById('text').innerHTML = response.text
            //     document.getElementById('agreement').innerHTML = response.agreement
            //     document.getElementById('subjectivity').innerHTML = response.subjectivity
            //     document.getElementById('confidence').innerHTML = response.confidence
            //     document.getElementById('irony').innerHTML = response.irony
            //     document.getElementById('score_tag').innerHTML = response.score_tag        

    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }  else {
    //     alert('Please enter a valid URL...')
    // } 
}

export {handleSubmit}