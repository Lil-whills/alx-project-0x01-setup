import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({id, name, username, email, phone, website, address, company }) => {
  return (
    <div className="max-w-md mx-auto mx-auto my-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name} (@{username})</h2>
        <p className="text-gray-600">{email}</p>
        <p className="text-gray-600">phone: {phone}</p>
        <p className="text-gray-600">Website: {website}</p>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        <p><strong>Address:</strong>{address?.street}, {address?.suite}, {address?.city}, {address?.zipcode}</p>
        <p><strong>Geo:</strong> Lat: {address?.geo.lat}, Lng: {address?.geo.lng}</p>
        <p><strong>Company:</strong> {company?.name}</p>
        <p><strong>Catch Phrase:</strong> "{company?.catchPhrase}"</p>
      </div>
    </div>
  )
}
export default UserCard;