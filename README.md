This version allows you to run just the index.html.

Changes:
Removed the Service Worker (worker.js) and overrided the requests to load the local assets from memory.
Assets are loaded from <script> tags so you do not need fetch/XHR.
Added a hash for the id just incase the query for the id is stripped (some browsers used to do that for file://)

Issues:
Custom Levels button was removed because they do not work since u cannot use fetch or use XMLHttpRequest without running it with an http server (to my knowledge).