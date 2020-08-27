var panorama, viewer, container, infospot;
var containerBaseWidth = 700;
var containerBaseHeight = 400;
var deltaSize = 100;

container = document.querySelector( '#container' );

panorama = new PANOLENS.ImagePanorama( 'https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/tunnel.jpg' );

infospot = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot.position.set( 0, 0, -5000 );
infospot.addHoverText( 'Hello Panolens', 30 );
panorama.add( infospot );

viewer = new PANOLENS.Viewer( { container: container } );
viewer.add( panorama );

function changeContainerSize ( width, height ) {
  viewer.container.style.width = width + "px";
  viewer.container.style.height = height + "px";
  viewer.onWindowResize( width, height );
}

document.querySelector( '#btn_change_size' ).addEventListener( 'click', function(){
  var newWidth = containerBaseWidth + (Math.random() - 0.5) * deltaSize;
  var newHeight = containerBaseHeight + (Math.random() - 0.5) * deltaSize;
  changeContainerSize( newWidth, newHeight );
}, false );