import './BookingForm.css';
import {React, useState, useEffect} from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DatePicker } from 'rsuite';
import Section from "../Section";
import { Box, Heading, Stack, HStack, Button, VStack, Center, Text, Input, Textarea, Select, FormErrorMessage } from "@chakra-ui/react";


import 'rsuite/styles/index.less';
import 'rsuite/DatePicker/styles/index.css';


const BookingForm = () => {

  const [bookingResult, setBookingResult] = useState({
    adults: 0,
    children: 0,
    bookingDateTime: new Date(),
    name: '',
    email: '',
    phone: '',
    occasion: '',
  })

  const [validationResult, setValidationResult] = useState({
    emailValidateResult: true,
    nameValidateResult: true,
    phoneValidateResult: true,
    occasionValidateResult: true,
    bookingDateValidateResult: true,
    guestValidateResult: true
  })

  useEffect(() => {
    submitSuccessfulCheck();
  }, [validationResult]);

  const incrementAdult = (isIncrease) => {
    if(isIncrease){
      setBookingResult({...bookingResult, adults: bookingResult.adults + 1});
    }
    else{
      if(bookingResult.adults > 0){
        setBookingResult({...bookingResult, adults: bookingResult.adults - 1});
      }
    }
  }

  const incrementChild = (isIncrease) => {
    if(isIncrease){
      setBookingResult({...bookingResult, children: bookingResult.children + 1});
    }
    else{
      if(bookingResult.children > 0){
        setBookingResult({...bookingResult, children: bookingResult.children - 1});
      }
    }
  }

  const onSubmit = (event) => {
    console.log('onSubmit');

    var emailValidateResult = true;
    if(bookingResult.email.length > 0){
      emailValidateResult = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(bookingResult.email);
    }

    setValidationResult({
      emailValidateResult: emailValidateResult,
      nameValidateResult: /([a-zA-Z0-9_\s]+)/g.test(bookingResult.name),
      phoneValidateResult: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g.test(bookingResult.phone),
      occasionValidateResult: bookingResult.occasion.length > 0,
      bookingDateValidateResult: bookingResult.bookingDateTime > new Date(),
      guestValidateResult: bookingResult.adults > 0
    })
  }

  const submitSuccessfulCheck = () => {
    if(validationResult.emailValidateResult &&
      validationResult.nameValidateResult &&
      validationResult.phoneValidateResult &&
      validationResult.occasionValidateResult &&
      validationResult.bookingDateValidateResult &&
      validationResult.guestValidateResult
      ){
        setBookingResult({
          adults: 0,
          children: 0,
          bookingDateTime: new Date(),
          name: '',
          email: '',
          phone: '',
          occasion: '',
        })
    }
  }

  const selectDate = (date) => {

    bookingResult.bookingDateTime.setDate(date.getDate())
    bookingResult.bookingDateTime.setMonth(date.getMonth())
    bookingResult.bookingDateTime.setFullYear(date.getFullYear())


    setBookingResult({...bookingResult, bookingDateTime: bookingResult.bookingDateTime})
  }

  const selectTime = (date) => {

    bookingResult.bookingDateTime.setHours(date.getHours())
    bookingResult.bookingDateTime.setMinutes(date.getMinutes())
    bookingResult.bookingDateTime.setSeconds(date.getSeconds())

    setBookingResult({...bookingResult, bookingDateTime: bookingResult.bookingDateTime})
  }


  return (
    <div class={'BookingForm'}>
      <Center>
      <Heading as="h1" marginTop='0.5em'>
        Booking
      </Heading>
      </Center>
      <div className='closeButtonPosition'>
        <Button><FontAwesomeIcon icon={faArrowLeft} size="2x" onClick={event => window.location.href='/'}/></Button>
      </div>
      <form class={!validationResult.bookingDateValidateResult ? 'BookingFormDateError' : ''}>
        <div class="container">
        <VStack spacing={2} padding={'1em'}  alignItems={'Centre'}>
          <Center><Text as='h2'>How many guests</Text></Center>

          <Stack border='1px' borderColor={!validationResult.guestValidateResult ? 'red' : getComputedStyle(document.body).getPropertyValue('--secondary-black')} borderRadius='5px'>
          <Stack margin='0.5em'>
          <HStack className='clientInput' justifyContent="space-between">
            <HStack><Text as='h3'>Adults</Text></HStack>
            <HStack spacing={5}>
              <Button size='sm' onClick={() => incrementAdult(true)} data-testid="add-adult-guest">+</Button>
              <Text as='h3'>{bookingResult.adults}</Text>
              <Button size='sm' onClick={() => incrementAdult(false)} data-testid="remove-adult-guest">-</Button>
            </HStack>
          </HStack>

          <HStack className='clientInput' justifyContent="space-between">
            <HStack><Text as='h3'>Children</Text></HStack>
            <HStack spacing={5}>
              <Button size='sm' onClick={() => incrementChild(true)}>+</Button>
              <Text as='h3'>{bookingResult.children}</Text>
              <Button size='sm' onClick={() => incrementChild(false)}>-</Button>
            </HStack>
          </HStack>
          </Stack>
          </Stack>
          {!validationResult.guestValidateResult && <Text as="h4" fontSize='4x' color='red'>Missing or containing invalid information</Text>}

          <br></br>
          <Text as='h3'>Date</Text>
          <DatePicker format="MM/dd/yyyy" value={bookingResult.bookingDateTime} onChange={(date) => selectDate(date)}/>
          {!validationResult.bookingDateValidateResult && <Text as="h4" fontSize='4x' color='red'>Missing or containing invalid information</Text>}
          <br></br>
          <Text as='h3'>Time</Text>
          <DatePicker format="HH:mm:ss" value={bookingResult.bookingDateTime} onChange={(date) => selectTime(date)}/>
          {!validationResult.bookingDateValidateResult && <Text as="h4" fontSize='4x' color='red'>Missing or containing invalid information</Text>}
        </VStack>
        <VStack spacing={2} padding={'1em'}  alignItems={'left'}>
          <Center><Text as='h2'>Guest Detail</Text></Center>
          <br></br>
          <Text as='h3'>Full Name</Text>
          <Input
          data-testid="name-input"
            isInvalid={!validationResult.nameValidateResult}
            value={bookingResult.name}
            onChange={(event) => {setBookingResult({...bookingResult, name: event.target.value}); }}
            placeholder='Full Name'
            size='sm'
          />
          {!validationResult.nameValidateResult && <Text as="h4" fontSize='4x' color='red'>Missing or containing invalid information</Text>}
          <br></br>
          <Text as='h3'>Email Optional</Text>
          <Input
            data-testid="email-input"
            isInvalid={!validationResult.emailValidateResult}
            value={bookingResult.email}
            onChange={(event) => {setBookingResult({...bookingResult, email: event.target.value}); }}
            placeholder='Email'
            size='sm'
          />
          {!validationResult.emailValidateResult && <Text as="h4" fontSize='4x' color='red'>Missing or containing invalid information</Text>}
          <br></br>
          <Text as='h3'>Phone Number</Text>
          <Input
            data-testid="phone-input"
            isInvalid={!validationResult.phoneValidateResult}
            value={bookingResult.phone}
            onChange={(event) => {setBookingResult({...bookingResult, phone: event.target.value}); }}
            placeholder='Phone Number'
            size='sm'
          />
          {!validationResult.phoneValidateResult && <Text as="h4" fontSize='4x' color='red'>Missing or containing invalid information</Text>}
          <br></br>
          <Text as='h3'>Occasion</Text>
          <Select placeholder='Occasion' onChange={(event) => {setBookingResult({...bookingResult, occasion: event.target.value});}} isInvalid={!validationResult.occasionValidateResult}>
            <option value='Birthday'>Birthday</option>
            <option value='Engagement'>Engagement</option>
            <option value='Anniversary'>Anniversary</option>
        </Select>
        {!validationResult.occasionValidateResult && <Text as="h4" fontSize='4x' color='red'>Missing or containing invalid information</Text>}
        </VStack>
        </div>
        <Center>
          <Button size='md' marginTop='20px' width='20vw' onClick={onSubmit} data-testid="confirm-button">
            Confirm
          </Button>
        </Center>
      </form>
    </div>
  );
};

export default BookingForm;
