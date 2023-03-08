const logout = async () => {
	const response = await fetch('/api/users/logout', {
		method: 'post',
		body: JSON.stringify({}),
		headers: { 'Content-Type': 'application/json' },
	});
	if (response.ok) {
		document.location.replace('/');
	} else {
		alert(response.statusText);
		console.log(response);
	}
};

document.querySelector('.logoutBtn').addEventListener('click', logout);

