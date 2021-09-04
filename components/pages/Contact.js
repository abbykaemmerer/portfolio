export default (state) => `
<section id="contact">
<div class="borderz">
    <div class="hey">
        <h1 class="title">${state.title}</h1>
        <hr>
        <br><br>
        <section class="form" id="form">
        <div class="form-padding justify-img" id="contact-photo-div">
        <img src="${state.img}" alt="Waving little guy." id="contact-photo">
      </div>
        <div class="form-padding form-width" id="form-width">
        <form action="https://formspree.io/kaemmerer.abby@gmail.com" method="POST">
          <legend>Who are you?</legend>
          <div class="name">
            <label class="column">
            <input type="text" name="firstName" />
            <span>First Name</span>
            </label>
            <label class="column">
            <input type="text" name="lastName" />
            <span>Last Name</span>
            </label>
          </div>
          <legend>Email</legend>
          <div>
            <input
              type="email"
              name="email"
              placeholder="mobias@tva.com"
            />
          </div>
          <legend>Phone</legend>
          <div>
            <input type="tel" name="phone"/>
          </div>
          <legend>Message for OCM</legend>
          <div>
          <textarea name="msg" cols="100" rows="5"></textarea>
          </div>

          <div class="submit">
            <input type="submit" value="SEND" />
          </div>
        </form>
      </div>
      </section


    </div>
</div>
</section>

`;
