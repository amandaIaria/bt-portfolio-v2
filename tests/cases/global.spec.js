import { JSDOM } from 'jsdom';
import 'jsdom-global/register';

const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;
