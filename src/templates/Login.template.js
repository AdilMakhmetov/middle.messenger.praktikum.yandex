export default `
<div class="container">
  <div class="brand">
    <img class="logo logo-brand" src="./static/vector/logo.svg" alt="">
    <div class="tagline tagline-brand">
      <p class="tagline--text">{{slogan}}</p>
      <img alt="" class="tagline--icon" src="./static/vector/dots.svg">
    </div>
  </div>
  <div class="form">
    <div class="toggle">
      <a href="/" class="toggle--button toggle--button-active">Вход</a>
      <a href="/register" class="toggle--button">Регистрация</a>
    </div>
    <form class="inputs" id="inputs">
      <input name="login" type="text" class="input" placeholder="Логин">
      <input name="password" type="password" class="input" placeholder="Пароль">
      <button type="submit" class="button button-full button-primary">Авторизоваться</button>
    </form>
  </div>
</div>
`
