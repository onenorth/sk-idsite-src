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
        logoUrl: 'https://www.skadden.com/sites/all/themes/skadden_main/images/alumni_footer.png',
        backUrl: '#backAlumni',
        backUrlLabel: 'Alumni Back Url Label',
        loginPromptText: 'Login Alumns',
        joinPromptText: 'Contact XYZ to join the Alumni site',
        disclaimerText: 'Alumni disclaimer text - Lorem Ipsum'
      },
      foundation: {
        logoUrl: 'https://www.skaddenfellowships.org/sites/all/themes/skadden_fellows/images/logo.png',
        backUrl: '#backFoundation',
        backUrlLabel: 'Foundation Back Url Label',
        loginPromptText: 'Login Foundation',
        joinPromptText: 'Contact XYZ to join the Foundation site',
        disclaimerText: 'Foundation disclaimer text - Lorem Ipsum'
      }
    };

    domain = $location.host().split('.')[0];

    domainContent = domainToContentMapping[domain];

    if (domainContent){
      $scope.logoUrl = domainContent.logoUrl;
      $scope.backUrl = domainContent.backUrl;
      $scope.backUrlLabel = domainContent.backUrlLabel;
      $scope.loginPromptText = domainContent.loginPromptText;
      $scope.joinPromptText = domainContent.joinPromptText;
      $scope.disclaimerText = domainContent.disclaimerText;
    }
  });
