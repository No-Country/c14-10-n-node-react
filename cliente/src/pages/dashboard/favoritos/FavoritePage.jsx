import ContactCard from "./ContactCard"

export default function FavoritePage() {
    const contactsExamples = [
        {
            id: 1,
            name: 'Tyson Ngo',
            relationship: 'Hermano',
            address: '2300 EEUU, lw 48105',
            phone: '123456789',
            email: 'tyson@gmail.com',
            urlImg:'https://esi.si.com/.image/t_share/MTk1NzQ5MjQ1NzE2ODAxNTMw/51214309600_bcc5759e10_c.jpg',
        },
        {
            id: 2,
            name: 'Laura Rodriguez',
            relationship: 'Amiga',
            address: '123 Calle Principal, Ciudad ABC',
            phone: '987654321',
            email: 'laura@example.com',
            urlImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ218pd0IzEhc-3efzVPNZd4sXPO29tc8orzlYKoRqIHgeO-vo1pRi-k0-7924Ix0wUKNI&usqp=CAU'
        },
        {
            id: 3,
            name: 'Carlos Gomez',
            relationship: 'Compañero de trabajo',
            address: '456 Business St, Office 201',
            phone: '555-123-789',
            email: 'carlos@company.com',
            urlImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxHgfLptt8NujsC-Ubg-8VmGdTNjKstiOw8g&usqp=CAU'
        },
        {
            id: 4,
            name: 'Ana Pérez',
            relationship: 'Prima',
            address: '789 Calle de la Familia, Ciudad XYZ',
            phone: '666-999-111',
            email: 'ana@email.com',
            urlImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTll6x3KipwAGNtXAkXG3gTuRk7ZbPRJ_X-ng&usqp=CAU'
        },
        {
            id: 5,
            name: 'Juan Martínez',
            relationship: 'Colega',
            address: '543 Oficina Central, Ciudad A',
            phone: '111-222-333',
            email: 'juan@colega.com',
            urlImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmUOEuS7V_Vi2usVm89PIS0fRAHSm1_QIvqQ&usqp=CAU'
        },
        {
            id: 6,
            name: 'Diana Johnson',
            relationship: 'Mentora',
            address: '987 Mentor Lane, Town XYZ',
            phone: '555-555-555',
            email: 'diana@mentor.com',
            urlImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz2iY0lJQKON6LyuvlypcZ_TBzw4tWmqfLmQ&usqp=CAU'
        },
        {
            id: 7,
            name: 'Roberto Fernández',
            relationship: 'Tío',
            address: '456 Calle de la Familia, Localidad ABC',
            phone: '123-456-789',
            email: 'roberto@familia.com',
            urlImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3km9ZjcSvQXamqfKscyjwBcQvWsqUsc6L2GJ-Zq-LX2WJZKxQdrqrOZaaJ8OXxDeni1c&usqp=CAU'
        }

    ]
    return (
        <section className="px-6">
            <h2 className="font-bold text-3xl py-4">Contactos</h2>
            <div className="grid lg:grid-cols-4 gap-10 justify-center items-start w-full px-6">
            {
                contactsExamples.map((contact) => (
                    <ContactCard
                    key={contact.id}
                    name={contact.name}
                    relationship={contact.relationship}
                    address={contact.address}
                    phone={contact.phone}
                    urlImg={contact.urlImg}
                    />
                    ))
                }
            </div>
        </section>
    )
}
