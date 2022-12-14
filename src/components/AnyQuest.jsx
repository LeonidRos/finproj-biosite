
function AnyQuest(){

    return(
        <section id="any" className="any">

            <h2 className="prime_h2">Any questions?</h2>

            <div className="wrapper">
                <div className="any__form">

                    <form method="POST">
                        <input type="text" name="name" placeholder="Your name" required/>
                        <input type="tel" name="phone" placeholder="Your telephone number" required/>
                        <textarea type="text" name="question" placeholder="Your question"/>
                        <button className="prime_btn" type="">Send</button>
                    </form>

                </div>

                <div className="any__description">

                    Write to us and we will be sure to answer all your questions and give you a comprehensive consultation.

                </div>
            </div>

        </section>
    );
}

export default AnyQuest;