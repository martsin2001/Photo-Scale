const img = document.getElementById('img');
const container = document.getElementById('container');

let mouseOut = true;
let movePaused = false;

let onMouseOut = () => {
  mouseOut = true;
  if (!movePaused) {
    img.style.width = container.clientWidth + 'px';
    img.style.height = container.clientHeight + 'px';
    img.style.left = '0px';
    img.style.top = '0px';
  }
};

container.addEventListener('mouseout', onMouseOut);
container.addEventListener('mouseleave', onMouseOut);
container.addEventListener('mousemove', scaleImage);
container.addEventListener('click', pauseMoving);

function scaleImage(event) {
  event.stopPropagation();
  let mouseOut = false;
  if (!mouseOut) {
    const imgWidth = container.clientWidth * 5;
    const imgHeight = container.clientHeight * 5;
    const containerX = event.offsetX;
    const containerY = event.offsetY;
    let imgXInPercentages = (containerX * 100) / container.clientWidth;
    let imgYInPercentages = (containerY * 100) / container.clientHeight;
    img.style.width = imgWidth + 'px';
    img.style.height = imgHeight + 'px';
    moveImage(
      (imgXInPercentages * imgWidth) / 100 -
        (container.clientWidth * imgXInPercentages) / 100,
      (imgYInPercentages * imgWidth) / 100 -
        (container.clientHeight * imgYInPercentages) / 100
    );
  }
}

function moveImage(offsetX, offsetY) {
  if (!movePaused) {
    img.style.left = '-' + offsetX + 'px';
    img.style.top = '-' + offsetY + 'px';
  }
}

function pauseMoving() {
  movePaused = !movePaused;
}
