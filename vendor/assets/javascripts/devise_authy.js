$(document).ready(function() {
  $('a#authy-request-sms-link').livequery(function() {
    $(this).unbind('ajax:success');
    $(this).bind('ajax:success', function(evt, data, status, xhr) {
      alertMessage(data.message);
    });
  });
});

function initializeAuthy() {
  if (!$('.countries-input').length) {
    new Authy.UI().init();
  }
}
