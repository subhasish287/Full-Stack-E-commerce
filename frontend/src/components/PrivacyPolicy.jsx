import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className=" mx-auto my-8 p-6 bg-white border-t-2 ">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Order Cancellation and Return Policy</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Cancellation Policy</h2>
        <p className="text-gray-700 mb-2">
          The customer can choose to cancel an order any time before it's dispatched. The order cannot be canceled once it’s out for delivery. However, the customer may choose to reject it at the doorstep.
        </p>
        <p className="text-gray-700 mb-2">
          The time window for cancellation varies based on different categories and the order cannot be canceled once the specified time has passed.
        </p>
        <p className="text-gray-700 mb-2">
          In some cases, the customer may not be allowed to cancel the order for free, post the specified time, and a cancellation fee will be charged. The details about the time window mentioned on the product page or order confirmation page will be considered final.
        </p>
        <p className="text-gray-700 mb-2">
          In case of any cancellation from the seller due to unforeseen circumstances, a full refund will be initiated for prepaid orders.
        </p>
        <p className="text-gray-700 mb-2">
          Flipkart reserves the right to accept the cancellation of any order. Flipkart also reserves the right to waive off or modify the time window or cancellation fee from time to time.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Cancellation Policy - Hyperlocal</h3>
        <p className="text-gray-700 mb-2">
          The Orders placed by you on the Platform are non-cancellable and non-refundable via self-serve under MINUTES delivery option owing to quick delivery times, except if cancellation/refund is requested via CX Agent under the following circumstances:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>The Order could not be delivered within the estimated time that was displayed while placing the order;</li>
          <li>The Order has not been picked by the Delivery Partner;</li>
          <li>The Seller has not accepted or has canceled the Order due to reasons not attributable to You;</li>
          <li>Easy Doorstep Cancellation;</li>
          <li>Any other reason that the Platform may update from time to time.</li>
        </ul>
        <p className="text-gray-700 mb-2">
          We reserve the right to cancel your order, in whole or in part, for reasons including product unavailability, unforeseen circumstances beyond our control (force majeure), suspected fraudulent activity, violation of our Terms of Use, or logistical constraints. In all instances of cancellation (by us), you will not be charged for the canceled order. Any payments you have already made will be promptly refunded within 5-7 business days for any cancellations. You can track the status of your refund on the Order Details page/section.
        </p>
        <p className="text-gray-700 mb-2">
          Our return, cancellation, and refund policies may be subject to additional reasonable terms and conditions. These will be communicated to you periodically through the Platform's push notifications or other communication methods as outlined within these Terms or as determined by the Company.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Returns Policy</h2>
        <p className="text-gray-700 mb-2">
          Returns is a scheme provided by respective sellers directly under this policy in terms of which the option of exchange, replacement and/or refund is offered by the respective sellers to you. All products listed under a particular category may not have the same returns policy. For all products, the returns/replacement policy provided on the product page shall prevail over the general returns policy.
        </p>
        <p className="text-gray-700 mb-2">
          Do refer to the respective item's applicable return/replacement policy on the product page for any exceptions to this returns policy.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
