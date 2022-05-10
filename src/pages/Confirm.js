import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";
import '../style/Confirm.css'
import GooglePayButton from '@google-pay/button-react'
import Mapa from '../components/map.js'
import { v4 as uuidv4 } from 'uuid';


const Confirm = ({order}) => {
    const [info, setInfo] = useState(false)
    const allOrder = Object.entries(order)
    const Suma = allOrder.reduce(
        (previousValue, currentValue) => previousValue + +currentValue[1][1].toFixed(2),
        0);
 
    const swapdiv = (data, Suma) => {
        switch (data) {
            case "crypto":
                setInfo(
                    <div className='OneElementSwap'>
                        <div className='TitleSwap'>Metoda płatności: Crypto</div>
                        <div className='row'>
                            <div className='col-3'>Bitcoin </div>
                            <div className='col-3'>BTCUSD</div>
                            <a className='col-6'>{uuidv4().slice(0,18)}</a>
                        </div>
                        <div className='row'>
                            <div className='col-3'>Ethereum</div>
                            <div className='col-3'>ETHUSD</div>
                            <a className='col-6'>{uuidv4().slice(0,18)}</a>
                        </div>
                        <div className='row'>
                            <div className='col-3'>Litecoin</div>
                            <div className='col-3'>LTCUSD</div>
                            <a className='col-6'>{uuidv4().slice(0,18)}</a>
                        </div>
                    </div>
                );
                break;
            case "creditcard":
                setInfo(
                    <div className='OneElementSwap'>
                        <div className='TitleSwap'>Metoda płatności: GooglePay</div>
                        <div className='GooglePayInfo'>
                            <GooglePayButton 
                            environment='TEST'
                            buttonSizeMode='fill'
                            paymentRequest={{
                                apiVersion: 2, 
                                apiVersionMinor: 0,
                                allowedPaymentMethods: [
                                    {
                                        type: 'CARD',
                                        parameters: {
                                            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                            allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                        },
                                        tokenizationSpecification: {
                                            type: 'PAYMENT_GATEWAY',
                                            parameters: {
                                                gateway: 'example',
                                                gatewayMerchantId: 'exampleGatewayMerchantId',
                                            },
                                        },
                                    },
                                ],
                                merchantInfo: {
                                    merchantId: '17613812255336763067',
                                    merchantName: 'Demo Only (you will not be charged)',
                                },
                                transactionInfo: {
                                    totalPriceStatus: 'FINAL',
                                    totalPriceLabel: 'Total',
                                    totalPrice: Suma,
                                    currencyCode: 'PLN',
                                    countryCode: 'PL',
                                },
                            
                            }}
                            onLoadPaymentData={paymentData => {
                                console.log('TODO: send order to server', paymentData.paymentMethodData);
                                window.history.push('/finishorder');
                            }}
                            />


                        </div>
                    </div>
                    
                );
                break;
            case "cash":
                setInfo(
                    <div className='OneElementSwap'>
                        <div className='TitleSwap'>Metoda płatności: Cash</div>
                        <div className='cashInfoText'>! Zapłać gotówką przy odbiorze !</div>
                    </div>
                );
                break;
            
        }
    }
     
      
  return (
    <div>
        <div className='myfinishTitle'>
            <Link exact to="/Home" id='finishback'>Cansel_order</Link>
            <div id='finishtitle'>ZAKONCZENIE ZAKUPU</div>
        </div>
        <div className='container' id='finishContainer'>
            
            <div className='row' id='Payment'>
                <div className='col-12' id='payTitle'>Wybierz metodę platności</div>
                <div className='col-4' id='chooseimg' onClick = { () => {swapdiv("crypto" , Suma)}}><img id='imgPayment' alt='img' src='https://media.publit.io/file/IMG_3398-s.jpg?at=eyJpdiI6Ilc0NHoyeGxqUnQrOEptb3p6UlVIS0E9PSIsInZhbHVlIjoiWWh0VDkyNE9XYWhxeUFXNTQ0K1NNV0FMYUJWYkJtckU1SElWaVhnSGRIVT0iLCJtYWMiOiI1YmJiNTU1NWM3MDQwMGQyOTZhNTA4NmRiNzY0MzQ4NWU3M2Q3ODA3NGJhZmY0NmFkOTdlMDIxYmQ5YjVhMWVhIn0='/></div>
                <div className='col-4' id='chooseimg' onClick = { () => {swapdiv("creditcard" , Suma)}}><img id='imgPayment' alt='img' src='https://media.publit.io/file/unnamed-x4.png?at=eyJpdiI6Ikt3N0pabmNyaTdrVmZpQ3VPOGhVSWc9PSIsInZhbHVlIjoiMERPNlwvandxcUdJWU9TdzdLY01jVVJoSHVuODBCR0ZWMEdRb0UxUlM3Ums9IiwibWFjIjoiMzRiM2NhNmVkNmVmZWRkNjFjYTNjNmVlZjhlZWJiZTQzMzEyZjJiYmJmMmEwMGJkNmMxMzNmYjEyNzYzZjQ2NCJ9'/></div>
                <div className='col-4' id='chooseimg' onClick = { () => {swapdiv("cash" , Suma)}}><img id='imgPayment' alt='img' src='https://media.publit.io/file/IMG_3396-8.jpg?at=eyJpdiI6InVcL3RNamZPQW1NZXhVeFZYK2RWU0ZBPT0iLCJ2YWx1ZSI6IjV1VU9UMlZBSzQ4SDVzOVUrUFlFYW1aQ3ZWTnZ4eG9QMFBhb2ZQakJUdXc9IiwibWFjIjoiZTI5NTlkM2M3OTY2ZjcyMGM3YzVjODUzZjAyYjVlMzQ1ZDQxZjE3NDQxYjZmOTRjZGE4NjQ5MzYyNDEyMmMxYiJ9'/></div>
                <div className='col-4' id='choose' onClick = { () => {swapdiv("crypto", Suma)}}>Crypto</div>
                <div className='col-4' id='choose' onClick = { () => {swapdiv("creditcard" , Suma)}} >GooglePay</div>
                <div className='col-4' id='choose' onClick = { () => {swapdiv("cash" , Suma)}}>Cash</div>
                <div className='col-12'>
                    <div className='swapInfoDiv'>
                        {info}    
                    </div>
                    
                </div>
                
            </div>
            <div>To jest twój adres dostawy</div>
            <div className='row' id='FinishMap'>
                <Mapa />
            </div>
            <div className='row' id='finishButton'> 
                <Link exact to="/finishorder" className='col-12' id='confirmEdit' >CONFIRM</Link>
            </div>
        </div>
        <Navbar/>
    </div>
  )
}

export default Confirm