import styled from "styled-components";
import StyledButton from "../styled-components/StyledButton";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import InputMask from 'react-input-mask';

export default function CardInformation(props) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    useEffect(() => {
      props.setCardHolderName(watch("name"))
        props.setCardnumber(watch("number")) 
        props.setMonth(watch("month"))
        props.setYear(watch("year"))
        props.setCvc(watch("cvc"))
    } , [watch("number") , watch("cvc") , watch("name") , watch('month') , watch("year") ])
    const onSubmit = () => {
        props.setConfirm(true)
    }
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} name={errors.name} number={errors.number} month={errors.month} year={errors.year} cvc={errors.cvc}>
      <div className="inputWrapper">
        <label htmlFor="">Cardholder Name</label>
        <input type="text" className="input CardholderInput" placeholder="e.g. Jane Appleseed"
         {...register ("name" , {required: "Can't be blank" })} />
         {errors.name && <p className="errorMessage">{errors.name.message}</p>}
      </div>
      <div className="inputWrapper">
        <label htmlFor="">Card Number</label>
        <InputMask mask="9999 9999 9999 9999" maskChar={null} type="text" className="input numberInput" placeholder="e.g. 1234 5678 9123 0000" 
         {...register ("number" ,  {required: "Can't be blank" , minLength : {
                    value: 16 ,
                    message: "wrong format"
                } })} />
         {errors.number && <p className="errorMessage">{errors.number.message}</p>}
      </div>
      <div className="cardInfo">
        <div className="date inputWrapper">
            <label htmlFor="">Exp. Date (MM/YY)</label>
            <div className="dateInputs">
            <InputMask className="InputMaskMonth" mask="99" maskChar={null} type="text" placeholder="MM"
            {...register ("month" , { required: "Can't be blank" , maxLength : {
                    value: 2 ,
                }} )} />
            <InputMask className="InputMaskYear" mask="99" maskChar={null} type="text" placeholder="YY" 
            {...register ("year" , { required: "Can't be blank" , maxLength : {
                    value: 2 ,
                }} )} />      
            </div>
            {errors.year || errors.month ? <p className="errorMessage">Can&#39;t be blank</p> : null }
        </div>
        <div className="cvc inputWrapper">
                <label htmlFor="">CVC</label>
                <InputMask className="InputMaskCvc" mask="999" maskChar={null} type="text" placeholder="e.g. 123" 
                {...register ("cvc" , { required: "Can't be blank" , minLength : {
                    value: 3 ,
                    message: "wrong format"
                }} )}/>
                {errors.cvc && <p className="errorMessage">{errors.cvc.message}</p>}
            </div>
      </div>
      <StyledButton>Confirm</StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  width: 376px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  margin-top: 90px;
  
  .inputWrapper {
    display: flex;
    flex-direction: column;
    gap: 9px;
    position: relative;
  }
  /* .inputWrapper p {
    font-weight: 500;
font-size: 12px;
line-height: 15px;
color: #FF5050;
  } */
  label {
font-weight: 600;
font-size: 12px;
line-height: 15px;
letter-spacing: 2px;
text-transform: uppercase;
color: #21092F;
letter-spacing: 1px;
  }
  input {
    border: 1px solid #DFDEE0;
border-radius: 8px;
padding-left: 16px;
font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    outline: none;
    &::placeholder {
      opacity: 0.25;
    }
  }
  .input {
    width: 327px;
    height: 45px;
  }
  .CardholderInput {
    border: ${(props) => props.name ? "1px solid #FF5050" : null}
  }
  .numberInput {
    border: ${(props) => props.number ? "1px solid #FF5050" : null}
  }
  .InputMaskMonth{
    border: ${(props) => props.month ? "1px solid #FF5050" : null} ;
  }
  .InputMaskYear {
    border: ${(props) => props.year ? "1px solid #FF5050" : null} ;
  }
  .InputMaskCvc {
    border: ${(props) => props.cvc ? "1px solid #FF5050" : null} ;
  }
  .cardInfo {
    display: flex;
     gap: 11px;
  }
  .dateInputs{
    display: flex;
    gap: 8px;
  }
.date input {
    width: 72px;
    height: 45px;
}
.cvc input {
    width: 164px;
    height: 45px;
}
 .errorMessage {
  font-weight: 500;
font-size: 12px;
line-height: 15px;
color: #FF5050;
  position: absolute;
  bottom: -18px;
 }
`;


