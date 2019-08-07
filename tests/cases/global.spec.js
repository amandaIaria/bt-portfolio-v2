import { JSDOM } from 'jsdom';
import 'jsdom-global/register';

const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.d = dom.window.document;
