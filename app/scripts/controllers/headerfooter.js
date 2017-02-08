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
        headerLogoUrl: 'images/logo.svg',
        backUrl: '#backAlumni',
        backUrlLabel: 'Alumni Back Url Label',
        loginPromptText: 'Login Alumns',
        joinPromptText: 'Contact XYZ to join the Alumni site',
        disclaimerText: 'Alumni disclaimer text - Lorem Ipsum'
      },
      foundation: {
        headerLogoUrl: 'images/foundation-logo.svg',
        backUrl: '#backFellows',
        backUrlLabel: 'Fellows Back Url Label',
        loginPromptText: 'Login Fellows',
        joinPromptText: 'Contact XYZ to join the Fellows site',
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
      $scope.joinPromptText = domainContent.joinPromptText;
      $scope.disclaimerText = domainContent.disclaimerText;
    }
  });
