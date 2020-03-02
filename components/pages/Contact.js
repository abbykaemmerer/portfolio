export default () => `
<section id="contact">
<div class="borderz">
    <div class="hey">
        <h1 class="title">Say Hey!</h1>
        <hr>
        <br><br>
        <form action="https://formspree.io/kaemmerer.abby@gmail.com" method="POST" class="container" id="contact-form" >
            <div id="form">
                <span>
                    <label for="name">Name</label>
                    <input type="text" id="name" name="userName" />
                </span>
                <span>
                    <label for="user-email">Email</label>
                    <input
                        type="email"
                        name="userEmail"
                        id="user-email"
                        placeholder="hansolo@thefalcon.com"
                    />
                </span>
                <span>
                    <label for="fone">Phone</label>
                    <input type="tel" name="userFone" id="fone" />
                </span>
            </div>
            <div id="text" class="flex flex--column">
                <label for="msg">Message</label>
                <textarea name="msg" id="msg" cols="50" rows="5"></textarea>
            </div>
            <div class="buttons">
                <input type="submit" value="Send Message" />
                <input type="reset" value="Clear Form" />
            </div>
        </form>
    </div>
</div>
</section>

`;
