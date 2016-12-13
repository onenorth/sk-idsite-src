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
        headerLogoUrl: 'https://www.skadden.com/sites/all/themes/skadden_main/images/alumni_footer.png',
        backUrl: '#backAlumni',
        backUrlLabel: 'Alumni Back Url Label',
        loginPromptText: 'Login Alumns',
        joinPromptText: 'Contact XYZ to join the Alumni site',
        disclaimerText: 'Alumni disclaimer text - Lorem Ipsum'
      },
      foundation: {
        headerLogoUrl: 'https://www.skaddenfellowships.org/sites/all/themes/skadden_fellows/images/logo.png',
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
