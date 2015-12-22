(function(module){

 	function RegisterTasks(gulp, tasks){

		gulp.task('test', function() {
  			var allFiles = [
			 'bower_components/angular/angular.js',
			 'bower_components/angular-animate/angular-animate.js',
			 'bower_components/angular-aria/angular-aria.js',
			 'bower_components/angular-material-icons/angular-material-icons.js',
			 'bower_components/angular-material/angular-material.js',
			 'bower_components/angular-mocks/angular-mocks.js',
			 'src/app/**/*.js',
			 'specs/**.spec.js'
			];
  			return gulp.src(allFiles)
    			.pipe(tasks.karma({
  					configFile: 'karma.conf.js',
  					action: 'run'
				}));
    			
		});
 	}

 	module.exports = {
 		init: RegisterTasks,
 		doc: function(){

 		}
 	};
})(module);