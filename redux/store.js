import { createStore } from 'redux';
import {counterReducer, menuReducer} from './counter';

export let store = createStore(counterReducer);
export let menuStore = createStore(menuReducer);




