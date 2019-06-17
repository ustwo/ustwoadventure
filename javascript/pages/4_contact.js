const formSubmit = () => {
    const form = document.querySelector("form");
    const h1 = document.querySelector("h1");
    const copy = document.querySelector(".copy p.message");

    form.addEventListener("submit", e => {
        e.preventDefault();

        const data = {};
        for (let i = 0; i < form.length; ++i) {
            const input = form[i];
            if (input.name) {
                data[input.name] = input.value;
            }
        }

        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action, true);
        xhr.setRequestHeader("Accept", "application/json; charset=utf-8");
        xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
        xhr.send(JSON.stringify(data));

        xhr.onloadend = response => {
            if (response.target.status === 0) {
                h1.textContent = "Error";
                copy.innerHTML = form.dataset.formError;
            } else if (response.target.status === 400 || response.target.status === 404) {
                h1.textContent = "Error";
                copy.innerHTML = JSON.parse(responseText).error;
            } else if (response.target.status === 200) {
                h1.textContent = "Thanks for getting in touch";
                copy.textContent = `We'll read through what you've sent us and follow up via
                                    e-mail as soon as possible. Have a great day!`;

                for (let i = 0; i < form.length; ++i) {
                    const input = form[i];
                    input.disabled = true;
                }
            }

            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        };
    });
};




const contactPage = document.createElement("div");
contactPage.className = "contact-content";

contactPage.innerHTML = `

    <h1>Get in touch</h1>

    <section class="copy-form-container">

        <div class="copy">

            <p class="message">
                To get in touch with us to talk about an investment opportunity, please
                fill out the form. To contact us about anything else, please send us
                an email to the address below.
            </p>

            <p>
               <a href="mailto:hello.adventure@ustwo.com?subject=Hello, Adventure!" target="_blank" rel="noopener">hello.adventure@ustwo.com</a>
            </p>

        </div>

        <form name="investment-contact" action="/" method="POST" data-netlify="true" netlify-honeypot="bot-field">
            
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
