import React, { useEffect, useState } from 'react';

function TermsAgreement() {
  const [wholeAgreement, setWholeAgreement] = useState(false);
  const [mainAgreement, setMainAgreement] = useState(false);
  const [subAgreement, setSubAgreement] = useState(false);

  const handleAllTerms = e => {
    const CHECKED = e.target.checked;

    setWholeAgreement(CHECKED);
    setMainAgreement(CHECKED);
    setSubAgreement(CHECKED);
  }

  useEffect(() => {
    setWholeAgreement(mainAgreement && subAgreement);
  }, [mainAgreement, subAgreement]);

  return (
    <div className='TermsAgreement'>
      <h2 className='title'>
        약관 동의
      </h2>
      <div className='terms-agreement__form'>
        <input
          className='agreement-full__checkbox'
          type='checkbox'
          checked={wholeAgreement}
          onChange={e => handleAllTerms(e)}
        />
        <label className='agreement-full__label'>
          전체 약관 동의
        </label>
        <div className='terms-agreement__sub-terms'>
          <div className='sub-terms--container'>
            <input
              className='sub-terms__checkbox'
              type='checkbox'
              checked={mainAgreement}
              onChange={() => setMainAgreement(!mainAgreement)}
            />
            <label className='sub-terms__label'>
              여행자 약관 동의 (필수)
            </label>
          </div>
          <div className='sub-terms--container'>
            <input
              className='sub-terms__checkbox'
              type='checkbox'
              checked={subAgreement}
              onChange={() => setSubAgreement(!subAgreement)}
            />
            <label className='sub-terms__label'>
              특가 항공권 및 할인 혜택 안내 동의 (선택)
            </label>
          </div>
        </div>
      </div>
    </div >
  );
}

export default TermsAgreement;