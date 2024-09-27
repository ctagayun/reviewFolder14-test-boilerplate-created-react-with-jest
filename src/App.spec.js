import React from 'react';
import renderer from 'react-test-renderer';
import App, {dataReducer } from './App';
import { Counter } from './Counter';

const list = ['a', 'b', 'c'];

describe('My Test Suite', () => {
    it('My Test Case', () => {
      expect(true).toEqual(true);
    });
  }); //eof My Test Suite


  describe('App', () => {

    describe('Reducer', () => {
       it('should set a list', () => {
        const state = { list: [], error: null };

        const newState = dataReducer(state, {
            type: 'SET_LIST',
            list,
          });

         expect(newState).toEqual({ list, error: null });
        }); //eof  it('should set a list'

        it('should reset the error if list is set', () => {
            const state = { list: [], error: true };
            const newState = dataReducer(state, {
              type: 'SET_LIST',
              list,
            });
      
            expect(newState).toEqual({ list, error: null });
          }); //eof should reset the error

          it('should set the error', () => {
            const state = { list: [], error: null };
            const newState = dataReducer(state, {
              type: 'SET_ERROR',
            });
      
            expect(newState.error).toBeTruthy();
          }); //should set the error

   
    }); //eof decribe Reducer
   
  }); //eof decribe App

 
    
    



//   describe('App', () => {
//     test('snapshot renders', () => {
//       const component = renderer.create(<App />);
//       let tree = component.toJSON();
//       expect(tree).toMatchSnapshot();
//     });
//   });
          
//   describe('Counter', () => {
//     test('snapshot renders', () => {
//       const component = renderer.create(<Counter counter={1} />);
//       let tree = component.toJSON();
//       expect(tree).toMatchSnapshot();
//     });
//   });