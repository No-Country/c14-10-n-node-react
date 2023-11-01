
const CardCredit = ({number,dateExpired,cvv}) => {
    // format card number
    const cardNumber = number ? number.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'') : null
    return (
        <article className="flex md:min-w-[22rem] h-56 bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform">
            <img className="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png"/>
            <div className="w-full px-8 absolute top-8">
                <div className="flex justify-between">
                    <div className="">
                        <p className="font-light">
                            Name
                        </p>
                        <p className="font-medium tracking-widest">
                            {`Jhon Doe`}
                        </p>
                    </div>
                    <img className="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png"/>
                </div>
                <div className="pt-1">
                    <p className="font-light">
                        Card Number
                    </p>
                    <p className="font-medium tracking-more-wider">
                        {
                            cardNumber ? cardNumber : `**** **** **** 1234`
                        }
                    </p>
                </div>
                <div className="pt-6 pr-6">
                    <div className="flex justify-between">
                        <div className="">
                            <p className="font-light text-xs">
                                Valid
                            </p>
                            <p className="font-medium tracking-wider text-sm">
                                11/15
                            </p>
                        </div>
                        <div className="">
                            <p className="font-light text-xs">
                                Expiry
                            </p>
                            <p className="font-medium tracking-wider text-sm">
                                {
                                    dateExpired ? dateExpired : `11/15`
                                }
                            </p>
                        </div>

                        <div className="">
                            <p className="font-light text-xs">
                                CVV
                            </p>
                            <p className="font-bold tracking-more-wider text-sm">
                                {
                                    cvv ? cvv : `***`
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