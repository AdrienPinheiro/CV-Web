import React from "react";



const Contact = () => {

    return(
        <div className="contact">
            <div className="formulaire">
                <h2>Contactez-moi !</h2>
                <form action="" id="">
                    <label htmlFor="email">Email</label>
                    <br/>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        //onChange={(e) => setEmail(e.target.value)}
                        //value={email}
                    />
                    <div className="email-error"></div>
                    <br/>
                    <label htmlFor="email">Confirmer email</label>
                    <br/>
                    <input
                        type="text"
                        name="second_email"
                        id="second_email"
                        //onChange={(e) => setSecondEmail(e.target.value)}
                        //value={second_email}
                    />
                    <div className="second-email-error"></div>
                    <br/>
                    <label htmlFor="">Sujet</label>
                    <br/>
                    <input 
                        type="text"
                        name="sujet"
                        id="sujet"
                        //onChange={(e) => setSujet(e.target.value)}
                        //value={sujet}
                    />
                    <div className="sujet-error"></div>
                    <br/>
                    <label htmlFor="">Message</label>
                    <br/>
                    <input 
                        type="text"
                        name="message"
                        id="message"
                        //onChange={(e) => setMessage(e.target.value)}
                        //value={message}
                    />
                    <div className="message-error"></div>
                    <br/>
                    <input type="submit" value="Envoyer"/>
                </form>
            </div>
        </div>
    )

}

export default Contact;