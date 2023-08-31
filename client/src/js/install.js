const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
  butInstall.style.visibility = 'visible';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async (event) => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }
  await promptEvent.prompt();

  window.deferredPrompt = null;

});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  butInstall.textContent = 'Installed'
  butInstall.style.visibility = 'hidden';
  window.deferredPrompt = null;
  console.log('app installed', event);
});
