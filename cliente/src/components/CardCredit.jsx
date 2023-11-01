import cardIcon from '../assets/icons/card-icon.svg'
const CardCredit = ({ number, dateExpired, cvv, holdname, type }) => {
    // format card number
    const cardNumber = number ? number.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/, '') : null
    const dateExpiredFormat = dateExpired ? dateExpired.replace(/^(\d{2})(\d{2})$/, '$1/$2') : null;
    console.log(dateExpiredFormat)
    const cardType = {
        'visa': 'https://img.freepik.com/free-icon/visa_318-202971.jpg',
        'mastercard': 'https://i.imgur.com/bbPHJVe.png',
        'amex': 'https://www.shareicon.net/download/2015/09/18/103187_card.ico',
        'diners': 'https://www.centralmedia.com.pe/wp-content/uploads/2022/12/Diners-Club-01.png',
        'discover': 'https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/Discover-icon.png',
        'jcb': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/1280px-JCB_logo.svg.png',
        'unknown': cardIcon
    }
    return (
        <article className="flex md:min-w-[22rem] h-56 bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform">
            <img className="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png" />
            <div className="absolute w-full px-8 top-8">
                <div className="flex justify-between">
                    <div className="">
                        <p className="font-light">
                            Nombre
                        </p>
                        <p className="font-medium tracking-widest">
                            {holdname ? holdname : 'John Dae'}
                        </p>
                    </div>
                    <img className='w-14 h-14' src={cardType[type ? type : 'unknown']} />
                </div>
                <div className="pt-1">
                    <p className="font-light">
                        Número de tarjeta
                    </p>
                    <p className="font-medium tracking-more-wider">
                        {
                            cardNumber ? cardNumber : '**** **** **** 1234'
                        }
                    </p>
                </div>
                <div className="pt-6 pr-6">
                    <div className="flex justify-between">
                        <div className="">
                            <p className="text-xs font-light">
                                Expiry
                            </p>
                            <p className="text-sm font-medium tracking-wider">
                                {
                                    dateExpiredFormat ? dateExpiredFormat : 'MM/YY'
                                }
                            </p>
                        </div>

                        <div className="">
                            <p className="text-xs font-light">
                                CVC
                            </p>
                            <p className="text-sm font-bold tracking-more-wider">
                                {
                                    cvv ? cvv : '***'
                                }
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </article>
    )
}

export default CardCredit