function generateVideo() {
  if(!document.querySelector('.iframe')) return;
  const videos = document.querySelectorAll('.iframe > div a');
  videos.forEach(function(video){
    const videoParent = video.closest('div');
    videoParent.innerHTML = `<iframe src="${video.getAttribute('href')}" frameborder="0" id="video"></iframe>`
  })

  function runLink(event) {
    console.log(event)
  }

  var base = document.createElement('base');
  base.target = '_parent';
  document.getElementsByTagName('head')[0].appendChild(base);
  

  
  setTimeout(function() {
    console.log(document.querySelector(".hotspot-link-7"))
  }, 3000)
}


function setUpTimeline() {
  if(!document.querySelector('.missiontimeline-container')) return;
  let timelineCount = 0;
  let timelineGroup = '';
  const timelineParent = document.querySelector('.missiontimeline');
  const timelineItems = document.querySelectorAll('.missiontimeline > div');
  const timelineWrapper = document.createElement('div');
  timelineWrapper.classList.add('timeline-items')


  timelineItems.forEach(function(item, index) {
    if(index < timelineItems.length - 1) {  
      item.firstChild.parentElement.className=`checklist-item ${item.firstChild.innerText.toLowerCase()}`;
      item.firstChild.remove();
      timelineGroup += item.outerHTML;
      timelineCount = index + 1
      item.remove();
    }
  })

  timelineWrapper.innerHTML = timelineGroup;
  timelineParent.prepend(timelineWrapper)

  timelineWrapper.querySelectorAll('a').forEach(function(link) { 
    link.setAttribute('target', '_blank')
  })
}

setUpTimeline();
generateVideo();