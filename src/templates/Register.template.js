export default `
<div class="container">
  <div class="brand">
    <img class="logo logo-brand" src="./static/vector/logo.svg" alt="">
    <div class="tagline tagline-brand">
      <p class="tagline--text">{{ slogan }}</p>
      <img alt="" class="tagline--icon" src="./static/vector/dots.svg">
    </div>
  </div>
  <div class="form">
    <div class="toggle">
      <a href="/" class="toggle--button">Вход</a>
      <a href="/register" class="toggle--button toggle--button-active">Регистрация</a>
    </div>
    <form class="inputs" id="inputs">
      <input name="email" type="email" class="input" placeholder="Почта">
      <input name="login" type="text" class="input" placeholder="Логин">
      <input name="name" type="text" class="input" placeholder="Имя">
      <input name="surname" type="text" class="input" placeholder="Фамилия">
      <input name="phone" type="tel" class="input" placeholder="Телефон">
      <input name="pwd" type="password" class="input" placeholder="Пароль">
      <input name="pwd-again" type="password" class="input" placeholder="Пароль (еще раз)">
      <button type="submit" class="button button-full button-primary">Зарегистрироваться</button>
    </form>
  </div>
</div>
`
