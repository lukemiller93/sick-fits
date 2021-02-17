/* eslint-disable react/prop-types */
import UpdateProduct from '../components/UpdateProduct';

export default function UpdatePage({ query: { id } }) {
  console.log(id);
  return (
    <div>
      <UpdateProduct id={id} />
    </div>
  );
}
