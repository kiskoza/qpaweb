(function() {
  var team = localStorage.getItem('team');

  if(team == null ){
    team = prompt("Kérlek add meg melyik csapat tagja vagy");
    localStorage.setItem('team', team);
  }
})();
