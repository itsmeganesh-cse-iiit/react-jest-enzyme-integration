import React from 'react';
import App from './App';
import {shallow} from 'enzyme'

describe("AppComponent",()=>{
  test("Snapshot render",()=>{
    const component=shallow(<App/>);
    expect(component).toMatchSnapshot();
  })
})