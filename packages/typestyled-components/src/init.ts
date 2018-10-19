import { StyleFunction } from './types';
import { style as typestyle } from 'typestyle';

export let style: StyleFunction = typestyle
export const init               = (fn: StyleFunction) => { style = fn }
