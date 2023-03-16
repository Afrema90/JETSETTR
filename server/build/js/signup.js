const signUp = async (e) => {
    e.preventDefault();
    const username = document.getElementById('signUsername').value.trim();
    const password1 = document.getElementById('signPW1').value.trim();
    const password2 = document.getElementById('signPW2').value.trim();
    
    if(username && password1 && password2) {

        if(password1 == password2) {
        const password = password1;
        const res = await fetch('/api/users/', {
            method: 'POST',
            body: JSON.stringify({
                username: username, password: password
            }),
            headers: {'Content-Type': 'application/json'}
        });
        if(res.ok){
            document.location.replace('/thankyou');
        } else {
            console.log(res.statusText);
        }
    }
 } 
}


document.getElementById('signUp').addEventListener("click", signUp);