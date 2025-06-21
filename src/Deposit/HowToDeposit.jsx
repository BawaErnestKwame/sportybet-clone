import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const HowToDeposit = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Sticky header */}
      <div className="w-full bg-red-600 px-4 h-10 flex justify-between items-center sticky top-0 z-50 text-white">
        <h1 className="font-medium text-center w-full">Help | SportyBet</h1>
        <CloseIcon className="cursor-pointer" onClick={() => navigate(-1)} />
      </div>

      {/* Content */}
      <div className="px-4 w-full text-gray-800 pb-20">
        <h1 className="text-gray-900 font-medium py-4">How to Deposit</h1>

        <h2 className="text-gray-800 font-medium">A. There are four options offered to make a deposit.</h2>
        <p>1. Online Deposit</p>

        <ul className="list-disc pl-5">
          <li>Step 1: Select the Payment Method you wish to use;</li>
          <li>Step 2: Enter the amount you wish to deposit into your account in the given text fields;</li>
          <li>Step 3: Click on the "Top Up Now" button;</li>
          <li>Step 4: You will be prompted to follow instructions on your mobile phone to complete the transaction. If this is successful, the money will be credited to your account.</li>
          <li>Step 5: Click the button or link below the page which describes the transaction as being successful and you will be redirected to another page.</li>
        </ul>

        <p className="mt-2">
          <strong>Tips:</strong> For Telecel, you will need to get a Voucher Code first by following the instructions.
          For MTN mobile money, you need to follow the instructions to complete the validation steps.
        </p>

        <h2 className="mt-4 font-medium">Paybill</h2>
        <p>To Pay using Paybill for all networks, please follow the below steps:</p>

        <ul className="list-disc pl-5">
          <li>Step 1: Dial the number *711*222#</li>
          <li>Step 2: Enter the amount you wish to deposit into your account</li>
          <li>Step 3: Follow the instructions on your mobile phone to complete the transaction.</li>
        </ul>

        <p className="mt-2">
          If you have initiated a deposit via MTN and did not receive a prompt to approve it, please follow the below steps:
        </p>
        <ul className="list-disc pl-5">
          <li>Step 1: Dial *170#</li>
          <li>Step 2: Select Option 6; My Wallet</li>
          <li>Step 3: Select Option 3; My Approvals</li>
          <li>Enter PIN to view pending approvals and approve or decline payment.</li>
        </ul>

        <p className="mt-2">
          Kindly note that you can only use the same mobile number as your SportyBet account's to top up.
          If you wish to add a secondary number for deposits please follow the steps mentioned in point 4.
        </p>

        <p>
          In case you use other phone numbers to deposit and it is successful,
          a new account will be created and a password will be sent to the corresponding new phone number via SMS.
        </p>

        <p>SportyBet pays all your fees so that all deposits are completely free!</p>

        <h2 className="mt-4 font-medium">Bank Card (Card)</h2>
        <p>In relation to Bank Cards, customers can make deposits using bank cards such as Visa and Mastercard</p>

        <p>To deposit using a Bank card:</p>
        <ul className="list-disc pl-5">
          <li>Step 1: Simply go to “Me” and Click on “Deposit”</li>
          <li>Step 2: Select Card. Enter your card details (Card Number, Expiry date of card, CVV number). Please Note- CVV number is a 03 digit code at the back of the card. Enter the amount you wish to deposit and select the “Top Up Now” option.</li>
          <li>Step 3: Select the verification channel to receive the One Time Authorization Code - Email or Phone and click on “Continue”.</li>
          <li>Step 4: Enter your PIN or OTP which was sent to your mobile number/ email (depends on the verification channel selected) and complete the transaction.</li>
        </ul>

        <p>Your deposit is successfully credited to your SportyBet account.</p>

        <h2 className="mt-4 font-medium">Depositing via a secondary phone number.</h2>
        <p>
          Users can now add a new phone number to their primary accounts to make deposits.
          Primary account should be KYC verified by using Ghana card or Voters ID card.
        </p>

        <ul className="list-disc pl-5">
          <li>Step 1: Tap on your account's Balance in the top-right area</li>
          <li>Step 2 - Select “Deposit” and choose the “Mobile money” method.</li>
          <li>Step 3- Click on “Switch” beside the existing phone number</li>
          <li>Step 4- On the page that shows below, click on “Add a New Number"</li>
          <li>Step 5- Enter the new phone number and click on “Add"</li>
          <li>Step 6- An OTP will be sent to the old number, enter the OTP.</li>
        </ul>

        <p>The phone number will be Added Successfully</p>

        <h2 className="mt-4 font-medium">DISCLAIMER:</h2>
        <p>
          SportyBet accepts no responsibility should you make a deposit into any account other than that of the Company,
          or in case you enter your own account details incorrectly when requesting a withdrawal.
          Your deposit is credited to the SportyBet account using the Account information provided by you.
          It is your responsibility to ensure that you add the correct customer details as indicated on our site instructions
          and the correct SportyBet account and/or payment details.
          In the event that an error occurs, SportyBet accepts no responsibility for recovering these funds and your account will NOT be credited.
        </p>

        <h2 className="mt-4 font-medium">What types of Mobile Money accounts are accepted by our service?</h2>
        <p>
          Currently, we only accept deposits from Tigo, MTN Mobile Money, Airtel and Telecel.
          We are working hard to improve this and hope to be able to offer other options for other Mobile Money providers in the near future.
        </p>

        <h2 className="mt-4 font-medium">What are the limits for Deposits and how much does the Charge Fee cost?</h2>
        <ul className="list-disc pl-5">
          <li>Minimum per transaction is GHS 1.00.</li>
          <li>Maximum per transaction is GHS 20,000.00.</li>
          <li>All Deposits are free of charges.</li>
        </ul>

        <h2 className="mt-4 font-medium">How long does it take for the transaction to be processed and for the deposited sum to arrive into an account?</h2>
        <p>
          Charges are usually paid immediately. If your balance is unchanged, please check the "Transactions" for details.
          If still not shown, you can contact SportyBet Customer Service staff at any time.
        </p>
      </div>
    </>
  );
};

export default HowToDeposit;
