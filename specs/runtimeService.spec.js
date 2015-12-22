// Suite
describe('Testing RuntimeService', function() {
  var runtimeService;
  
  // Setup for all tests
  beforeEach(function(){
    // loads the app module
    module('xnote');
    inject(function($injector){
      runtimeService = $injector.get('runtimeService');
    });
  });
  
  // Test (spec)
  it('should say false for isNwJs', function() {
    var actual = runtimeService.isNwJsApp();
    expect(actual).toBeFalsy();
  });
    
});