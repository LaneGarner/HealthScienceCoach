import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

import "./Contact.scss";

const encode = (data) => {
    return Object.keys(data)
        .map(
            (key) =>
                encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
};

export const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(`name: ${name} email: ${email} message: ${message}`);
    // };

    const handleSubmit = (e) => {
        // let dataPack = { "name": name, "email": email, "message": message }
        // console.log("dataPack", dataPack)
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": "contact",
                name: name,
                email: email,
                message: message,
            }),
        })
            .then(() => alert("Success!"))
            .catch((error) => alert(error));

        // setSuccess(true);

        e.preventDefault();
    };
    return (
        <div className="page-container contact-container">
            <h1>Contact</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                nobis explicabo accusantium. Expedita libero tenetur eius,
                blanditiis commodi soluta hic?
            </p>
            <form name="contact" method="POST" onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name:
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        required
                        autoFocus
                    />
                </label>
                <label htmlFor="email">
                    Email:
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                    />
                </label>
                <label htmlFor="message">
                    Message:
                    <TextareaAutosize
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        name="message"
                        placeholder="Enter your message"
                    />
                </label>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};
