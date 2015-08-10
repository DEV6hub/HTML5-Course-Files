/* this script does two things:
 - uses prettify from google code to format sample code for readability
 - enables the user to toggle the view of the sample style code on/off
 */

// stuff the style block into a box on the page...
var str = '';
str += '<link type="text/css" rel="stylesheet" href="../../common/displayStyleBlock.css"/>';
str += '&lt;style&gt;' + document.getElementById('styleBlock').innerHTML + '&lt;/style&gt;';
document.getElementById('styleCodeBlock').innerHTML = str;
prettyPrint();

// ... and toggle the display of that box on and off (default: off)
function toggle() {
    var displayMode = (document.getElementById('styleCodeBlock').style.display != 'block') ? 'display:block' : 'display:none';
    document.getElementById('styleCodeBlock').setAttribute('style', displayMode);
}
