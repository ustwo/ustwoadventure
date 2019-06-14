const formIsSubmitted = window.location.search && (window.location.search.includes("bot-field=&") || window.location.search.includes("thanks"));

const contactPage = document.createElement("div");
contactPage.className = "contact-content";

contactPage.innerHTML = `

    <h1>${ formIsSubmitted ? "Thanks for gettng in touch" : `Get in touch` }</h1>

    <section class="copy-form-container">

        <div class="copy">

            <p>
                ${ formIsSubmitted
                    ? `We'll read through what you've sent us and follow up via e-mail as soon as
                       possible. Have a great day!`
                    : `To get in touch with us to talk about an investment opportunity, please
                       fill out the form. To contact us about anything else, please send us
                       an email to the address below.`
                }
            </p>

            <p>
               <a href="mailto:hello.adventure@ustwo.com?subject=Hello, Adventure!" target="_blank" rel="noopener">hello.adventure@ustwo.com</a>
            </p>

        </div>

        <form name="investment-contact" action="contact" data-netlify="true" netlify-honeypot="bot-field">

            <p class="hidden">
                <label> Don’t fill this out: <input name="bot-field"> </label>
            </p>

            <p>
                <label for="company"> Company Name <input required type="text" name="company"/> </label>
            </p>

            <p>
                <label for="website"> Website <input required type="text" name="website"/> </label>
            </p>

            <p>
                <label for="tell us about what you do"> Tell us about what you do <textarea rows="3" name="Tell us about what you do"> </textarea> </label>
            </p>

            <p>
                <label for="name"> Your Name <input required type="text" name="name"/> </label>
            </p>

            <p>
                <label for="email"> Email <input required type="email" name="email"/> </label>
            </p>

            <p>
                <input class="button internal" type="submit" value="Submit">
            </p>

        </form>
        
    </div>

`;
