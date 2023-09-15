import { fireEvent, render, screen } from '@testing-library/react';
import Test from './Test';

test('renders test component text', () => {
  render(<Test />);
  const linkElement = screen.getByText(/test component/i);
  expect(linkElement).toBeInTheDocument();
});

test('email must be rendered',()=>{
  render(<Test/>)
  const emailInputEl=screen.getByPlaceholderText(/email/i)
  expect(emailInputEl).toBeInTheDocument()
})

test('password input must be rendered',()=>{
  render(<Test/>)
  const pwdInputEl=screen.getByPlaceholderText(/password/i)
  expect(pwdInputEl).toBeInTheDocument()
})

test('button must be rendered',()=>{
  render(<Test/>)
  const btnEl=screen.getByRole(/button/i)
  expect(btnEl).toBeInTheDocument()
})

test('button must be disabled',()=>{
  render(<Test/>)
  const btnEl=screen.getByRole(/button/i)
  expect(btnEl).toBeDisabled()
})

test('email input must be changed ',()=>{
  render(<Test/>)
  const emailInputEl=screen.getByPlaceholderText(/email/i)
  const testValue='test@gmail.com'

  fireEvent.change(emailInputEl,{target:{value:testValue}})
  expect(emailInputEl.value).toBe(testValue)
})

test('password input must be changed ',()=>{
  render(<Test/>)
  const pwdInputEl=screen.getByPlaceholderText(/password/i)
  const testValue='test1234'

  fireEvent.change(pwdInputEl,{target:{value:testValue}})
  expect(pwdInputEl.value).toBe(testValue)
})

test('button shouldnot be disabled when input exists',()=>{
  render(<Test/>)
  const btnEl=screen.getByRole(/button/i)
  const emailInputEl=screen.getByPlaceholderText(/email/i)
  const pwdInputEl=screen.getByPlaceholderText(/password/i)
  const testValue='test1234'

  fireEvent.change(emailInputEl,{target:{value:testValue}})
  fireEvent.change(pwdInputEl,{target:{value:testValue}})

  expect(btnEl).not.toBeDisabled()
})