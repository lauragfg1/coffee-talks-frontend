import React, { useState, useEffect } from 'react';
import Button from '../button/Button';

function RandomUserButton({ setSelectedUser }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/user/getAll", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    const handleRandom = () => {
        if (users.length > 0) {
            const randomUser = users[Math.floor(Math.random() * users.length)];
            setSelectedUser(`${randomUser.name} ${randomUser.surname}`);
            console.log("Selected User:", `${randomUser.name} ${randomUser.surname}`);
        }
    };

    return (
        <Button onClick={handleRandom}>Random</Button>
    );
}

export default RandomUserButton;