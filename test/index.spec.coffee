require './helpers'
_ = require 'lodash'

describe "Top Bar Component", ->

  beforeAll ->
    moduleUnderTest = "../src/index.jsx"
    mockModules = [
      'offcourse-component-breadcrumbs'
      'offcourse-component-level-button'
    ]
    { @Component, @spy } = mockModule moduleUnderTest, mockModules

  afterAll ->
    disableMocks()

  Given -> 
    testdom "<html><body></body></html>"
    @levels = { key: 'foo' }
    @setLevel = ()-> 'foohoo'
  
  When  -> @subject  = renderElement @Component, { @location, @levels, @setLevel }
  Then  -> @classes = @subject.className.split ' '
  And   -> @classes.includes "bar"
  And   -> @classes.includes "bar-top"

  describe "props for breadcrumbs component", ->
    When  -> @props = @spy.getCall(0).args[0]
    Then  -> _.isEqual @props.levels, @levels
    And   -> @props.setLevel() == 'foohoo'

  describe "props for feedback button component", ->
    When  -> @props = @spy.getCall(1).args[0]
    Then  -> @level = { title: "Feedback", type: "feedback"}
    Then  -> _.isEqual @props.level, @level
    And   -> @props.setLevel() == 'foohoo'
    And   -> @props.current == false
