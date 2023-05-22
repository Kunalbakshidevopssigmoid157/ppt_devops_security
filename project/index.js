// Dom Element
const mainPageButtonGroup = document.getElementsByClassName(
    "mainPageBootomButon"
  );
  const mainPageButton = document.getElementById("mainPageToplogin");
  const mainPage = document.getElementById("mainPage");
  const loginPage = document.getElementById("loginPage");
  const newsFeedNav = document.getElementById("newsFeedNav");
  const newsFeedPage = document.getElementById("newsFeedPage");
  const mainPageUserName = document.getElementById("mainPageuserName");
  const mainPagePassword = document.getElementById("mainPagepassword");
  const loginPageModelBox = document.getElementById("loginPageModelBox");
  const loginPageInput = document.getElementsByClassName("loginPageInput");
  const loginPageButton = document.getElementById("loginPageLoginBtn");
  const loginPageInputPassword = document.getElementById(
    "loginPageInputPassword"
  );
  const loginPageInputUsername = document.getElementById(
    "loginPageInputUsername"
  );
  const newsFeedModelBox = document.getElementById("newsFeedModelBoxWrap");
  const newsFeedSideBarWrap = document.getElementById("newsFeedSidebarWrap");
  const newsFeedSideBar = document.getElementById("newsFeedSidebar");
  const newsFeedUserProfileId = document.getElementById("newsFeedNavprofileId");
  const circleBox = document.getElementById("circleBox");
  const dark1 = document.getElementsByClassName("dark1");
  const dark2 = document.getElementsByClassName("dark2");
  const text = document.getElementsByClassName("text");
  const border = document.getElementsByClassName("border");
  // ////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  // mainPage
  for (let i = 0; i < mainPageButtonGroup.length; i++) {
    mainPageButtonGroup[i].onclick = function () {
      mainPage.style = ["display:none"];
      loginPage.style = ["display:grid"];
    };
  }
  mainPageButton.onclick = function () {
    if (mainPageUserName.value !== "" && mainPagePassword.value !== "") {
      mainPage.style = ["display:none"];
      newsFeedPage.style = ["display:grid"];
      newsFeedNav.style = ["display:flex"];
    } else {
      mainPage.style = ["display:none"];
      loginPage.style = ["display:grid"];
      loginPageModelBox.style = ["display:block"];
    }
  };
  // mainPageEnd
  // loginPage
  document.getElementById("loginPageModelBoxIcon").onclick = function () {
    loginPageModelBox.style = ["display:none"];
  };
  
  loginPageButton.onclick = function () {
    if (
      loginPageInputUsername.value !== "" &&
      loginPageInputPassword.value !== ""
    ) {
      loginPage.style = ["display:none"];
      newsFeedPage.style = ["display:grid"];
      newsFeedNav.style = ["display:flex"];
    } else {
      loginPageModelBox.style = ["display:block"];
    }
  };
  // loginPageEnd
  // newsFeedPage
  // modelBox
  document.getElementById("postButonContent").onclick = function () {
    newsFeedModelBox.style = ["display:block"];
  };
  document.getElementById("newsFeedModelBoxHeaderIcon").onclick = function () {
    newsFeedModelBox.style = ["display:none"];
    document.getElementById("newsFeedModelBoxHeaderButton").style = [
      "opacity:0.5",
    ];
    document.getElementById("newsFeedFooterIconPlus").style = ["opacity:0.5"];
    document.getElementById("newsFeedModelBoxBodyInput").value = "";
  };
  document.getElementById("newsFeedModelBoxBodyInput").onkeydown = function () {
    document.getElementById("newsFeedModelBoxHeaderButton").style = ["opacity:1"];
    document.getElementById("newsFeedFooterIconPlus").style = ["opacity:1"];
  };
  document.getElementById("newsFeedModelBoxBodyInput").onblur = function () {
    document.getElementById("newsFeedModelBoxHeaderButton").style = [
      "opacity:0.5",
    ];
    document.getElementById("newsFeedFooterIconPlus").style = ["opacity:0.5"];
  };
  // modelBoxEnd
  // sideBar
  newsFeedUserProfileId.onclick = function () {
    newsFeedSideBarWrap.classList.add("visibilityWrap");
    newsFeedSideBar.classList.add("newsfeedtop");
  };
  document.getElementById("newsFeedSidebarHeaderIcon").onclick = function () {
    newsFeedSideBarWrap.classList.remove("visibilityWrap");
    newsFeedSideBar.classList.remove("newsfeedtop");
  };
  // toggleButton
  circleBox.onclick = function () {
    circleBox.classList.toggle("circleBoxClickStyle");
    for (let i = 0; i < dark2.length; i++) {
      dark2[i].classList.toggle("dark2style");
    }
    for (let j = 0; j < dark1.length; j++) {
      dark1[j].classList.toggle("dark1style");
    }
    for (let k = 0; k < text.length; k++) {
      text[k].classList.toggle("textstyle");
    }
    for (let l = 0; l < border.length; l++) {
      border[l].classList.toggle("borderstyle");
    }
  };
  // toggleButtonEnd
  // sideBarEnd
  // newsFeedPageEnd