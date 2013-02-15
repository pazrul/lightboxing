This is going to be a plugin for doing lightbox effects. Another one, I know.

But! The goal is to integrate Video for Everyone (http://camendesign.com/code/video_for_everybody) for media playback, as well as image lightboxes. 

Images: Limited to the available viewport, could be an easy to modify flag (FALSE will allow full img source size)

for placeholder images I'm thinking of using lorempixel.com

usage is as such: 
<a> or <img> src or href is set tohttp://lorempixel.com/{width}/{height}/{category}/
	example: http://lorempixel.com/400/200/technics/
category can be omitted for a random image


Videos: Video for Everyone

Audio: Not planned? Should we imbed audio somehow? I don't think audio needs to be that focused on the page. Thoughts Dylan?

Slideshow: Instead of rel= use HTML5 data attribute. Normal lightboxing[$tag] used for relations for galleries.

More notes to come, here's a starting point 

Next point! Use alt tag to display the text below. Also use this text as another link with target="_blank" for direct linking to individual pictures.

