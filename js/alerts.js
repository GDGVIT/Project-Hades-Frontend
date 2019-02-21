function functionAlertf1(msg, myYes) {
    var confirmBox = $("#confirm-f1");
    confirmBox.find("#message-f1").text(msg);
    confirmBox.find("#yes-f1").unbind().click(function() {
       confirmBox.hide();
    });
    confirmBox.find("#yes-f1").click(myYes);
    confirmBox.show();
}
function functionAlertf2(msg, myYes) {
    var confirmBox = $("#confirm-f2");
    confirmBox.find("#message-f2").text(msg);
    confirmBox.find("#yes-f2").unbind().click(function() {
       confirmBox.hide();
    });
    confirmBox.find("#yes-f2").click(myYes);
    confirmBox.show();
}
function functionAlertf3(msg, myYes) {
    var confirmBox = $("#confirm-f3");
    confirmBox.find("#message-f3").text(msg);
    confirmBox.find("#yes-f3").unbind().click(function() {
       confirmBox.hide();
    });
    confirmBox.find("#yes-f3").click(myYes);
    confirmBox.show();
}
function functionAlertf4(msg, myYes) {
    var confirmBox = $("#confirm-f4");
    confirmBox.find("#message-f4").text(msg);
    confirmBox.find("#yes-f4").unbind().click(function() {
       confirmBox.hide();
    });
    confirmBox.find("#yes-f4").click(myYes);
    confirmBox.show();
}
function functionAlertf5(msg, myYes) {
    var confirmBox = $("#confirm-f5");
    confirmBox.find("#message-f5").text(msg);
    confirmBox.find("#yes-f5").unbind().click(function() {
       confirmBox.hide();
    });
    confirmBox.find("#yes-f5").click(myYes);
    confirmBox.show();
}