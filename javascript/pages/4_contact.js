const contactPage = document.createElement("div");
contactPage.className = "contact-content";

contactPage.innerHTML = `

    <h1>Get in touch</h1>

    <section class="copy-form-container">

        <div class="copy">

            <p>
                To get in touch with us to talk about an investment opportunity, please
                fill out the form. To contact us about anything else, please send us
                an email to the address below.
            </p>

            <p>
               <a href="mailto:hello.adventure@ustwo.com?subject=Hello, Adventure!" target="_blank" rel="noopener">hello.adventure@ustwo.com</a>
            </p>

        </div>

        <form name="investment-contact" action="/contact-thanks" method="POST" data-netlify="true" netlify-honeypot="bot-field">
            
            <input type="hidden" name="form-name" value="investment-contact"/>
            <label class="hidden"> Don’t fill this out: <input name="bot-field"> </label>

            <label for="company"> Company Name <input required type="text" name="company"/> </label>

            <label for="website"> Website <input required type="text" name="website"/> </label>

            <label for="tell us about what you do"> Tell us about what you do <textarea rows="3" name="Tell us about what you do"> </textarea> </label>

            <label for="name"> Your Name <input required type="text" name="name"/> </label>

            <label for="email"> Email <input required type="email" name="email"/> </label>

            <input class="button internal" type="submit" value="Submit">

        </form>
        
    </div>

`;
