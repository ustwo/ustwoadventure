const contactThanksPage = document.createElement("div");
contactThanksPage.className = "contact-content";

contactThanksPage.innerHTML = `

    <h1>Thanks for gettng in touch</h1>

    <section class="copy-form-container">

        <div class="copy">

            <p>
                We'll read through what you've sent us and follow up via e-mail as soon as
                possible. Have a great day!
            </p>

            <p>
               <a href="mailto:hello.adventure@ustwo.com?subject=Hello, Adventure!" target="_blank" rel="noopener">hello.adventure@ustwo.com</a>
            </p>

        </div>

        <form>
            
            <input disabled type="hidden" name="form-name" value="investment-contact"/>
            <label class="hidden"> Don’t fill this out: <input disabled name="bot-field"> </label>

            <label for="company"> Company Name <input disabled required type="text" name="company"/> </label>

            <label for="website"> Website <input disabled required type="text" name="website"/> </label>

            <label for="tell us about what you do"> Tell us about what you do <textarea disabled rows="3" name="Tell us about what you do"> </textarea> </label>

            <label for="name"> Your Name <input disabled required type="text" name="name"/> </label>

            <label for="email"> Email <input disabled required type="email" name="email"/> </label>

            <input disabled class="button internal" type="submit" value="Submit">

        </form>
        
    </div>

`;
