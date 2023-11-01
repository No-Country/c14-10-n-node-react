import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import closeIcon from "../../../assets/icons/close-icon.svg";

export default function ConfigPage() {
  const [editProfile, setEditProfile] = useState(false);
  const stateInput = editProfile
    ? "bg-slate-50 border-gray-200"
    : "bg-transparent border-transparent pointer-events-none";
  const [editPhoto, setEditPhoto] = useState(false);
  const { dataUser } = useContext(AuthContext);

  // Define state for each editable field
  const [username, setUsername] = useState(dataUser?.username);
  const [fullName, setFullName] = useState("Samuel de Luque");
  const [email, setEmail] = useState("SamuelLuq1@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("98574542");
  const [location, setLocation] = useState("España, Barcelona");

  const handleEditProfile = () => {
    setEditProfile(!editProfile);
  };

  const handleChangePhoto = () => {
    setEditPhoto(!editPhoto);
  };

  // Define onChange handlers for editable fields
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <section className="md:px-16 flex flex-col gap-10 items-center md:w-[80%] mx-auto relative bg-white rounded-2xl">
      {editPhoto && (
        <div>
          {/* Content for when editPhoto is true */}
          <p>Edit Photo Section</p>
          <input type="file" className="mb-4" />
          <input
            className="bg-gray-400 text-black text-lg cursor-pointer font-bold px-8 py-2 rounded-[1rem] hover:shadow-xl"
            type="submit"
            value={"Subir imagen"}
          />
        </div>
      )}

      <div className="w-full flex gap-4 items-center py-10 border-b-[1px] z-10">
        <picture>
          <img
            className="rounded-full w-36"
            src="https://1.bp.blogspot.com/-swg8C41eG00/X1VbvxXQX7I/AAAAAAAAXl0/mgpSVh6rRi87j9bd8i-4Kldx0J90rRQpACLcBGAsYHQ/s320/Vegetta777_Aries.jpg"
            alt=""
          />
        </picture>
        <div className="flex flex-col gap-1">
          <a
            type="file"
            className="border-[1px] font-bold cursor-pointer rounded-[1rem] px-4 py-2 hover:bg-slate-200"
            onClick={handleChangePhoto}
          >
            Cambiar foto
          </a>
          <h2 className="pl-2 font-bold text-xl text-primary capitalize">
            {dataUser?.username}
          </h2>
          <p className="pl-2">Barcelona, España</p>
        </div>
      </div>
      <div className="w-full border-[1px] rounded-2xl p-4 z-10">
        <div className="flex justify-between">
          <h2 className="font-bold text-2xl text-slate-800">
            Informacion personal
          </h2>
          <p
            className={`border-[1px] font-bold cursor-pointer rounded-[1rem] px-4 py-2 hover:bg-slate-200 ${
              editProfile && "bg-blue-200"
            }`}
            onClick={handleEditProfile}
          >
            Editar
          </p>
        </div>
        <form className="flex flex-col gap-6">
          <section className="grid md:grid-cols-2 md:gap-8">
            <div className="flex flex-col items-start gap-1">
              <label className="font-semibold text-slate-600 text-lg">
                Nombre
              </label>
              <input
                className={`text-lg font-semibold ${stateInput} rounded-[.8rem] border-[1px]  outline-blue-400 text-slate-800 py-2 px-4 capitalize`}
                type="text"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="flex flex-col items-start gap-1">
              <label className="font-semibold text-slate-600 text-lg">
                Nombre completo
              </label>
              <input
                className={`text-lg font-semibold ${stateInput} rounded-[.8rem] border-[1px]  outline-blue-400 text-slate-800 py-2 px-4`}
                type="text"
                value={fullName}
                onChange={handleFullNameChange}
              />
            </div>
            <div className="flex flex-col items-start gap-1">
              <label
                className="font-semibold text-slate-600 text-lg"
                htmlFor=""
              >
                Correo
              </label>
              <input
                className={`text-lg font-semibold ${stateInput} rounded-[.8rem] border-[1px]  outline-blue-400 text-slate-800 py-2 px-4`}
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="flex flex-col items-start gap-1">
              <label className="font-semibold text-slate-600 text-lg">
                Numero Telefonico
              </label>
              <input
                className={`text-lg font-semibold ${stateInput} rounded-[.8rem] border-[1px]  outline-blue-400 text-slate-800 py-2 px-4`}
                type="number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </div>
            <div className="flex flex-col items-start gap-1">
              <label className="font-semibold text-slate-600 text-lg">
                Ubicacion
              </label>
              <input
                className={`text-lg font-semibold ${stateInput} rounded-[.8rem] border-[1px]  outline-blue-400 text-slate-800 py-2 px-4`}
                type="text"
                value={location}
                onChange={handleLocationChange}
              />
            </div>
          </section>
          {editProfile && (
            <div className="flex justify-center">
              <input
                type="submit"
                className="bg-gradient-blue-purple text-white text-lg cursor-pointer font-bold px-8 py-2 rounded-[1rem] hover:shadow-xl"
                value="Guardar cambios"
              />
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
