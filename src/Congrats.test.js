import React from 'react';
import Enzyme ,{ shallow} from 'enzyme';

import EnzymeAdapter from 'enzyme-adapter-react-16';

import Congrats from './Congrats';

import {findByTestAttr} from '../test/testUtils'

Enzyme.configure({adapter:new EnzymeAdapter()})

/**
 * @function setup
 * @param {object} props -Component Props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props={}) => {
    return shallow(<Congrats {...props}/>)


}

test ('renders with out error', () => {

    const wrapper = setup();
    const Component = findByTestAttr(wrapper,'componet-congrats');
    expect(Component.length).toBe(1);

});

test ('renders no text when `success` Prop is false',()=>{

    const wrapper = setup({success:false});
    const Component = findByTestAttr(wrapper,'componet-congrats');
    expect(Component.text()).toBe('');

});

test('renders non empty congrats message when sucess prop is true',() => {

    const wrapper = setup({success:true});

    const message = findByTestAttr(wrapper,'congrats-message');

    expect(message.text().length).not.toBe(0);


});
