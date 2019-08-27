function loadLjubljana(){
    document.getElementById("overcomingpart5map").innerHTML = `<div class="overcomingpart5maprow">
    <div class="overcomingpart5mapcolumn1">
        <img src="images/map/SVG/Asset 1.svg" class="overcomingpart5mapmap" >
        <div onclick="loadLyon()"class="overcomingpart5mapcity">Lyon, France</div>
        <div onclick="loadLjubljana()" class="overcomingpart5mapcity" id="mapcityactive">Ljubljana, Slovenia</div>
        <div onclick="loadLuxembourg()" class="overcomingpart5mapcity" >Luxembourg, Luxembury</div>
        <div onclick="loadViborg()" class="overcomingpart5mapcity">Viborg, Denmark</div>
    </div>
    <div class="overcomingpart5mapcolumn2">
        <div class="overcomingpart5mapdescription">The city of Ljubljana in Slovenia has introduced the following to improve accessibility:</div>
        <div class="overcomingpart5mapdetaildescolumn">
            <p class="overcomingpart5mapdetaildes">New footbridges have been built so people can cross the river safely.</p>
            <p class="overcomingpart5mapdetaildes">The Mesarski Most (Butcher’s Bridge) allows wheelchair users to access the boats.</p>
            <p class="overcomingpart5mapdetaildes">Tactile maps have been developed for visitors.</p>
        </div>
    </div>
 </div>`;
}

function loadLuxembourg(){
    document.getElementById("overcomingpart5map").innerHTML = `<div class="overcomingpart5maprow">
    <div class="overcomingpart5mapcolumn1">
        <img src="images/map/SVG/Asset 2.svg" class="overcomingpart5mapmap" >
        <div onclick="loadLyon()"class="overcomingpart5mapcity">Lyon, France</div>
        <div onclick="loadLjubljana()" class="overcomingpart5mapcity">Ljubljana, Slovenia</div>
        <div onclick="loadLuxembourg()" class="overcomingpart5mapcity" id="mapcityactive">Luxembourg, Luxembury</div>
        <div onclick="loadViborg()" class="overcomingpart5mapcity">Viborg, Denmark</div>
    </div>
    <div class="overcomingpart5mapcolumn2">
        <div class="overcomingpart5mapdescription">Luxembourg City are embracing new technologies to improve accessibility:</div>
        <div class="overcomingpart5mapdetaildescolumn">
            <p class="overcomingpart5mapdetaildes">Audible street signals have been added at all street crossings. </p>
            <p class="overcomingpart5mapdetaildes">Buses now all have ramps and sit low to the floor. There are both audio and visual announcements. </p>
            <p class="overcomingpart5mapdetaildes">Pieces of street furniture known as iBeacons have been installed at bus stops. They give passengers with visual impairments information about when the next bus will arrive and there are plans for them to benefit those with other disabilities in future.</p>
        </div>
    </div>
 </div>`;
}

function loadViborg(){
    document.getElementById("overcomingpart5map").innerHTML = `<div class="overcomingpart5maprow">
    <div class="overcomingpart5mapcolumn1">
        <img src="images/map/SVG/Asset 4.svg" class="overcomingpart5mapmap" >
        <div onclick="loadLyon()"class="overcomingpart5mapcity">Lyon, France</div>
        <div onclick="loadLjubljana()" class="overcomingpart5mapcity">Ljubljana, Slovenia</div>
        <div onclick="loadLuxembourg()" class="overcomingpart5mapcity">Luxembourg, Luxembury</div>
        <div onclick="loadViborg()" class="overcomingpart5mapcity" id="mapcityactive">Viborg, Denmark</div>
    </div>
    <div class="overcomingpart5mapcolumn2">
        <div class="overcomingpart5mapdescription">Viborg have made the following changes to improve accessibility:</div>
        <div class="overcomingpart5mapdetaildescolumn">
            <p class="overcomingpart5mapdetaildes">Streets, squares, and public gardens have been given new level pavements, ramps, and tactile guide strips. </p>
            <p class="overcomingpart5mapdetaildes">Resting platforms have been added to steep alleyways throughout the city.</p>
        </div>
    </div>
 </div>`;
}
function loadLyon(){
    document.getElementById("overcomingpart5map").innerHTML = `<div class="overcomingpart5maprow">
    <div class="overcomingpart5mapcolumn1">
        <img src="images/map/SVG/Asset 3.svg" class="overcomingpart5mapmap" >
        <div onclick="loadLyon()"class="overcomingpart5mapcity" id="mapcityactive">Lyon, France</div>
        <div onclick="loadLjubljana()" class="overcomingpart5mapcity" >Ljubljana, Slovenia</div>
        <div onclick="loadLuxembourg()" class="overcomingpart5mapcity" >Luxembourg, Luxembury</div>
        <div onclick="loadViborg()" class="overcomingpart5mapcity">Viborg, Denmark</div>
    </div>
    <div class="overcomingpart5mapcolumn2">
        <div class="overcomingpart5mapdescription">The city of Lyon has been praised for taking accessibility into account in all areas:</div>
        <div class="overcomingpart5mapdetaildescolumn">
            <p class="overcomingpart5mapdetaildes">All buses are accessible and there’s a dedicated service for people with disabilities. A service called Optiguide gives users real-time information and guidance tailored to their needs.</p>
            <p class="overcomingpart5mapdetaildes">A public transport app allows people to find the most accessible route to their destination. It lets them know about any broken-down lifts or escalators in advance.</p>
            <p class="overcomingpart5mapdetaildes">The city also has its own app, which includes the option for residents to report barriers to accessibility, such as broken lights, and to identify parking spaces for people with disabilities.</p>
        </div>
        <div class="overcomingpart5mapdetaildescolumn">
            <p class="overcomingpart5mapdetaildes">High-contrast maps and hearing loops are available to visitors at the tourist office.</p>
            <p class="overcomingpart5mapdetaildes">€38 million has been put towards improving the access of buildings and public areas.</p>
        </div>
    </div>
 </div>`;
}
