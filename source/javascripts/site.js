// This is where it all goes :)
window._drip_pro = new DripPro

window.drip_plinko = function(drip, page) {
  var response = {}
  if (drip.is_anon) {

  } else {
    if (drip.custom_fields()['plan_id'] == undefined) {
    } else {
      // alert(drip.custom_fields()['plan_id'])
    }
  }

  return response
}


jQuery(function(){
  window._drip_pro.init({
    debug: true,
    template_path: '/ad-examples/',
    survey_trigger: function() {
      return false // If a question is available, should the survey widget be triggered?
    },
    can_display: function(intent, options) {
      return false // Given the "intent" (like modal), should we show it on this page? Useful for checking to see if you're on the checkout page, etc. and forcing DPT offers to not show.
    },
    pre_init: function() {
    },
    post_drip_response: function(payload) {
    },
    score: function(drip) {
    },
    increment_score: function(category, article_id) {
    },
    content_leaderboard: function() {

    },
    track: function() {
    },
    renderers: {
    }
  })
})