const ContactCard = ({
    name,
    relationship,
    address,
    phone,
    urlImg
}) => {
    return (
        <article className="bg-white rounded-[1rem] shadow-md p-3 px-6 flex flex-col items-center justify-center h-[300px]">
            <img className="rounded-full h-[130px] w-[130px] object-cover pb-2" src={urlImg} alt="" />
            <h2 className="font-bold">{name}</h2>
            <p className="text-gray-500 italic text-primary">{relationship}</p>
            <p className="truncate max-w-[200px]" >{address}</p>
            <p>{phone}</p>
        </article>
    )
}

export default ContactCard