import React from 'react';

function TermsAgreement() {
  return (
    <div className='TermsAgreement'>
      <h2 className='title'>
        약관 동의
      </h2>
      <form className='terms-agreement__form'>
        <input
          className='agreement-full__checkbox'
          type='checkbox'
        />
        <label className='agreement-full__label'>
          전체 약관 동의
        </label>
        <div className='terms-agreement__sub-terms'>
          <div className='sub-terms--container'>
            <input
              className='sub-terms__checkbox'
              type='checkbox'
            />
            <label className='sub-terms__label'>
              여행자 약관 동의 (필수)
              </label>
          </div>
          <div className='sub-terms--container'>
            <input
              className='sub-terms__checkbox'
              type='checkbox'
            />
            <label className='sub-terms__label'>
              특가 항공권 및 할인 혜택 안내 동의 (선택)
              </label>
          </div>
        </div>
      </form>
    </div >
  );
}

export default TermsAgreement;