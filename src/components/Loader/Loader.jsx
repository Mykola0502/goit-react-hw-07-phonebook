import { Circles } from 'react-loader-spinner';
import { LoadWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoadWrapper>
      <Circles
        height="75"
        width="75"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoadWrapper>
  );
};
