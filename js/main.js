'use strict';
{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', ()=> {
    const results = ['大吉', '吉', '凶', '末吉'];
    const n = Math.floor(Math.random()*results.length);

    btn.textContent = results[n];
  });

}