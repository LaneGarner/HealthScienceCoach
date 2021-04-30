import { useState } from "react";
import "./Contact.scss";

export const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`name: ${name} email: ${email} message: ${message}`);
    };
    return (
        <div className="page-container">
            <h1>Contact</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                nobis explicabo accusantium. Expedita libero tenetur eius,
                blanditiis commodi soluta hic?
            </p>
            <form netlify name="contact" method="POST" onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name:
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        required
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
                    <input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        type="text"
                        name="message"
                        placeholder="Enter your message"
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
