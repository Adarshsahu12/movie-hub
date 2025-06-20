/* Google font "Poppins" */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
* {
    padding: 0%;
    margin: 0%;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Poppins", sans-serif;
    background: rgb(17, 16, 16);
}


header {
    position: relative;
    width: 100%;
    height: 500px;
    /* border: 1px solid #fff; */
    background: url('img/121213.jpg') no-repeat center center/cover;
    transition: 1s linear;
    z-index: 2;
}

header::before{
    content: '';
    position: absolute;
    width:100%;
    height:40%;
    background: linear-gradient(0 deg, rgb(17, 16, 16), transparent);
    bottom: 0;
    left: 0;
    z-index: -1;
}

header::after {
    content: '';
    position: absolute;
    width: 30%;
    height: 100%;
    background: linear-gradient(90deg, rgb(17, 16, 16), transparent);
    top: 0;
    left: 0;
    z-index: -1;
}

header nav {
    width: 100%;
    height: 10%;
    border-bottom: 1.3px solid rgb(255, 255, 255, .1);
    padding: 0px 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo,
.end_bx {
    /* border: 1px solid #fff; */
    display: flex;
    align-items: center;
}

header nav .logo img {
    width: 100px;
}

header nav .end_bx ul {
    list-style-type: none;
    display: flex;
    align-items: center;
}

header nav .end_bx ul li {
    margin: 0px 30px;
    position: relative;
}

header nav .end_bx ul li a {
    text-decoration: none;
    color: rgb(255, 255, 255, .7);
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    transition: .3s linear;
}

header nav .end_bx ul li:nth-child(4) {
    color: rgb(255, 255, 255, .7);
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    transition: .3s linear;
    cursor: pointer;
}

header nav .end_bx ul li:nth-child(4):hover {
    color: #fff;
}

header nav .end_bx ul li a:hover {
    color: #fff;
}

header nav .end_bx ul li:nth-child(4) .fas {
    font-size: 12px;
    margin: 2px 0px 0px 3px;
    transition: .3s linear;
}

header nav .end_bx ul li:nth-child(4):hover .fas {
    transform: rotate(180deg);
}


/* nav other list start  */

header nav .end_bx ul li .list {
    position: absolute;
    width: 150px;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    top: 30px;
    z-index: 1;
    padding: 10px;
    opacity: 0;
    visibility: hidden;
}

header nav .end_bx ul li:hover .list {
    opacity: 1;
    visibility: visible;
}

header nav .end_bx ul li .list::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(184, 184, 184, .1);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    z-index: -1;
}

header nav .end_bx ul li .list::after {
    content: '';
    position: absolute;
    border-left: 15px solid rgb(184, 184, 184, .1);
    border-right: 15px solid transparent;
    border-bottom: 15px solid transparent;
    backdrop-filter: blur(5px);
    top: -1px;
    left: 20px;
    transform: rotate(45deg);
    z-index: -1;
}

header nav .end_bx ul li .list a {
    text-decoration: none;
    color: rgb(255, 255, 255, .7);
    padding: 10px 0px 10px 10px;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    transition: .3s linear;
}

header nav .end_bx ul li .list a:hover {
    color: #fff;
}


/* nav other list end  */

header nav .end_bx .search {
    position: relative;
    display: flex;
    align-items: center;
    color: #fff;
}

header nav .end_bx .search input {
    padding: 3px 0px 3px 8px;
    border-radius: 20px;
    outline: none;
    border: none;
    background: transparent;
    color: #fff;
    transition: 1s linear;
    -webkit-transition: 1s linear;
    width: 0px;
}

header nav .end_bx .search i {
    color: rgb(255, 255, 255, .7);
    font-size: 13px;
    cursor: pointer;
    transition: .4s linear;
}

header nav .end_bx .search i:hover {
    color: #fff;
}

header nav .end_bx .search .search_bx2 {
    position: absolute;
    width: 200px;
    height: 300px;
    /* border: 1px solid #fff; */
    top: 35px;
    left: -10px;
    background: rgb(184, 184, 184, .3);
    border-radius: 10px;
    overflow: auto;
    visibility: hidden;
    opacity: 0;
    transition: .3s linear;
}

header nav .end_bx .search .search_bx2::-webkit-scrollbar {
    width: 7px;
    background: rgb(184, 184, 184, .3);
    border-radius: 20px;
}

header nav .end_bx .search .search_bx2::-webkit-scrollbar-thumb {
    background: rgb(184, 184, 184, .7);
    border-radius: 20px;
}

header nav .end_bx .search .search_bx2 a {
    text-decoration: none;
    color: #fff;
    width: 100%;
    height: 50px;
    /* border: 1px solid #fff; */
    display: flex;
    align-items: center;
    transition: .3s linear;
}

header nav .end_bx .search .search_bx2 a:hover {
    background: rgb(184, 184, 184, .6);
}

header nav .end_bx .search .search_bx2 a img {
    width: 30px;
    height: 45px;
    border-radius: 5px;
    margin: 0px 5px;
}

header nav .end_bx .search .search_bx2 a .content2 {
    color: #fff;
}

header nav .end_bx .search .search_bx2 a .content2 h6 {
    font-size: 13px;
}

header nav .end_bx .search .search_bx2 a .content2 p {
    color: rgb(255, 255, 255, .7);
    font-size: 11px;
    font-weight: 500;
}


/* javascript classes start  */

header nav .end_bx .search .search_input {
    width: 180px;
}


/* javascript classes end  */

header nav .end_bx .bell {
    color: rgb(255, 255, 255, .7);
    font-size: 13px;
    cursor: pointer;
    transition: .3s linear;
    margin: 0px 35px;
}

header nav .end_bx .bell:hover {
    color: #fff;
}

header nav .end_bx .user {
    width: 20px;
    height: 20px;
    border: 1px solid #fff;
    border-radius: 50%;
}

header nav .end_bx .user img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    cursor: pointer;
}

header .content {
    width: 77%;
    height: auto;
    /* border: 1px solid #fff; */
    margin: 70px auto 0px auto;
}

header .content h6 {
    color: #fff;
    font-size: 13px;
    transition: 1s linear;
}

header .content h6 span {
    color: rgb(255, 255, 255, .8);
}

header .content h3 {
    color: rgb(255, 255, 255, .8);
    font-size: 15px;
    margin: 10px 0px;
    transition: 1s linear;
}

header .content h3 i {
    color: rgb(255, 255, 0);
    font-size: 12px;
    margin-right: 3px;
}

header .content h3 span {
    font-size: 12px;
    margin-left: 3px;
    transition: 1s linear;
}

header .content h1 {
    font-size: 45px;
    margin-bottom: 10px;
    color: #fff;
    transition: 1s linear;
}

header .content p {
    width: 500px;
    word-break: break-all;
    font-size: 12px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 20px;
    transition: 1s linear;
}

header .content .btns {
    display: flex;
    align-items: center;
}

header .content .btns button {
    padding: 6px 12px;
    border-radius: 20px;
    background: red;
    border: 2px solid red;
    color: #fff;
    margin-right: 10px;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 500;
    box-shadow: 0px 3px 10px red;
    transition: .3s linear;
    cursor: pointer;
    z-index: 999;
}

header .content .btns button:nth-child(2) {
    border: 2px solid #000;
    color: #fff;
    background: #000;
    box-shadow: 0px 3px 10px #000;
}

header .content .btns button:hover {
    border: 2px solid #000;
    color: #fff;
    background: #000;
    box-shadow: 0px 3px 10px #000;
}

header .content .btns button:nth-child(2):hover {
    background: red;
    border: 2px solid red;
    color: #fff;
    box-shadow: 0px 3px 10px red;
}

header .content .btns button .fas {
    margin-right: 5px;
}

header .slider_btns {
    position: absolute;
    width: 300px;
    height: 50px;
    /* border: 1px solid #fff; */
    bottom: 0;
    left: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
}

header .slider_btns h6 {
    width: 30px;
    height: 3px;
    margin-right: 5px;
    transition: 1s linear;
    background: rgb(184, 184, 184, .1);
}

header .slider_btns h6:nth-child(1) {
    background: #fff;
}

.tranding_bx {
    width: 90%;
    height: auto;
    border-bottom: 2px solid rgb(184, 184, 184, .1);
    margin: auto;
    padding: 20px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.tranding_bx li {
    list-style: none;
    transition: .3s linear;
}

.tranding_bx li a {
    position: relative;
    text-decoration: none;
    color: rgb(255, 255, 255, .7);
    font-size: 13px;
    transition: .3 linear;
}

.tranding_bx li a:hover {
    color: #fff;
}

.tranding_bx li .fas {
    margin-right: 5px;
}

.tranding_bx li a span {
    position: absolute;
    width: 5px;
    height: 5px;
    background: transparent;
    border-radius: 50%;
    bottom: -10px;
    left: 45%;
}


/* tranding box active classes start  */

.tranding_bx li .active {
    font-size: 15px;
    color: #fff;
}

.tranding_bx li .active span {
    background: red;
}


/* tranding box active classes end    */


/* category box start  */

.cato_bx {
    position: relative;
    width: 90%;
    height: auto;
    margin: auto;
    /* border: 1px solid #fff; */
    display: flex;
    align-items: center;
    padding: 20px 40px 20px 0px;
    overflow: auto;
    scroll-behavior: smooth;
    z-index: 999;
}

.cato_bx::-webkit-scrollbar {
    display: none;
}

.cato_bx button {
    padding: 4px 30px;
    background: red;
    border: none;
    outline: none;
    color: #fff;
    border-radius: 20px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 13px;
    margin-right: 10px;
    cursor: pointer;
    transition: .3s linear;
}

.cato_bx button:hover {
    background: rgb(184, 184, 184, .1);
}

.cato_bx .cato_left_right {
    position: sticky;
    right: 1.5%;
    color: #fff;
    cursor: pointer;
}

.cato_bx .cato_left_right:nth-last-child(1) {
    right: 0%;
}

.cato_bx .cato_left_right i {
    transform: rotate(90deg);
    transition: .3s linear;
}

.cato_bx .cato_left_right:nth-last-child(1) i {
    transform: rotate(-90deg);
}


/* cato button java class start  */

.cato_bx .cato_button_active {
    background: rgb(184, 184, 184, .2);
}


/* cato button java class end */

.movie_bx_1 {
    /* position: relative; */
    width: 100%;
    height: 260px;
    /* border: 1px solid #fff; */
    display: flex;
    align-items: center;
    overflow: auto;
    scroll-behavior: smooth;
}

.movie_bx_1::-webkit-scrollbar {
    display: none;
}


/* movie extra box  */

.movie_bx_1 .movie_bxx {
    display: flex;
    align-items: center;
    width: auto;
    height: 100%;
    /* border: 1px solid #fff; */
}


/* movies box java class start  */

.movie_bx_1 .movie_box_active {
    display: none;
}


/* movies box java class end  */

.movie_bx_1 .card {
    min-width: 140px;
    height: 250px;
    /* border: 1px solid #fff; */
    margin: 0px 7px;
}

.movie_bx_1 .card:nth-last-child(1) {
    margin: 0px 5px 0px 0px;
}

.movie_bx_1 .card a {
    text-decoration: none;
    color: #fff;
}

.movie_bx_1 .card a img {
    width: 100%;
    height: 80%;
    border-radius: 8px;
}

.movie_bx_1 .card a .content {
    width: 100%;
    height: 15%;
    /* border: 1px solid #fff; */
    margin-top: 5px;
}

.movie_bx_1 .card a .content h5 {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-weight: 500;
    font-size: 12px;
}

.movie_bx_1 .card a .content h6 {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.movie_bx_1 .card a .content h6 span {
    color: rgb(255, 255, 255, .6);
    font-weight: lighter
}

.movie_bx_1 .card a .content h6 .rate {
    display: flex;
    align-items: center;
}

.movie_bx_1 .card a .content h6 .rate .fas {
    margin-right: 7px;
    font-size: 9px;
    color: rgb(255, 255, 255, .5);
}

.movie_bx_1 .card a .content h6 .rate .fas:nth-last-child(2) {
    color: yellow;
    margin: 1px;
}

.movie_bx_1 .card a .content h6 .rate h6 {
    color: yellow;
    margin-top: 3px;
    font-size: 11px;
    height: 5px;
}

.movie_bx_1 button {
    position: absolute;
    border: none;
    outline: none;
    color: #fff;
    background: none;
    left: 10px;
    font-size: 20px;
    cursor: pointer;
    z-index: 999;
}

.movie_bx_1 button::before {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    background: rgb(255, 255, 255, .5);
    border-radius: 50%;
    left: -5px;
    top: -1px;
    z-index: -1;
    transition: .3s linear;
}

.movie_bx_1 button:hover::before {
    background: rgb(255, 0, 0, .5);
}

.movie_bx_1 button:nth-child(2) {
    left: 98%;
}

.movie_bx_1 button:nth-child(1) i {
    transform: rotate(90deg);
}

.movie_bx_1 button:nth-child(2) i {
    transform: rotate(-90deg);
}

.movie_bx_1 button:nth-child(2)::before {
    left: -7px;
    top: -1px;
}

.movie_bx_2 {
    width: 90%;
    height: auto;
    margin: auto;
    overflow: unset;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px 0px;
}

.movie_bx_2 .card {
    width: 140px;
    margin: 10px auto;
}


/* movies box2 start  */

.all,
.latest,
.year,
.letter,
.rate_change {
    width: 100%;
    height: auto;
    /* border: 1px solid #fff; */
    display: none;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
}

.box2_actives {
    display: flex;
}


/* movies box2 end  */


/* video box start  */

.video_bx {
    position: relative;
    width: 90%;
    height: 600px;
    /* border: 1px solid #fff; */
    margin: auto;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.video_bx video {
    width: 100%;
    height: 100%;
    background: #000;
    border-radius: 20px;
}

.video_bx .control {
    position: absolute;
    width: 90%;
    height: 40px;
    background: #131312;
    /* border: 1px solid #fff; */
    border-radius: 20px;
    bottom: 10px;
    padding: 0px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 9999;
}

.video_bx .control .play_redo {
    position: relative;
    width: 60px;
    height: 100%;
    /* border: 1px solid #fff; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
}

.video_bx .control .play_redo .bi {
    font-size: 22px;
    cursor: pointer;
}

.video_bx .control .play_redo .bi:nth-child(2) {
    transform: scaleX(-1);
}

.video_bx .control .play_redo span {
    position: absolute;
    color: #fff;
    font-size: 7px;
    top: 14px;
    right: 8px;
    z-index: -1;
}

.video_bx .control .start_seekbar_end {
    width: 85%;
    height: 100%;
    /* border: 1px solid #fff; */
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 1s linear;
}

.video_bx .control .start_seekbar_end span {
    color: rgb(255, 255, 255, .7);
    font-size: 13px;
    margin: 0px 10px;
    width: 55px;
    text-align: center;
}

.video_bx .control .start_seekbar_end .seek {
    position: relative;
    width: 85%;
}

.video_bx .control .start_seekbar_end .seek input {
    width: 100%;
    margin-top: 7px;
    cursor: pointer;
    opacity: 0;
}

.video_bx .control .start_seekbar_end .seek h5 {
    position: absolute;
    width: 50%;
    height: 8px;
    background: red;
    border-radius: 20px;
    top: 11px;
    transition: 1s linear;
    z-index: -1;
}

.video_bx .control .start_seekbar_end .seek h4 {
    position: absolute;
    width: 100%;
    height: 8px;
    background: rgb(184, 184, 184, .2);
    border-radius: 20px;
    top: 11px;
    transition: 1s linear;
    z-index: -1;
}

.video_bx .control .start_seekbar_end .seek h6 {
    position: absolute;
    width: 12px;
    height: 12px;
    background: #fff;
    border-radius: 50%;
    top: 11px;
    transition: 1s linear;
    z-index: -1;
    margin-left: -5px;
    top: 8.5px;
    left: 50%;
}

.video_bx .control .cc_vol_screen {
    position: relative;
    width: 100px;
    height: 100%;
    /* border: 1px solid #fff; */
    transition: 1s linear;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.video_bx .control .cc_vol_screen .bi {
    color: #fff;
    font-size: 20px;
    cursor: pointer;
}

.video_bx .control .cc_vol_screen .bi:nth-child(4) {
    font-size: 17px;
}

.video_bx .control .cc_vol_screen input {
    width: 0px;
    opacity: 0;
    transition: 1s linear;
}

.video_bx .control .cc_vol_screen input[type="range"] {
    -webkit-appearance: none;
    background: red;
    border-radius: 20px;
    height: 7px;
}

.video_bx .control .cc_vol_screen input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: #fff;
    width: 10px;
    height: 10px;
    border-radius: 50%;
}


/* javascript classes start  */

.video_bx .control .cc_vol {
    width: 230px;
}

.video_bx .control .cc_vol_screen .input_vol {
    width: 130px;
    opacity: 1;
}

.video_bx .control .start_seekbar {
    width: 70%;
}


/* javascript classes end  */


.video_bx .title_video {
    position: absolute;
    top: 2%;
    left: 2%;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    z-index: 999;
}

.video_bx .watching {
    position: absolute;
    top: 7%;
    left: 2%;
    color: rgb(255, 255, 255, .6);
    font-size: 13px;
    z-index: 999;
}

.video_bx .watching i {
    font-size: 10px;
    margin-right: 3px;
}

.video_bx .heart_pluse {
    position: absolute;
    top: 2%;
    right: 2%;
    color: #fff;
    font-size: 16px;
    z-index: 999;
    cursor: pointer;
}

.video_bx .heart_pluse i:nth-child(2) {
    margin-left: 20px;
}

.video_bx .video_list {
    position: absolute;
    width: 100px;
    height: 300px;
    /* border: 1px solid #fff; */
    top: 25%;
    left: 2%;
    transition: .6s linear;
    opacity: 0;
}

.video_bx:hover .video_list {
    opacity: 1;
}

.video_bx .video_list img {
    width: 100px;
    height: 70px;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 10px;
    border: 1px solid rgb(255, 255, 255, .6);
}

.cato_bx2 {
    position: relative;
    overflow: visible;
    height: 30px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px;
}

.cato_bx2 .left_cato button:nth-child(1) {
    background: none;
}

.cato_bx2 .left_cato button i {
    margin-left: 10px;
    transition: .3s linear;
}

.cato_bx2 .left_cato button:nth-child(4),
button:nth-child(5) {
    padding: 4px 15px;
    position: relative;
    background: rgb(184, 184, 184, .1);
}

.cato_bx2 .right_cato {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.cato_bx2 .right_cato i {
    color: yellow;
    font-size: 13px;
    margin-right: 5px;
}

.cato_bx2 .right_cato input[type="range"] {
    -webkit-appearance: none;
    background: red;
    border-radius: 20px;
    height: 7px;
}

.cato_bx2 .right_cato input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: #fff;
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.cato_bx2 .right_cato span {
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    margin-left: 10px;
}

.cato_bx2 button .year_bx {
    position: absolute;
    width: 80px;
    height: 150px;
    /* border: 1px solid #fff; */
    background: rgb(8, 8, 8, .7);
    border-radius: 10px 3px 3px 10px;
    top: 35px;
    left: 0;
    z-index: 999;
    overflow: auto;
    transition: 1s linear;
    display: none;
}

.cato_bx2 button .year_bx::-webkit-scrollbar {
    background: transparent;
    width: 7px;
}

.cato_bx2 button .year_bx::-webkit-scrollbar-track {
    background: rgb(184, 184, 184, .4);
    backdrop-filter: blur(5px);
    border-radius: 20px;
}

.cato_bx2 button .year_bx::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 20px;
}

.cato_bx2 button .year_bx li {
    list-style-type: none;
    font-size: 15px;
    font-weight: 600;
    padding: 5px;
    color: #fff;
    transition: .3s linear;
}

.cato_bx2 button .year_bx li:hover {
    color: red;
}

.cato_bx2 button .letter_bx {
    width: 40px;
}

.cato_bx2 button .letter_bx li {
    font-size: 16px;
    font-weight: 600;
}


/* javascript classes start  */

.cato_bx2 .show_year1 .year_bx {
    display: unset;
}

.cato_bx2 .show_year1 i {
    transform: rotate(180deg);
}

.cato_bx2 button .year_bx .li_change {
    color: red;
}


/* javascript classes end */


/* download page start  */

.down_page {
    width: 90%;
    height: auto;
    margin: 30px auto;
    /* border: 1px solid #fff; */
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.down_page .img_bx,
.cont_bx {
    width: 50%;
    height: 300px;
    /* border: 1px solid #fff; */
    color: #fff;
}

.down_page .img_bx img {
    width: 80%;
    height: 300px;
    border-radius: 10px;
}

.down_page .cont_bx p {
    font-size: 13px;
    margin-bottom: 10px;
}

.down_page .cont_bx h3 {
    font-size: 15px;
    margin-bottom: 20px;
}

.down_page .cont_bx h3 span {
    background: yellow;
    color: #121213;
    padding: 0px 5px;
}

.down_page .cont_bx h3 i {
    color: yellow;
    margin: 0px 5px;
}

.down_page .cont_bx .screen_shot_bx {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.down_page .cont_bx .screen_shot_bx img {
    width: 160px;
    height: 100px;
    border-radius: 10px;
    margin-right: 10px;
}

.down_page .cont_bx .btns {
    display: flex;
    align-items: center;
}

.down_page .cont_bx .btns a {
    padding: 5px 30px;
    text-decoration: none;
    background: rgb(184, 184, 184, .1);
    color: #fff;
    border-radius: 20px;
    margin-right: 10px;
    transition: .3s linear;
}

.down_page .cont_bx .btns a:hover {
    background: red;
}


/* download page end  */