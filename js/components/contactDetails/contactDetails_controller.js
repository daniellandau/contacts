app.controller('contactdetailsCtrl', ['ContactService', '$routeParams', '$scope', function(ContactService, $routeParams, $scope) {
	var ctrl = this;

	ctrl.uid = $routeParams.uid;

	$scope.$watch('ctrl.uid', function(newValue, oldValue) {
		ctrl.changeContact(newValue);
	});

	ctrl.changeContact = function(uid) {
		if (typeof uid === "undefined") {
			return;
		}
		ContactService.getById(uid).then(function(contact) {
			ctrl.contact = contact;
		});
	};

	ctrl.updateContact = function() {
		ContactService.update(ctrl.contact);
		console.log('updating Contact');
	};

	ctrl.deleteContact = function() {
		ContactService.delete(ctrl.contact);
		console.log('Deleting Contact');
	};
}]);