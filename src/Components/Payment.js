import React from 'react';
import './styles/Payment.css';

function Payment({ mainTermAgreed }) {
  const CLASS_WITHOUT_AGREEMENT = 'payment__submit';
  const CLASS_WITH_AGREEMENT = `${CLASS_WITHOUT_AGREEMENT} active`;

  return (
    <div className='Payment'>
      <input
        className={
          mainTermAgreed
            ? CLASS_WITH_AGREEMENT
            : CLASS_WITHOUT_AGREEMENT
        }
        type='submit'
        value='결제하기'
      />
    </div>
  );
}

export default Payment;