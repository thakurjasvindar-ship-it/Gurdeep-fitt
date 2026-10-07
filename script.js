document.getElementById('clientForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  const data = Object.fromEntries(new FormData(this).entries());
  data.submittedAt = new Date().toISOString();
  const old = JSON.parse(localStorage.getItem('gurdeepFitnessApplications') || '[]');
  old.push(data);
  localStorage.setItem('gurdeepFitnessApplications', JSON.stringify(old));
  document.getElementById('success').hidden = false;
  this.querySelector('.submit').disabled = true;
  this.querySelector('.submit').textContent = 'Application Saved ✓';
  window.scrollTo({top: document.getElementById('success').offsetTop - 120, behavior:'smooth'});
});
