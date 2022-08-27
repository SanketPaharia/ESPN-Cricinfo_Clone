let stickynavbar = () =>{
    return `
    <!-- sticky navbar -->
    <div class="header" id="myHeader">
      <div class="content">
    <div class="f_nav">
    <img id="navlogo" onclick="jaadu()" src="https://wassets.hscicdn.com/static/images/logo.png" alt="logo" >
        <!-- dropdown menu Bar  -->
        <a href="livescore.html"><div class="dropdown">
            <button class="dropbtn">Live Scores</button>
            <div class="dropdown-content">
              <a href="#">Live Scores Home</a>
              <a href="#">Week View </a>
              <a href="#">Month View</a>
              <a href="#">Season View</a>
              <a href="#">International Calender</a>
              <a href="#"> Desktop Scoreboard</a>
            </div>
          </div></a>
       <!-- name 2 part -->

       <a href="series.html"><div class="dropdown">
        <button class="dropbtn_3">Series</button>

        <div class="dropdown-content">
          <div class="row">
            <div class="column">
              <a href="#">Zimbabwe v India</a>
              <a href="#">West Indies V New Zealand</a>
              <a href="#">Australia V Zimbabwe</a>
              <a href="#">Asia Cup</a>
              <a href="#">The Hundred (W)</a>
              <a href="#">County Div2</a>
              <a href="#">6xity (W)</a>
              <a href="#">Test Championship</a>
              <a href="#">CWC Super League</a>
              <a href="#">-Archives-</a>
            </div>
            <div class="column">
              <a href="#">England v South Africa</a>
              <a href="#">Neitherlands v Pakistan</a>
              <a href="#">Asia Cup QLF</a>
              <a href="#">The HUndred(M)</a>
              <a href="#">Maharaja T20</a>
              <a href="#">6xity (M)</a>
              <a href="#">Women's Championship</a>
              <a href="#">-Future Series-</a>
        
            </div>
        </div>
      </div>
        </div></a>
       <!-- name 3 part-3  -->

       <a href="teams.html"><div class="dropdown">
        <button class="dropbtn_3">Teams</button>

        <div class="dropdown-content">
          <div class="row">
            <div class="column1">
              <a href="#">Australia</a>
              <a href="#">Bangladesh</a>
              <a href="#">England</a>
              <a href="#">India</a>
              <a href="#">New Zealand</a>
              <a href="#">Pakistan</a>
              <a href="#">South Africa</a>
              <a href="#">Sri Lanka</a>
              <a href="#">West Indies</a>
              <a href="#">Zimbabwe</a>
            </div>
            <div class="column1">
              <a href="#">Afghanistan</a>
              <a href="#">Ireland</a>
              <a href="#">Namibia</a>
              <a href="#">Nepal</a>
              <a href="#">Netherlands</a>
              <a href="#">Oman</a>
              <a href="#">PNG</a>
              <a href="#">Scotland</a>
              <a href="#">UAE</a>
              <a href="#">USA</a>
            </div>
        </div>
      </div>
        </div></a>
        <!-- next part -03 -->
        <a href="latest-cricket-news.html"><div class="dropdown">
          <button class="dropbtn9">News</button>
          <div class="dropdown-content">
            <a href="#">News Home</a>
            <a href="#">Future of ODIs</a>
            <a href="#">Ball-tampering</a>
            <a href="#">Technology in cricket</a>
            <a href="#">Racism</a>
          </div>
        </div></a>
        <!-- closing . -->
        
        <a href="cricket-features.html"><div class="dropdown">
          <button class="dropbtn">Features</button>
          <div class="dropdown-content">
            <a href="#">Features Home</a>
            <a href="#">Writers</a>
            <a href="#">Photo Galleries</a>
            <a href="#">The Cricket Monthly</a>
          </div>
        </div></a>
        <!-- closing  -->
        <a href="video.html"><div class="dropdown">
          <button class="dropbtn_3">Videos</button>
          <div class="dropdown-content">
            <div class="row">
              <div class="column3">
                <a href="#">Videos Home</a>
                <a href="#">T20 Time Out Hindi</a>
                <a href="#">Match Day</a>
                <a href="#">Fantasy Pick</a>
                <a href="#">Run Order</a>
                <a href="#">25 Questions</a>
                <a href="#">Interviews</a>
                <a href="#">Press Conference</a>
              </div>
              <div class="column3">
                <a href="#">T20 Time Out</a>
                <a href="#">Hindi Videos</a>
                <a href="#">Haan Ya Naa</a>
                <a href="#">Polite Enquires</a>
                <a href="#">News and Analysis</a>
                <a href="#">Features</a>
                <a href="#">YouTube</a>
              </div>
          </div>
        </div>
          </div></a>
          <!-- CLOSING  -->
          <div class="dropdown">
            <button class="dropbtn_3">Stats</button>
            <div class="dropdown-content">
              <div class="row">
                <div class="column2">
                  <a href="#">Sats home</a>
                  <a href="#">IPL 2022</a>
                  <a href="#">SuperStars</a>
                  <a href="#">All records</a>
                  <a href="#">Grounds</a>
                </div>
                <div class="column2">
                  <a href="#">AskCricinfo</a>
                  <a href="#">Statsguru</a>
                  <a href="#">2022 records</a>
                  <a href="#">Players</a>
                  <a href="#">Rankings</a>
                </div>
            </div>
          </div>
            </div> 
            <!-- image part   -->
            <div id="imgen">
              <img class="fanimg" src="https://wassets.hscicdn.com/static/images/fantasy-home.png" alt="Fantasay">
              <button class="navtitle">Fantasy</button>
            <!-- dropdown  -->
            <div class="dropdown">
              <button class="dropbtn_3">Eidtion IN</button>
              <div class="dropdown-content">
                <div class="row">
                  <div class="column2">
                    <a href="#">Africa</a>
                    <a href="#">Bangladesh</a>
                    <a href="#">India-Hindi</a>
                    <a href="#">Pakistan</a>
                    <a href="#">United Kingdom</a>
                    <a href="#">Global</a>
                  </div>
                  <div class="column2">
                    <a href="#">Australia</a>
                    <a href="#"><b>India</b></a>
                    <a href="#">New zeland</a>
                    <a href="#">Sri Lanka</a>
                    <a href="#">United States</a>
                  </div>
              </div>
            </div>
              </div> 
              <img class="fanimg" src="https://pbs.twimg.com/profile_images/1084839186274942978/CMWEwwnd_400x400.jpg" alt="moon">
              <img class="fanimg" src="https://assets-global.website-files.com/5d5a3c3b83100b074a079db9/5de1572859d27b6861180ca5_Alerts.png" alt="notify">
              <div class="dropdown">
                <button class="dropbtn1">कA</button>
                <div class="dropdown-content">
                  <a href="#">English</a>
                  <a href="#">HIndi</a>
                </div>
              </div>
             <!-- closing drop  -->
             <div class="dropdown">
              <button class="dropbtn">
                <img class="famimg" src="./images/menu.png" alt="menu">
              </button>
              <div class="dropdown-content">
                <a href=""> <img class="es" src="https://a.espncdn.com/redesign/assets/img/logos/wisden.png" alt="log">  Wisden Almanack</a>
                <a href="#"> <img class="es" src="https://a.espncdn.com/redesign/assets/img/logos/espn-logo-cric.png" alt="espn"> ESPN.in</a>
                <a href="about.html"> <img class="es" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-bW1Ma-MDDlw0ZzZRK3z9QccldwbEU-1eHA&usqp=CAU" alt="log">  <b>About Us</b></a>
                <a href="contact.html"> <img class="es" src="data:image/png;base64,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" alt="log">  <b>Contact Us</b></a>
              
                </div>
            </div>
            </div>
          </div>     
</div>


</div>
</div>
`
}


export default stickynavbar()