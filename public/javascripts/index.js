$(function(){
var html = '<div class="main-content"> <div class="heading"> <h3>Rate your experience with the invoicing process</h3> <a class="closeButton" onclick="closePopup();">[✕]</a> </div> <form id="review-form" method="post"> <div class="review-rating"> <label for="rating">Your rating</label> <label class="tooltip" for="rating"> <i class="tooltip-notch bottom-left"></i> <p>Click on a star to rate us</p> </label> <div  id="review-stars"></div> <span id="review-stars-hint"></span> </div> <div class="review-body"> <label for="review-body">Your feedback</label> <textarea name="body" id="review-body" aria-required="true" autofocus required></textarea> </div>      <div class="review-nps"> <label>E-invoicing feedback</label> <p class="review-nps-question">How likely are you to recommend this business to a friend or colleague?</p> <div class="review-nps-answers"> <label for="nps-0"  class="review-nps-least">Not very likely</label> <label for="nps-10" class="review-nps-most">Very likely</label> </div> </div> <div class="review-post-as"><input type="checkbox" name="anonymous" value="true"> <label for="anonymous">Send Anonymously?</label> </div> <div class="review-submit"> <button type="submit">Submit Review</button> </div> </form> </div>';
$('.container').replaceWith(html);
//populate nps
for(i=0;i<=10;i++){
  var nps = '<div class="review-nps-value"><input id="nps-'+i+'" type="radio" name="nps" value="'+i+'"><label for="nps-"'+i+'">'+i+'</label></div>';
  $(nps).insertBefore('.review-nps-least');
}
});
