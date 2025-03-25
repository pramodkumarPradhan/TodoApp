import { useState } from "react";

export function Regular() {
    const [password] = useState(prompt("enter password"));
    return (
        <p>
            {
               password.match(/()/)
            }
        </p>
    );
}