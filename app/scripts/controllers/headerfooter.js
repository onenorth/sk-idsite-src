'use strict';

// //Add sanitize
// angular.module('stormpathIdpApp', ['ngSanitize']);


//Add HeaderFooter
angular.module('stormpathIdpApp')
  .controller('HeaderFooter', function ($scope, $location) {
    var domain,
        domainToContentMapping,
        domainContent;

    domainToContentMapping = {
      alumni: {
        headerLogoUrl: 'images/logo.png',
        backUrl: '//skadden.com',
        backUrlLabel: 'RETURN TO SKADDEN.COM',
        loginPromptText: 'Please Login to access the Alumni Network',
        disclaimerText: 'Alumni disclaimer text - Lorem Ipsum'
      },
      foundation: {
        headerLogoUrl: 'images/foundation-logo.png',
        backUrl: '//skaddenfellowships.org',
        backUrlLabel: 'Fellows Back Url Label',
        loginPromptText: 'Please Login to access the Foundation Network',
        disclaimerText: 'Fellows disclaimer text - Lorem Ipsum'
      }
    };

    domain = $location.host().split('.')[0];

    domainContent = domainToContentMapping[domain];

    if (domainContent){
      $scope.headerLogoUrl = domainContent.headerLogoUrl;
      $scope.backUrl = domainContent.backUrl;
      $scope.backUrlLabel = domainContent.backUrlLabel;
      $scope.loginPromptText = domainContent.loginPromptText;
      $scope.disclaimerText = domainContent.disclaimerText;
    }
  });
