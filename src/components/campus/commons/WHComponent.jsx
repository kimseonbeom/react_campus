import React from 'react'
import styled from 'styled-components'
import { profile, attenPass, checkBox } from '../img'


export const ListHeader = styled.div`
    width: 100%;
    height: 110px;
    background-color: #fff;
    padding: 17px 25px 15px 25px;
    box-sizing: border-box;
`
export const CatTitle = styled.div`
    font-size: 18px;
    font-weight: 500;
`
export const SearchDrop = styled.div`
    position: relative;
    width: 150px;
    cursor: pointer;
`
export const DropHeader = styled.div`
    width: 82px;
    height: 36px;
    padding: 5px 11px;
    border: 1px solid #ccc;
    border-top: 2px solid #2EC4B6;
    background: #fff;
    margin-top: 10px;
    font-size: 14px;
    display: flex;
    flex-direction: row;

`
export const DropList = styled.ul`
    width: 82px;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin: 0;
    padding: 0;
    list-style: none;
    border: 1px solid #ccc;
    background: #fff;
    max-height: 150px;
    overflow-y: auto;
`
export const DropOption = styled.li`
    padding: 10px;
    &:hover {
        background: #ddd;
    }
`
export const SearchBar = styled.div`
    width: 267px;
    height: 36px;
    color: white;
    background-color: white;
    border: 1px solid #BBBBBB;
    border-top: 2px solid #2EC4B6;
    padding: 7px 8px;
    cursor: pointer;
    margin-top: 10px;
    margin-left: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
`
export const SearchText = styled.input`
    width: 242px;
    height: 18px;
    margin-left: 10px;
    border: none;
    font-size: 15px;
    &:focus{
        outline: none;
    }
`
export const WHContainer = styled.div`
    width: 100%;
    height: 65px;
    margin-top: 9px;
    background-color: #fff;
    padding: 14px 22px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
`
export const DateBox = styled.span`
    display: block;
    font-size: 12px;
    color: #aaa;
`
export const Title = styled.span`
    display: block;
    font-size: 14px;
    color: #212121;
    font-weight: 500;
`
export const Button = styled.button`
    width: 56px;
    height: 26px;
    border: none;
    border-radius: 5px;
    background-color: #2EC4B6;
    margin-left: auto;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
`
export const PageNation = styled.ul`
    width: 100%;
    height: 28px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 8px;
    margin-top: 23px;
    list-style: none;
    padding: 0;
`
export const PageArrowButton = styled.li`
    width: 28px;
    height: 28px;
    border: 1px solid #bbb;
    border-radius: 5px;
    background-color: #fff;
    list-style: none;
`
export const PageNumberButton = styled.li`
    width: 28px;
    height: 28px;
    border-radius: 5px;
    background-color: transparent;
    list-style: none;
    &:active{
        background-color: #2EC4B6;
        border: none;
    }
`
export const PageText = styled.a`
    text-align: center;
    font-size: 15px;
    color: #212121;
`
export const PageNumText = styled.a`
    margin-left: 9px;
    font-size: 15px;
    color: #212121;
    &:active{
        color: #fff;
        font-weight: 700;
    }
`
export const FlexDiv = styled.div`
    display: flex;
    flex-direction: row;
`

export const Writer = styled.span`
    display: block;
    font-size: 12px;
    color: #212121;
`
export const CheckButton = styled.div`
    width: 60px;
    height: 26px;
    border: 1px solid #E25C5C;
    border-radius: 5px;
    background-color: #fff;
    margin-left: auto;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    color: #E25C5C;
    line-height: 24px;
    margin-top: 5px;
`
export const CustomInput = React.forwardRef(({ value, onClick, onChange, placeholder }, ref) => 
    <input
        value={value}
        onClick={onClick}
        onChange={onChange}
        ref={ref}
        placeholder={placeholder}
        style={{
        width: "165px",
        height: "36px",
        fontSize: "16px",
        border: "1px solid #bbb",
        outline:'none',
        borderTop: "2px solid #2EC4B6",
        margin: '10px 0px',
        padding: "0 8px",
        }}
    />
);
export const MJCustomInput = React.forwardRef(({ value, onClick, onChange, placeholder }, ref) => 
    <input
        value={value}
        onClick={onClick}
        onChange={onChange}
        ref={ref}
        placeholder={placeholder}
        style={{
        width: "169px",
        height: "29px",
        fontSize: "14px",
        border: "1px solid #d6d6d6",
        outline:'none',
        padding: "0 8px",
        borderRadius:'3px',
        }}
    />
);
export const CheckContainer = styled.div`
    width: 100%;
    height: 20px;
    margin: 10px 0px;
`
export const CheckBox = styled.input`
    display: none;
`
export const CheckMark = styled.span`
    width: 17px;
    height: 17px;
    cursor: pointer;
    border: 1px solid #bbb;
    border-radius: 2px;
    background-color: white;
    display: inline-block;

    ${CheckBox}:checked + &{
        background-color: #2EC4B6;
        border: 1px solid #259e92;
        background-image: url(${checkBox});
        background-size: 85%;
        background-repeat: no-repeat;
        background-position: center;
    }
`
export const CheckText = styled.span`
    font-size: 12px;
    color: #212121;
    margin-left: 8px;
    line-height: 16px;
`
export const AttenBox = styled.div`
    width: 99px;
    height: 44px;
    background-color: #C2E8B7;
    border-radius: 5px;
    margin-top: 3px;
    margin-left: auto;
`

export const AttenText = styled.div`
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    margin-top: -1.5px;
`
export const AttenChangeIng = styled.div`
    width: 63px;
    height: 23px;
    border: 1px solid #aaa;
    border-radius: 5px;
    background-color: #aaa;
    font-size: 12px;
    text-align: center;
    margin-top: 3px;
    line-height: 20px;
    color: #fff;
`
export const AttenChange = styled.div`
    width: 63px;
    height: 23px;
    border: 1px solid #aaa;
    border-radius: 5px;
    background-color: #fff;
    font-size: 12px;
    text-align: center;
    margin-top: 3px;
    line-height: 20px;
    color: #aaa;
`
export const AttenPass = styled.div`
    width: 20px;
    height: 20px;
    background-color: #FF7E7E;
    border-radius: 10px;
    margin-top: 4px;
    margin-left: 5px;
    background-image: url(${attenPass});
    background-size: 15%;
    background-repeat: no-repeat;
    background-position: center;
`
export const NumberContainer = styled.div`
    width: 368px;
    height: 140px;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 24px 20px 24px 20px;
`
export const Profile = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-image: url(${profile});
`
export const RegistButton = styled.button`
    width: 69px;
    height: 29px;
    background-color: #2ec4b6;
    color: #ffffff;
    border-radius: 5px;
    border: #2ec4b6;
    font-size: 13px;
    font-weight: bold;
`
export const MailView = styled.div`
    width: 25px;
    height: 100%;
    ;
`
export const MailDashBox = styled.div`
    width: 385px;
    height: 209px;
    margin: auto;
    margin-bottom: 20px;
    background-color: #fff;
    border-radius: 5px;
    &:last-child {
    margin-bottom: 0; 
  }
`












function WHComponent() {
  return (
    <>
      <div></div>
    </>
  )
}

export default WHComponent