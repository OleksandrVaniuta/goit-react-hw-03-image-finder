import { MagnifyingGlass } from 'react-loader-spinner';

function Loader() {
  return (
    <div>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        margin="0 auto"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
        display="block"
      />
    </div>
  );
}

export default Loader;
