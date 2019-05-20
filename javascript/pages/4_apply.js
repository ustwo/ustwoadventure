const applyPage = document.createElement("div");
applyPage.className = "apply-content";

applyPage.innerHTML = `

    <div class="formdiv">

        <form class="form" name="contact" netlify netlify-honeypot="bot-field" action="thanks">

            <p class="hidden">
                <label>Don’t fill this out: <input name="bot-field"></label>
            </p>

            <div class="form-group">
                <label for="company">Company Name</label> <input required type="text" name="company" />
            </div>

            <div class="form-group">
                <label for="website">Website </label><input required type="text" name="website" />
            </div>

            <div class="form-group">
                <label for="team size">Team size </label><input required type="text" name="team size" />
            </div>

            <div class="form-group">
                <label for="tell us about what you do">Tell us about you and what you do<textarea rows="3" name="Tell us about what you do"></textarea> </label>
            </div>

            <div class="form-group">
                <label for="name">Your Name </label><input required type="text" name="name" />
            </div>

            <div class="form-group">
                <label for="email">Email </label><input required type="email" name="email" />
            </div>

            <div class="form-group">
                <input type="submit" value="Submit">
            </div>

        </form>

    </div>

`;
