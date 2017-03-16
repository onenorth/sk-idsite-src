'use strict';

// //Add sanitize
// angular.module('stormpathIdpApp', ['ngSanitize']);


//Add HeaderFooter
angular.module('stormpathIdpApp')
  .controller('HeaderFooter', function ($scope, $location) {
    var domain,
        domainToContentMapping,
        domainContent;

     $scope.isReady = false;

    domainToContentMapping = {
      alumni: {
        headerLogoUrl: 'images/logo.png',
        backUrl: '//skadden.com',
        backUrlLabel: 'RETURN TO SKADDEN.COM',
        loginPromptText: 'Please Login to access the Alumni Network',
        disclaimerText: 'Please note that you may access and use this section of our website only for lawful purposes. You may not use alumni data provided herein in connection with the transmission of mass unsolicited, commercial advertising or solicitations via direct mail, electronic mail or by telephone. In addition, the compilation, repackaging, dissemination or other commercial use of alumni data is prohibited.'
      },
      foundation: {
        headerLogoUrl: 'images/foundation-logo.png',
        backUrl: '//skaddenfellowships.org',
        backUrlLabel: 'RETURN TO SKADDEN FOUNDATION',
        loginPromptText: 'Please Login to access the Foundation Network',
        disclaimerText: 'Please note that you may access and use this section of our website only for lawful purposes. You may not use foundation data provided herein in connection with the transmission of mass unsolicited, commercial advertising or solicitations via direct mail, electronic mail or by telephone. In addition, the compilation, repackaging, dissemination or other commercial use of foundation data is prohibited.'
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
    } else {
      console.log(domain);
    }

    $scope.isReady = true;
  });
