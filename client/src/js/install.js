const butInstall = document.getElementById('buttonInstall');

// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // defer prompt event for install
  window.deferredPrompt = event;
  butInstall.style.visibility = 'visible';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async (event) => {
  // set promptEvent equal to the deferred prompt
  const promptEvent = window.deferredPrompt;

  // check for promptEvent
  if (!promptEvent) {
    return;
  }
  // call prompt method on the deferred promptEvent
  await promptEvent.prompt();
  // set window's deferredPrompt to null
  window.deferredPrompt = null;

});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  // change buttons visibility
  butInstall.style.visibility = 'hidden';
  window.deferredPrompt = null;
  console.log('app installed', event);
});
