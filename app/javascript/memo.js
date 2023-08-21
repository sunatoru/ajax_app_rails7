function post (){
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const XHR = new XMLHttpRequest();
      XHR.open("POST", "/posts", true);
      XHR.responseType = "json";
      XHR.send(formData);
    //リクエストを送信する処理
  });
 };
 
 window.addEventListener('turbo:load', post);