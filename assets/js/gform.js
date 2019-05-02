(function($) {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwEFDubiAPHsTnn22WwGyVyg8Zz4yG1dCfMH_FGhP6NmyEVGZQ/exec'
  const form = document.forms['submit-to-google-sheet']
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {console.log('Success!', response); alert("Thanks for registering! We won't spam - we promise - but we'll keep you posted when new work is available!") })
      .catch(error => console.error('Error!', error.message))
  })
})(jQuery);
