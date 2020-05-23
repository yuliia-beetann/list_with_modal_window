'use strict';

$(document).ready(function() {

const playList = [
	{
	author: "LED ZEPPELIN",
	song:"STAIRWAY TO HEAVEN"
	},{
	author: "QUEEN",
	song:"BOHEMIAN RHAPSODY"
	},{
	author: "LYNYRD SKYNYRD",
	song:"FREE BIRD"
	},{
	author: "DEEP PURPLE",
	song:"SMOKE ON THE WATER"
	},{
	author: "JIMI HENDRIX",
	song:"ALL ALONG THE WATCHTOWER"
	},{
	author: "AC/DC",
	song:"BACK IN BLACK"
	},{
	author: "QUEEN",
	song:"WE WILL ROCK YOU"
	},{
	author: "METALLICA",
	song:"ENTER SANDMAN"
	}];
	
	
	$('body').append('<ol class="playlist"></ol>')


  (function renderList(playList) {
		for(let listItem of playList) {
      let $listItem = $(`<li class="list_item">${listItem.author} - ${listItem.song} 
        <button class="show_info">Show Info</button></li>`)
      $('.playlist').append($listItem)
      let $showInfoBtn = $listItem.find('.show_info')
      $showInfoBtn.click(function() { showInfo(listItem.author, listItem.song, $listItem)})
		}
	}(playList))()
	
  function showInfo(autor, song, listItem) {
		$('body').append(`<div class="modal"><h1>${autor} - ${song}</h1><button class="close_info">Close Info</button></div>`)
		let $closeInfoBtn = $('.close_info')
		$closeInfoBtn.click(function() {closeInfo(listItem)})
		
	}

  function closeInfo(listItem) {
		$('.modal').remove()
		listItem.append('<hr/ noshade>')
  }
  
})