<template>
  <footer class="footer-distributed">
    <div class="footer-right">
      <a href="https://www.facebook.com/Toudoom" target="_blank"
        ><img
          src="@/assets/image/icon/facebook.png"
          width="70%"
          style="text-align: center; vertical-align: middle"
          alt=""
      /></a>
      <a href="https://www.twitch.tv/toudoom_" target="_blank"
        ><img
          src="@/assets/image/icon/twitch.png"
          width="70%"
          style="text-align: center; vertical-align: middle"
          alt=""
      /></a>
      <a href="https://www.youtube.com/channel/UCCR0Sp9q2ZP4M_BcYbSOMaQ" target="_blank"
        ><img
          src="@/assets/image/icon/youtube.png"
          width="70%"
          style="text-align: center; vertical-align: middle"
          alt=""
      /></a>
      <a href="https://instagram.com/toudoom" target="_blank"
        ><img
          src="@/assets/image/icon/Instagram-Logo-PNG-Background.png"
          width="70%"
          style="text-align: center; vertical-align: middle"
          alt=""
      /></a>
    </div>

    <div class="footer-left">
      

      <p>Toudoom &copy; 2022</p>
    </div>
  </footer>
</template>

<style>
/* footer */
.footer-distributed {
  background-color: #110c35;
  width: 100%;
  text-align: left;
  font: normal 16px sans-serif;
  padding: 45px 50px;
}

.footer-distributed .footer-left p {
  color: #8f9296;
  font-size: 14px;
  margin: 0;
}
/* Footer links */

.footer-distributed p.footer-links {
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin: 0 0 10px;
  padding: 0;
  transition: ease 0.25s;
}

.footer-distributed p.footer-links a {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: inherit;
  transition: ease 0.25s;
}

.footer-distributed .footer-links a:before {
  content: "·";
  font-size: 20px;
  left: 0;
  color: #fff;
  display: inline-block;
  padding-right: 5px;
}

.footer-distributed .footer-links .link-1:before {
  content: none;
}

.footer-distributed .footer-right {
  float: right;
  margin-top: 6px;
  max-width: 180px;
}

.footer-distributed .footer-right a {
  display: inline-block;
  width: 35px;
  height: 35px;
  background-color: #110c35;
  border-radius: 2px;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  line-height: 35px;
  margin-left: 3px;
  transition: all 0.25s;
}

.footer-distributed .footer-right a:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
}

.footer-distributed p.footer-links a:hover {
  text-decoration: underline;
}

/* footer responsive */

@media (max-width: 600px) {
  .footer-distributed .footer-left,
  .footer-distributed .footer-right {
    text-align: center;
  }
  .footer-distributed .footer-right {
    float: none;
    margin: 0 auto 20px;
  }
  .footer-distributed .footer-left p.footer-links {
    line-height: 1.8;
  }
}
</style>
