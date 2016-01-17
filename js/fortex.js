MathJax.Hub.Config({
  jax: ["input/TeX", "output/SVG"/*"output/HTML-CSS"*/],
  tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}
});

angular.module('fortex', [])
.controller("Widget", ["$scope", function ($scope) {
  $scope.formula="\\int";
}])
.directive("mathjaxBind", function() {
  return {
    restrict: "A",
    controller: ["$scope", "$element", "$attrs",
    function($scope, $element, $attrs) {
      $scope.$watch($attrs.mathjaxBind, function(texExpression) {
        var texScript = angular.element("<script type='math/tex'>")
          .html(texExpression ? texExpression :  "");
        $element.html("");
        $element.append(texScript);
        MathJax.Hub.Queue(["Reprocess", MathJax.Hub, $element[0]]);
      });
    }]
  };
});

