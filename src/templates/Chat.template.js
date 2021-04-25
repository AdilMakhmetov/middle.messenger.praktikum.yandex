export default `
<div class="container">
  <header class="header">
    <img class="logo" src="./static/vector/logo.png" alt="">
    <div class="tagline tagline-mr">
      <p class="tagline--text">Keep In Touch</p>
      <img alt="" class="tagline--icon" src="./static/vector/dots.svg">
    </div>
    <button class="button button-primary mobileHide">+ Добавить пользователя</button>
    <div class="header--profile">
      <img src="./static/images/photo.png" alt="">
      <p class="header--name mobileHide">{{name}}</p>
    </div>
    <img class="menuIcon" src="./static/vector/menu.svg" alt="">
  </header>

  <sidebar class="sidebar">
    <div class="search">
      <img src="./static/vector/search.svg" alt="" class="search--icon">
      <input type="text" class="search--input" placeholder="Поиск...">
    </div>
    <nav class="peoples">
      <div class="people people-active">
        <img class="people--avatar" src="./static/vector/user.svg" alt="" >
        <div class="people--info">
          <p class="people--name">John Doe</p>
          <p class="people--message">Hi, Text me when you can...</p>
        </div>
        <div class="people--additional">
          <p class="people--unreaded">3</p>
          <p class="people--last_activity">10 min</p>
        </div>
      </div>
      <div class="people">
        <div class="people--avatar">
          <img src="./static/vector/user.svg" alt="" >
        </div>
        <div class="people--info">
          <p class="people--name">Anna Doe</p>
          <p class="people--message">Hi, Text me when you can...</p>
        </div>
        <div class="people--additional">
          <p class="people--unreaded">3</p>
          <p class="people--last_activity">10 min</p>
        </div>
      </div>
      <div class="people">
        <div class="people--avatar">
          <img src="./static/vector/user.svg" alt="" >
        </div>
        <div class="people--info">
          <p class="people--name">Dan Green</p>
          <p class="people--message">Hi, Text me when you can...</p>
        </div>
        <div class="people--additional">
          <p class="people--unreaded">3</p>
          <p class="people--last_activity">10 min</p>
        </div>
      </div>
      <div class="people">
        <img class="people--avatar" src="./static/vector/user.svg" alt="" >
        <div class="people--info">
          <p class="people--name">John Doe</p>
          <p class="people--message">Hi, Text me when you can...</p>
        </div>
        <div class="people--additional">
          <p class="people--unreaded">3</p>
          <p class="people--last_activity">10 min</p>
        </div>
      </div>
      <div class="people">
        <div class="people--avatar">
          <img src="./static/vector/user.svg" alt="" >
        </div>
        <div class="people--info">
          <p class="people--name">Anna Doe</p>
          <p class="people--message">Hi, Text me when you can...</p>
        </div>
        <div class="people--additional">
          <p class="people--unreaded">3</p>
          <p class="people--last_activity">10 min</p>
        </div>
      </div>
      <div class="people">
        <div class="people--avatar">
          <img src="./static/vector/user.svg" alt="" >
        </div>
        <div class="people--info">
          <p class="people--name">Dan Green</p>
          <p class="people--message">Hi, Text me when you can...</p>
        </div>
        <div class="people--additional">
          <p class="people--unreaded">3</p>
          <p class="people--last_activity">10 min</p>
        </div>
      </div>
      <div class="people">
        <div class="people--avatar">
          <img src="./static/vector/user.svg" alt="" >
        </div>
        <div class="people--info">
          <p class="people--name">Anna Doe</p>
          <p class="people--message">Hi, Text me when you can...</p>
        </div>
        <div class="people--additional">
          <p class="people--unreaded">3</p>
          <p class="people--last_activity">10 min</p>
        </div>
      </div>
      <div class="people">
        <div class="people--avatar">
          <img src="./static/vector/user.svg" alt="" >
        </div>
        <div class="people--info">
          <p class="people--name">Dan Green</p>
          <p class="people--message">Hi, Text me when you can...</p>
        </div>
        <div class="people--additional">
          <p class="people--unreaded">3</p>
          <p class="people--last_activity">10 min</p>
        </div>
      </div>
      <div class="people">
        <div class="people--avatar">
          <img src="./static/vector/user.svg" alt="" >
        </div>
        <div class="people--info">
          <p class="people--name">Anna Doe</p>
          <p class="people--message">Hi, Text me when you can...</p>
        </div>
        <div class="people--additional">
          <p class="people--unreaded">3</p>
          <p class="people--last_activity">10 min</p>
        </div>
      </div>
      <div class="people">
        <div class="people--avatar">
          <img src="./static/vector/user.svg" alt="" >
        </div>
        <div class="people--info">
          <p class="people--name">Dan Green</p>
          <p class="people--message">Hi, Text me when you can...</p>
        </div>
        <div class="people--additional">
          <p class="people--unreaded">3</p>
          <p class="people--last_activity">10 min</p>
        </div>
      </div>
      <div class="people">
        <div class="people--avatar">
          <img src="./static/vector/user.svg" alt="" >
        </div>
        <div class="people--info">
          <p class="people--name">Anna Doe</p>
          <p class="people--message">Hi, Text me when you can...</p>
        </div>
        <div class="people--additional">
          <p class="people--unreaded">3</p>
          <p class="people--last_activity">10 min</p>
        </div>
      </div>
      <div class="people">
        <div class="people--avatar">
          <img src="./static/vector/user.svg" alt="" >
        </div>
        <div class="people--info">
          <p class="people--name">Dan Green</p>
          <p class="people--message">Hi, Text me when you can...</p>
        </div>
        <div class="people--additional">
          <p class="people--unreaded">3</p>
          <p class="people--last_activity">10 min</p>
        </div>
      </div>
    </nav>
    <button class="sidebar--toggle">
      <img class="sidebar--icon" src="./static/vector/arrow.svg" alt="">
    </button>
  </sidebar>

  <section class="chat">
    <div class="chat--header">
      <button class="back">
        <img src="./static/vector/back.svg" alt="">
      </button>
      <div class="interlocutor">
        <div class="profile">
          <img src="./static/vector/user.svg" alt="">
        </div>
        <div class="interlocutor--text">
          <div class="interlocutor--name">John Doe</div>
          <div class="interlocutor--status interlocutor--status-online">Online</div>
        </div>
      </div>
      <div class="actions">
        <button class="button button-primary">
          <img src="./static/vector/broom.svg" alt="">
          <span class="button--text mobileHide">Очистить чат</span>
        </button>
        <button class="button">
          <img src="./static/vector/trash.svg" alt="">
          <span class="button--text mobileHide">Удалить пользователя</span>
        </button>
      </div>
    </div>
    <div class="chat--body">
      <div class="chat-blocks">
        <div class="chat--block">
          <p class="chat--date">Понедельник 22.03.2020</p>
          <div class="chat--items">
            <div class="chat--item chat--item-me">
              <div class="profile">
                <img src="./static/vector/user.svg" alt="">
              </div>
              <div class="chat--message">
                <p class="chat--text">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div class="chat--messageInfo">
                  <span class="chat--time">22:10</span>
                  <img class="chat--status" src="./static/vector/status.svg" alt="">
                </div>
              </div>
            </div>
            <div class="chat--item chat--item-i">
              <div class="profile">
                <img src="./static/vector/photo.svg" alt="">
              </div>
              <div class="chat--message chat--message-i">
                <p class="chat--text">Where does it come from?</p>
                <div class="chat--messageInfo">
                  <span class="chat--time">22:12</span>
                  <img class="chat--status" src="./static/vector/status.svg" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="chat--block">
          <p class="chat--date">Вторник 23.03.2020</p>
          <div class="chat--items">
            <div class="chat--item chat--item-me">
              <div class="profile">
                <img src="./static/vector/user.svg" alt="">
              </div>
              <div class="chat--message chat--message-me">
                <p class="chat--text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                <div class="chat--messageInfo">
                  <span class="chat--time">00:16</span>
                  <img class="chat--status" src="./static/vector/status.svg" alt="">
                </div>
              </div>
            </div>
            <div class="chat--item chat--item-i">
              <div class="profile">
                <img src="./static/vector/photo.svg" alt="">
              </div>
              <div class="chat--message chat--message-i">
                <p class="chat--text">some-file.pdf</p>
                <div class="chat--messageInfo">
                  <span class="chat--time">22:12</span>
                  <img class="chat--status" img src="./static/vector/status.svg" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="write">
      <div class="attach--modal">
        <div class="modal--content">
          <button class="attach--button">
            <img src="./static/vector/media.svg" alt="">
            <span class="attach--name">Медиа</span>
          </button>
          <button class="attach--button">
            <img src="./static/vector/file.svg" alt="">
            <span class="attach--name">Файл</span>
          </button>
          <button class="attach--button">
            <img src="./static/vector/location.svg" alt="">
            <span class="attach--name">Локация</span>
          </button>
        </div>
      </div>
      <button class="write--attach">
        <img src="./static/vector/attach.svg" alt="">
      </button>
      <input type="text" class="write--input" placeholder="Написать...">
      <button class="write--smile">
        <img src="./static/vector/smile.svg" alt="">
      </button>
      <button class="write--send">
        <img src="./static/vector/send.svg" alt="">
      </button>
    </div>
  </section>
</div>
<div class="confirm">
  <div class="overlay"></div>
  <div class="modal">
    <img class="close" src="./static/vector/cancel.svg" alt="">
    <div class="modal--content">
      <p class="modal--text">Вы уверены что хотите {{ action }}?</p>
      <div class="modal--inline">
        <button class="button button-primary">
          <img src="./static/vector/confirm.svg" alt="">
          <span class="button--text">Подтвердить</span>
        </button>
        <button class="button">
          <img src="./static/vector/close.svg" alt="">
          <span class="button--text">Отмена</span>
        </button>
      </div>
    </div>
  </div>
</div>
`
