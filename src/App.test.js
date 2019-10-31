import React from 'react';
import { render } from '@testing-library/react';

import App, {strikeProcess,ballProcess,foulProcess} from './App';

test('it calculates strikes&balls count when a strike has occurred', () => {
  expect(strikeProcess(  {strikes:0,balls:1}  )).toStrictEqual(  {strikes:1,balls:1}  );
  expect(strikeProcess(  {strikes:1,balls:1}  )).toStrictEqual(  {strikes:2,balls:1}  );
  expect(strikeProcess(  {strikes:2,balls:1}  )).toStrictEqual(  {strikes:0,balls:0}  );
})

test('it calculates strikes&balls count when a ball has occurred', () => {
  expect(ballProcess(  {strikes:2,balls:0}  )).toStrictEqual(  {strikes:2,balls:1}  );
  expect(ballProcess(  {strikes:2,balls:1}  )).toStrictEqual(  {strikes:2,balls:2}  );
  expect(ballProcess(  {strikes:2,balls:2}  )).toStrictEqual(  {strikes:2,balls:3}  );
  expect(ballProcess(  {strikes:2,balls:3}  )).toStrictEqual(  {strikes:0,balls:0}  );
})

test('it calculates strikes&balls count when a foul has occurred', () => {
  expect(foulProcess(  {strikes:0,balls:3}  )).toStrictEqual(  {strikes:1,balls:3}  );
  expect(foulProcess(  {strikes:1,balls:3}  )).toStrictEqual(  {strikes:2,balls:3}  );
  expect(foulProcess(  {strikes:2,balls:3}  )).toStrictEqual(  {strikes:2,balls:3}  );
})

test('it displays headings Display & Dashboard', () => {
  const { getByText } = render(<App />);
  getByText(/display/i);
  getByText(/dashboard/i);
});

test('it displays buttons Strike, Ball, Foul & Hit', () => {
  const { getAllByText, getByText } = render(<App />);
  getAllByText(/strike/i);
  getAllByText(/ball/i);
  getByText(/foul/i);
  getByText(/hit/i);
});


