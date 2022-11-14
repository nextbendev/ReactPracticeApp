import React, {useState} from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css"
import Button from "../UI/Button";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
       
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if (+enteredAge < 1 ) {
            return;
        }
        console.log("n& a", enteredAge, enteredUsername);

        props.onAddUser(enteredUsername, enteredAge);
        setEnteredAge('');
        setEnteredUsername('');
    };
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    };

    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">UserName</label>
                <input 
                    id="username" 
                    type="text" 
                    onChange={usernameChangeHandler}
                    value={enteredUsername}
                />
                <label htmlFor="age">Age (years)</label>
                <input 
                    id="age" 
                    type="text" 
                    onChange={ageChangeHandler}
                    value={enteredAge}
                />
                <Button type="submit">Add User</Button>
            </form>
            
        </Card>
    );
};

export default AddUser;