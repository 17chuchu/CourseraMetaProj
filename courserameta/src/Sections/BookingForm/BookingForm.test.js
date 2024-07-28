import { render, screen, fireEvent, waitForElement, getAllByAltText, waitFor, getAllByLabelText } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Test: submit empty form", async () => {
  render(<BookingForm />);
  const confirmButton = screen.getByTestId('confirm-button')
  fireEvent.click(confirmButton);

  expect(screen.queryAllByText('Missing or containing invalid information').length).toBe(6)
});

test("Test: add invalid email", async () => {
    render(<BookingForm />);
    const emailInput = screen.getByTestId('email-input')
    fireEvent.change(emailInput, { target: { value: 'invalid email' } });

    const confirmButton = screen.getByTestId('confirm-button')
    fireEvent.click(confirmButton);
  
    expect(screen.queryAllByText('Missing or containing invalid information').length).toBe(7)
});

test("Test: add phone number", async () => {
    render(<BookingForm />);
    const phoneInput = screen.getByTestId('phone-input')
    fireEvent.change(phoneInput, { target: { value: '01234567890' } });

    const confirmButton = screen.getByTestId('confirm-button')
    fireEvent.click(confirmButton);
    expect(screen.queryAllByText('Missing or containing invalid information').length).toBe(5)
  
    fireEvent.change(phoneInput, { target: { value: 'invalidNumber' } });
    fireEvent.click(confirmButton);
    expect(screen.queryAllByText('Missing or containing invalid information').length).toBe(6)
});

test("Test: add full name", async () => {
    render(<BookingForm />);
    const nameInput = screen.getByTestId('name-input')
    fireEvent.change(nameInput, { target: { value: 'Somename' } });

    const confirmButton = screen.getByTestId('confirm-button')
    fireEvent.click(confirmButton);
    expect(screen.queryAllByText('Missing or containing invalid information').length).toBe(5)
  
    fireEvent.change(nameInput, { target: { value: '%$)(@#' } });
    fireEvent.click(confirmButton);
    expect(screen.queryAllByText('Missing or containing invalid information').length).toBe(6)
});

test("Test: adult guest", async () => {
    render(<BookingForm />);
    const addAdultGuest = screen.getByTestId('add-adult-guest')
    const removeAdultGuest = screen.getByTestId('remove-adult-guest')

    fireEvent.click(addAdultGuest);
    fireEvent.click(addAdultGuest);
    expect(screen.queryAllByText('2').length).toBe(1)

    fireEvent.click(removeAdultGuest);
    expect(screen.queryAllByText('1').length).toBe(1)


    const confirmButton = screen.getByTestId('confirm-button')
    fireEvent.click(confirmButton);
    expect(screen.queryAllByText('Missing or containing invalid information').length).toBe(5)
});