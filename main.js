const textarea = document.getElementById('textarea');

textarea.addEventListener('focus', () => {
  textarea.placeholder = 'コメントを追加…';
  })

textarea.addEventListener('onkeyup',() => {textarea ='';})


  function hatena(event) {
    let textarea = document.getElementById('textarea');
    textarea.value = textarea.value.slice(0, -1) + 'おいうんちするんじゃねえクソがぁッッッ！！　あーーーーーマジで反社多すぎてダリいなぁーーーー';
  }

  
  
  function copyText() {
  let sourceText = document.getElementById('textarea').value;
  document.getElementById('destination').value = sourceText;
}









const tip2 = document.getElementsByClassName('tip2');

tip2.addEventListener('click', () => {textarea = ''; })









textarea.addEventListener('onkeyup',() => {textarea ='';})












