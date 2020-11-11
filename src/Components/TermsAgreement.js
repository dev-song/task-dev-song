import React, { useEffect, useState } from 'react';

function TermsAgreement({ handleMainTerm }) {
  const [wholeTerm, setWholeTerm] = useState(false);
  const [mainTerm, setMainTerm] = useState(false);
  const [subTerm, setSubTerm] = useState(false);

  const handleAllTerms = e => {
    const CHECKED = e.target.checked;

    setWholeTerm(CHECKED);
    setMainTerm(CHECKED);
    setSubTerm(CHECKED);
  }

  useEffect(() => {
    setWholeTerm(mainTerm && subTerm);
    handleMainTerm(mainTerm);
  }, [mainTerm, subTerm, handleMainTerm]);

  return (
    <div className='TermsAgreement'>
      <h2 className='title'>
        약관 동의
      </h2>
      <div className='terms-agreement__form'>
        <input
          className='agreement-full__checkbox'
          type='checkbox'
          checked={wholeTerm}
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
              checked={mainTerm}
              onChange={() => setMainTerm(!mainTerm)}
            />
            <label className='sub-terms__label'>
              여행자 약관 동의 (필수)
            </label>
          </div>
          <div className='sub-terms--container'>
            <input
              className='sub-terms__checkbox'
              type='checkbox'
              checked={subTerm}
              onChange={() => setSubTerm(!subTerm)}
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