module.exports = function(config){
	config.set({
		frameworks: ['jasmine'],
		plugins: [
 			'karma-phantomjs-launcher',
			'karma-jasmine'
 		],
 		browsers: ['PhantomJS'],
 		reporters: ['progress'],
 		logLevel: config.LOG_INFO,
 		singleRun: false
	})
};